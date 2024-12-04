//  node разные_реализации/myPromiseAll.js

function promiseAll(arrFn) {
	const results = {}

	return new Promise((resolve, rej) => {
		for (let i = 0; i < arrFn.length; i++) {
			arrFn[i]
				.then(res => {
					results[i] = res
					if (Object.keys(results).length === arrFn.length) {
						console.log('--  results -->', results)
						resolve(Object.values(results))
					}
				})
				.catch(error => {
					rej({ status: 'rejected', reason: error })
				})
		}
	})
}

async function promiseAllAsync(arrFn) {
	const results = {}

	try {
		for (let i = 0; i < arrFn.length; i++) {
			const tempRes = await arrFn[i]
			results[i] = tempRes

			if (Object.keys(results).length === arrFn.length) {
				return Object.values(results)
			}
		}
	} catch (error) {
		return { status: 'rejected', reason: error }
	}
}

promiseAllAsync([
	Promise.resolve(1),
	new Promise(res => setTimeout(() => res('new Promise after 2000'), 2000)),
	Promise.resolve(10),
	new Promise((_, rej) => setTimeout(() => rej('new Promise reject'), 3000)),
])
	.then(res => console.log('--   -->', res))
	.catch(error => console.log('-- error  -->', error))

Macro




Micro
