# setTimeout / setInterval

Методы планирования *не гарантируют* точную задержку, таймер в браузере может замедляться по многим причинам:

- Перегружен процессор.
- Вкладка браузера в фоновом режиме.
- Работа ноутбука от аккумулятора.

Браузеры ограничивают 4-мя мс минимальную задержку между пятью и более вложенными вызовами `setTimeout`, а также для `setInterval`, начиная с 5-го вызова.

- `setTimeout` позволяет вызвать функцию **один раз** через определённый интервал времени.
- `setInterval` позволяет вызывать функцию **регулярно**, повторяя вызов через определённый интервал времени.

```jsx
let timerId = setTimeout(fn, delay, arg1, arg2 ...);
clearTimeout(timerId);

let intervalId = setInterval(fn, delay, arg1, arg2 ...);
clearInterval(timerId)
```

### Вложенный (рекурсивный) setTimeout

```jsx

function timer() {
	let timerId = setTimeout(function tick() {
		console.log('tick');
		timerId = setTimeout(tick, 2000); // (*)
	}, 2000);
}
timer();
//Метод setTimeout выше планирует следующий вызов 
// прямо после окончания текущего (*).
```

Псевдокод - сервис, который ходит на сервер каждые 5 секунд, но если сервер перегружен, увеличиваем интервал запросов…

```jsx
let delay = 5000;

let timerId = setTimeout(function request() {
  ...отправить запрос...

  if (ошибка запроса из-за перегрузки сервера) {
    // увеличить интервал для следующего запроса
    delay += 2000;
  }
  timerId = setTimeout(request, delay);

}, delay);
```

### Ключевое отличие рекурсивный setTimeout от setInterval

- рек. setTimeout позволяет более гибко настраивать последующие вызовы.
- **Не гарантирует фиксированную задержку между вызовами fn:**  
****время на выполнение переданной fn, не  учитывается в задержке setInterval (вычитается из него ), то есть если fn выполнялась дольше delay то следующий вызов будет сразу после её завершения.
- **Гарантирует фиксированную задержку в “минимум delay”.**
рек. setTimeout - дождётся выполнения fn и после выдержит паузу в “минимум delay” и запустит вызов снова.