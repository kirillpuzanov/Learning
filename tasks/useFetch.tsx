import { Fragment, useEffect, useMemo, useRef, useState } from 'react'

type Post = {
	userId: number
	id: number
	title: string
	body: string
}

type PostsProps = {
	page?: number
	search?: string
}

export default function Posts(props: PostsProps) {
	const {
		data: posts,
		isLoading,
		error,
		refetchFc,
		isRefetching,
	} = useQuery<Post[]>(
		{
			url: 'https://jsonplaceholder.typicode.com/posts',
			args: { page: `${props.page || 1}`, search: `${props.search || ''}` },
		},
		{ retryCount: 4, enableAutoRequest: true }
	)

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return (
			<>
				<button type='button' onClick={refetchFc}>
					refetch
				</button>
				<p>Error: {error}</p>
			</>
		)
	}

	return (
		<>
			<button type='button' onClick={refetchFc}>
				refetch
			</button>
			{posts.map(({ title, body }, index) => (
				<Fragment key={index}>
					<h1>{title}</h1>
					<p>{body}</p>
				</Fragment>
			))}
		</>
	)
}

interface FetchArgs {
	url: string
	args: Record<string, string>
}

interface Args {
	retryCount?: number
	enableAutoRequest?: boolean
}

type fetchMode = 'refetch' | 'initial'

const initialLoadingState = {
	initial: false,
	refetch: false,
}
// const cache = {};

function useQuery<T>(fetchArgs: FetchArgs, additionalArgs: Args) {
	const { url, args } = fetchArgs
	const { retryCount, enableAutoRequest } = additionalArgs

	const firstRender = useRef(true)
	const retryCountRef = useRef<number>(retryCount || 0)

	const [data, setData] = useState<T>([] as T)
	const [loading, setLoading] = useState(initialLoadingState)
	const [error, setError] = useState<string | null>(null)

	const params = useMemo(() => new URLSearchParams(args).toString(), [args])

	const { initial: isLoading, refetch: isRefetching } = loading

	function fetchData(mode: fetchMode = 'initial') {
		// const key = params;
    // if (key in cache) {
    //   console.log('return res from cache !!!');
    //   return cache[key];
    // }

		setLoading(prev => ({ ...prev, [mode]: true }))
		fetch(`${url}?${params}`)
			.then(res => res.json())

			.then(result => {
				setData(result)
				// cache[key] = result;
				setError(null)
				retryCountRef.current = retryCount || 0
				// такое зануление вроде не должно ничего сломать
				setLoading(initialLoadingState)
			})

			.catch(err => {
				if (retryCountRef.current > 0) {
					retryCountRef.current--
					fetchData(mode)
					// reqCallReFetch(() => fetchData(mode), (((retryCount || 0) - retryCountRef.current) * 100));
				} else {
					setError(String(err))
					setLoading(initialLoadingState)
				}
			})
	}

	useEffect(() => {
		// ---- нужна проверка на firstRender так как при enableAutoRequest при первом рендере он тоже будет вызываться !!
		// чтобы это сработало - этот useEffect нужно ставить первым !!!
		if (enableAutoRequest && !firstRender.current) {
			retryCountRef.current = retryCount || 0
			fetchData('refetch')
		}
	}, [params, enableAutoRequest])

	useEffect(() => {
		console.log('--> init useEffect => ')
		firstRender.current = false
		fetchData()
	}, [])

	const refetchFc = () => {
		// retryCountRef.current = retryCount || 0; // --  может и надо занулять
		fetchData('refetch')
	}

	return { data, isLoading, error, refetchFc, isRefetching }
}

// const reqCallReFetch = (cb: any, delay: number) => {
//   console.log('-->delay  => ', delay);
//   setTimeout(cb, delay);
// };
