# Promise Base

**[Полное понимание асинхронности в браузере](https://habr.com/ru/companies/yandex/articles/718084/) - хорошая статья**

**[Визуализация промисов и Async/Await](https://habr.com/ru/articles/501702/) - хорошая статья**

[**EventLoop  тренажер**](https://www.jsv9000.app/)

```jsx
let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  resolve('resolve data')
  reject('reject data')
});
```

- ***Promise - это объект возвращенный функцией, которая не завершила свою работу.***
- ***Promise - это объект, представляющий результат успешного или неудачного завершения асинхронной операции.***
- ***Promise буквально представляет собой "обещание", сделанное функцией, которая через объект Promise вернет результат.***

У объекта `promise`, возвращаемого конструктором `new Promise`, есть внутренние свойства:

- `state` («состояние») — вначале `"pending"` /  `"fulfilled"` /  `"rejected"`
**Свойства `state` и `result` – внутренние, не имеем к ним прямого доступа.**
- `result` («результат») — вначале `undefined`, далее изменяется на `value` при вызове `resolve(value)` или на `error` при вызове `reject(error)`.

**Результат работы** **Promise *-* либо результат, либо ошибка,
либо вечно висящий в pending (скорее ошибка реализации)**

### Подписка на **Promise**:

**then / catch / finnaly**

- **then** - принимает два аргумента - 
1 - функция, которая вызовется при успешном выполнении, в свою очередь принимает результат “резолвинья” промиса
2 - функция, которая вызовется при ошибке, в свою очередь принимает значение из reject или дефолтную ошибку , если ничего явно не передали

```jsx
const p = new Promise((resolve, reject) => {
		resolve(10);
		reject('Some Error') // уже не сработает после res
})
pr.then((resolveData) => resolveData `10`, (rejectData) => rejectData)
```

- **catch -** можно не использовать второй аргумент внутри then, а по цепочке обработать ошибку в блоке **catch**

```jsx
pr
	.then((resolveData) => resolveData)
	.catch((error) => console.log(error))
```

- **finnaly -**  выполнится в любом случае, когда Promise завершится: успешно или с ошибкой (остановка индикатора загрузки)

***-** Функция внутри finnaly не имеет аргументов
- Обработчик finnaly «пропускает» результат или ошибку дальше, к последующим обработчикам.
**- Обработчик finnaly также не должен ничего возвращать. Если это так, то возвращаемое значение молча игнорируется.*** 

***ИСКЛЮЧЕНИЕ, когда внутри  finnaly происходит ошибка → затем эта ошибка передается следующему ближайшему обработчику ОШИБКИ вместо любого предыдущего результата.***

```jsx
new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => console.log("Промис завершён")) // спустя 2 сек. срабатывает
  .then(result => console.log(result)); // вместе с finally спустя 2 сек. выводит "value"
```

### Подписка на необработанную ошибку в Promise

```jsx
window.addEventListener('unhandledrejection', (event) => {
    console.log('Необработанная ошибка Promise. Позор вам!')
    console.log(event) // PromiseRejectionEvent
    console.log(event.reason) // O_o
})
```