# Объект функции, NFE

***В JavaScript можно представлять функцию как значение. Также как объект.***

### Свойство “name”

```jsx
function sayHi() {
  alert("Hi");
}

console.log(sayHi.name); // sayHi

также будет работать..

let sayHi = function() {
  alert("Hi");
};

console.log(sayHi.name) // sayHi (есть имя!)
```

Также имена имеют и методы объекта:

```jsx
let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye
```

Когда невозможно определить имя…

```
// функция объявлена внутри массива
let arr = [function() {}];

alert( arr[0].name ); // <пустая строка>
// здесь отсутствует возможность определить имя, поэтому его нет
```

### Свойство length

Cвойство «length» содержит количество параметров функции в её объявлении. Например:

```jsx
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2 Остаточные параметры не учитываются !!!
```

### Пользовательские свойства

Мы также можем добавить свои собственные свойства.

```jsx
function sayHi() {
  alert("Hi");
  // посчитаем, сколько вызовов мы сделали
  sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi

console.log(`Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза
```

**Свойство функции не есть переменная !!!**

***Свойство функции, назначенное как `sayHi.counter = 0`, не объявляет локальную переменную `counter` внутри неё. Другими словами, свойство `counter` и переменная `let counter` – это две независимые вещи.***

***Мы можем использовать функцию как объект, хранить в ней свойства, но они никак не влияют на её выполнение. Переменные – это не свойства функции и наоборот. Это два параллельных мира.***

Иногда свойства функции могут использоваться вместо замыканий.

```jsx
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log( counter() ) // 10
counter();
counter();
console.log( counter() ); // 13
```

# Named Function Expression - NFE

***Именованное Функциональное Выражение***

```jsx
let sayHi = function func(who) {   // func - NFE
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // использует func, чтобы снова вызвать себя же
  }
};

sayHi("John"); // Hello, John
// А вот так - не cработает:
func(); // Ошибка, func не определена (недоступна вне функции)
```

- позволяет функции ссылаться на себя же.
- не доступно за пределами функции.