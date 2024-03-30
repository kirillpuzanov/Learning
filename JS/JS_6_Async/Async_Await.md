# Async Await

В JS под капотом реализованы за счет Генераторов

```jsx
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });
  let result = await promise; // будет ждать, пока промис не выполнится (*)
	log(result)
}

f();
```

- await можно использовать только внутри асинхронной функции
- await нельзя использовать на верхнем уровне вложенности, при необходимости можно создать async IIFE

```
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
})();
```

- можно создавать асинхронные метода классов

```jsx
class Waiter {
  async fun() {
    return await Promise.resolve(1);
  }
}
new Waiter()
  .fun()
  .then(alert); // 1
```