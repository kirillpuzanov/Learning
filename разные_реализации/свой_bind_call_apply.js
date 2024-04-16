

const user = {
	name: 'Ivan'
}

function getUserInfo(phone, email){
	console.log(`User name: ${this.name}, phone: ${phone}, email: ${email}` );
}

// ------>>>  реализация без использования встроенных методов ES6
function myBind(fn, ctx, ...rest) {

	return function(...args) {
		const uniqueKey = Symbol('uniqueKey');
		ctx[uniqueKey] = fn;

		const result = 	ctx[uniqueKey](...rest.concat(args))

		delete ctx[uniqueKey]

		return result
	}
}

// ------>>>  реализация без использования встроенных методов ES5
function myBind(fn, ctx, ...rest) {
	return function(...args) {
		// return fn.apply(ctx, rest.concat(args))
		return fn.call(ctx, ...rest.concat(args))
	}
}

myBind(getUserInfo, user, '8911-123-12-12', 'email@zxfa.com')()
myBind(getUserInfo, user)('8911-123-12-12', 'email@zxfa.com')
myBind(getUserInfo, user, '8911-123-12-12')('email@zxfa.com')


// // ------>>>  реализация call

function myCall(fn, ctx, ...rest) {
		const uniqueKey = Symbol('uniqueKey');
		ctx[uniqueKey] = fn;

		const result = 	ctx[uniqueKey](...rest)

		delete ctx[uniqueKey]

		return result
}


// myCall(getUserInfo, user, '8911-123-12-12', 'email@zxfa.com')



// ------>>>  реализация call

function myApply(fn, ctx, rest) {
	const uniqueKey = Symbol('uniqueKey');
	ctx[uniqueKey] = fn;

	const result = 	ctx[uniqueKey](...rest)

	delete ctx[uniqueKey]

	return result
}


// myApply(getUserInfo, user, ['8911-123-12-12', 'email@zxfa.com'])



