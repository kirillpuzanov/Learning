# Декораторы и переадресация вызова, call / apply

***Декоратор - функция обертка, которая принимает другую функцию и изменяет ее работу, добавляет функциональности, дополнительную логику ….
При этом основная работа по-прежнему выполняется функцией.***

```jsx
func.call(context, ...args); // передаёт массив как список с оператором расширения
func.apply(context, args);   // тот же эффект
```

Пример декоратора выполняющий кеширование результатов функции

```jsx
function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}

slow = cachingDecorator(slow);
```

Упомянутый выше кеширующий декоратор не подходит для работы с методами объектов.

```jsx
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // здесь может быть страшно тяжёлая задача для процессора
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// тот же код, что и выше
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // (** без использования call и передачи this
														// будет ошибка - this.someMethod() is not a function)
    cache.set(x, result);
    return result;
  };
}

console.log( worker.slow(1) ); // оригинальный метод работает
worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
console.log(worker.slow(2)); // 2 Ok

// Пример с потерей контекста...
let func = worker.slow;
func(2);  // error this.someMethod is not a function

func.call(worker, 2); // Ok
```

## Работа с несколькими аргументами  fn.apply

```jsx
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function() {
    let key = [].join.call(arguments); // (*) заимствование метода
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow);
console.log( worker.slow(3, 5) ); // работает
```