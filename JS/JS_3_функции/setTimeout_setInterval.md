# setTimeout / setInterval

- `setTimeout` позволяет вызвать функцию **один раз** через определённый интервал времени.
- `setInterval` позволяет вызывать функцию **регулярно**, повторяя вызов через определённый интервал времени.

## setTimeout

```
function sayHi() {
  console.log('Привет');;
}

let timerId = setTimeout(sayHi, 1000);

// 
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Привет", "Джон");

//Если первый аргумент является строкой, то JavaScript создаст из неё функцию.
setTimeout("alert('Привет')", 1000); // не рекомендуется
 
// классика
setTimeout(() => alert('Привет'), 1000);
```

### timerId

Вызов `setTimeout` возвращает «идентификатор таймера» `timerId`, который можно использовать для отмены дальнейшего выполнения.

```jsx
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
console.log(timerId); // идентификатор таймера

clearTimeout(timerId);
console.log(timerId); // тот же таймер (clearTimeout
											// не зануляет значение идентификатора)
```

***Обычно timerId в  браузере является число. В других средах это может быть что-то ещё. Например, Node.js возвращает объект таймера с дополнительными методами.***

## setInterval

```jsx
let timerId = setInterval(func, delay, arg1, arg2, ...);

// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

## Рекурсивный (вложенный) setTimeout

Вложенный `setTimeout` – более гибкий метод, чем `setInterval`. С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.

**Вложенный `setTimeout` позволяет задать задержку между выполнениями более точно, чем `setInterval`.**

```jsx
let delay = 5000;

let timerId = setTimeout(function request() {
  const random = Math.random()
	console.log('--  delay -->',delay );
  if (random < 0.5 && delay > 500 ) {
    delay += 500;
  } else {
		delay -= 500;
	}
  timerId = setTimeout(request, delay);  // рекурсивный вызов

}, delay);
```

***Ключевое отличие в том что “вложенный setTimeout” вызывается после выполнения кода основной функции (может быть тяжелая операция время выполнение которой выходит за переданный delay) и последующий вызов гарантирует задержку не менее переданного*** delay***…. Также есть возможность сформировать условие для последующих вызовов.***

**Реальная задержка между вызовами `func` с помощью `setInterval` меньше, чем указано в коде!**

Это нормально, потому что время, затраченное на выполнение `func`, использует часть заданного интервала времени.

Вполне возможно, что выполнение `func` будет дольше, чем мы ожидали, и займёт более 100 мс.

В данном случае движок ждёт окончания выполнения `func` и затем, *немедленно* запускает его снова.

## setTimeout с нулевой задержкой

`setTimeout(func, 0)` или просто `setTimeout(func)`

- Планирование с нулевой задержкой `setTimeout(func,0)` или, что то же самое, `setTimeout(func)` используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.
- Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами `setTimeout`, а также для `setInterval`, начиная с 5-го вызова.

```jsx
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

  if (start + 100 < Date.now()) alert(times); // показываем задержку через 100 мс
  else setTimeout(run); // если нужно ещё запланировать
});

// пример вывода:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
```

Этого ограничения нет в серверном JavaScript. Там есть и другие способы планирования асинхронных задач. Например, [setImmediate](https://nodejs.org/api/timers.html) для Node.js. Так что это ограничение относится только к браузерам.

**Все методы планирования *не гарантируют* точную задержку.**

**Например, таймер в браузере может замедляться по многим причинам:**

- **Перегружен процессор.**
- **Вкладка браузера в фоновом режиме.**
- **Работа ноутбука от аккумулятора.**

**Всё это может увеличивать минимальный интервал срабатывания таймера (и минимальную задержку) до 300 или даже 1000 мс в зависимости от браузера и настроек производительности ОС.**