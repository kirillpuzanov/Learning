# arguments / ...args

### arguments - это псевдомассив.

- **свойства индексированы  и есть свойство length**
- есть неперечисляемое, устаревшее свойство **callee (ссылка на текущую функцию)**
- у **callee есть свойство caller (ссылка на функцию, которая вызвала текущую)**

```jsx
function hash(...args) {

  log(Object.getOwnPropertyNames(args) );  
	//  [ '0', '1', '2', '3', '4', 'length' ]

  log(Object.getOwnPropertyNames(arguments) );  
	// [ '0', '1', '2', '3', '4', 'length', 'callee' ]

  log(arguments.callee) 
	// ссылка на текущую "выполняемую" функцию -> [Function: hash]

  log(arguments.callee.caller) 
	//ссылка на функцию, которая запустила текущую "выполняемую" функцию -> [Function (anonymous)]
 
}
hash(1,2,3,4,5)
```

**По arguments / ...args можно итерироваться** 

**Но методов массива у них НЕТ / т.к. это псевдомассив**

```jsx
function hash(...args) {
  for(let item of arguments) {
    console.log(item)
  }

  for(let item of args) {
    console.log(item)
  }

	Object.keys(arguments) // [ '0', '1', '2', '3', '4' ]

	arguments.map(() => {}) // Error arguments.map is not a function
}
hash(1,2,3,4,5)
```