# Chaining / Цепочка Promise

**Методы: then / catch / finally возвращают новый промис, и при необходимости могут возвращать значение, которое попадет аргументом в колбек в следующем промисе, за счет чего можно делать последовательную  цепочку вызовов.**

- На catch не останавливаемся….

При возникновении ошибки сваливаемся в ближайший (ниже по цепочке) обработчик catch, но на этом цепочка не останавливается, в обработчике catch мы можем вернуть какое - либо значение (может значение ошибки), которое попадет в следующий then

```jsx
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 300);
});

myPromise
	.then((res) => res)
	.then((res) => Error(res)) // генерим ошибку и прокидываем значение дальше
	.catch((err) => err) // ловим ошибку и и прокидываем дальше
	.then((res) => console.log('final then',res)) // final then Error: foo

	
	myPromise
	.then((res) => res)
	.then((res) => Error(res))
	.catch((err) => console.log('error -', err)) // error - foo
	.then((res) => console.log('final then',res)) // final then undefined
```

- **finnaly «пропускает» результат или ошибку дальше, к последующим обработчикам. Возврат значения из finnaly игнорируется.

***ИСКЛЮЧЕНИЕ**, когда внутри  finnaly происходит ошибка →  эта ошибка передается следующему ближайшему обработчику ОШИБКИ вместо любого предыдущего результата. В ТАКОМ СЛУЧАЕ РЕЗУЛЬТАТ ЦЕПОЧКИ ТЕРЯЕТСЯ.*

```jsx
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 300);
});

myPromise
	.then((res) => res)
	.then((res) => Error(res)) // генерим ошибку
	.finally(() => {.  // все равно сначала зайдем в finally
		console.log('finally')
		throw new Error('finally error')
	})
	.catch((err) => err) // ловим ошибку из finally, прокидываем дальше
	.then((res) => console.log('final then',res)) // дойдем сюда  
	// finally
	// final then Error: finally error
```

- ловим ошибки без catch, в then

```jsx
// ... Pr resolve
myPromise
	.then((res) => res)
	.then((res) => Error(res)) // генерим ошибку
	.finally(() => {  // все равно сначала зайдем в finally
		console.log('finally')
		throw new Error('finally error')
	})
	.then((res) => console.log('after finally then',res), (error) => {
		console.log('after finally then error handler',error)
		return '12345 - from then error handler'
		// обработка ошибки в 2 аргументе then, вывод 
		// - after finally then error handler Error: finally error
		// прокидываем через return "какое то значение дальше"
	})
	.catch((err) => err) // не попадаем
	.then((res) => console.log('final',res)) 
	// final 12345 - from then error handler

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("foo"), 300);  // ** reject
});

myPromise
	// второй аргумент при вызове then - функция по обработке ошибки
  .then(() => {}, (err) => console.log(`${err} - 1`))
  .then(() => {}, (err) => console.log(`${err} - 2`)) // не попадем
	.catch((err) => console.log('catch error', err)) // не попадем
	// Итог - foo - 1
```

- setTimeout внутри then

```jsx
myPromise
	.then((res) => res)
	.then((res) => { // ничего не возвращаем
		 setTimeout(() => {
			console.log('setTimeout');
			return res
		}, 2000)
	}) 
	.finally(() => console.log('finally'))
	.catch((err) => err) // не попадаем 
	.then((res) => console.log('final then',res)) // дойдем сюда  
	
// finally
// final then undefined
// примерно через 2 сек.  setTimeout foo
```

- ошибка внутри setTimeout

```
myPromise
	.then((res) =>{
		 setTimeout(() => {
			console.log('setTimeout', res);
				throw new Error('Error inside setTimeout')
		}, 2000)
	}) 
	.finally(() => console.log('finally'))
	.catch((err) => err) // не попали сюда !!!!
	.then((res) => console.log('final then',res)) // дойдем сюда 
	
// finally
// final then undefined
// примерно через 2 сек.  setTimeout foo +
// примерно через 2 сек.  Error: Error inside setTimeout
	 
```

- ошибка внутри then

```
myPromise
	.then((res) =>{
		throw new Error('Error inside first then')
	}) 
	.catch((err) => err) // ловим ошибку и и прокидываем дальше
	.then((res) => console.log('final then',res)) // дойдем сюда  
	// final then Error: Error inside first then
```