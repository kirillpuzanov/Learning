// ------- простой обход нод дерева ---------

const thr = {
	v: 1,
	children: [
		{
			v: 2,
			children: [{v: 3}]
		},
		{
			v: 4,
			children: [
				{v: 5}, 
				{v: 6, 
					children:[
						{v: 7}
					]
				}
			]
		},
	]
}

const getVal = (three) => {
	const stack = [three];
	const res = [];
	while(stack.length > 0) {
		const node = stack.pop();
		if(node.v !== undefined) {
			res.push(node.v)
		}
		if(node.children?.length) {
			// stack.push(...node.children.reverse())
			for(let i = node.children.length - 1; i >= 0; i--) {
				stack.push(node.children[i])
			}
		}
	}
	return res
}
console.log(getVal(thr));