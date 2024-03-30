# "instanceof" Проверка класса

Оператор `instanceof` позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.

```jsx
class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); // true
console.log(rabbit instanceof Animal); // true

console.log(rabbit.__proto__ === Rabbit.prototype); // true

console.log(rabbit.__proto__ === Animal.prototype); // false
console.log(rabbit.__proto__.__proto__ === Animal.prototype); // true
console.log(rabbit.__proto__.__proto__.__proto__ === Object.prototype); // true

// также с функциями конструкторами вместо класса
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true
```

***Оператор `instanceof` просматривает для проверки цепочку прототипов.***

Но это поведение может быть изменено при помощи статического метода `Symbol.hasInstance`.

### Simbol.hasInstance - изменение поведения  ***`instanceof`***

Алгоритм работы `obj instanceof Class` работает примерно так:

- Если имеется статический метод `Symbol.hasInstance`, тогда вызвать его: `Class[Symbol.hasInstance](obj)`.

```jsx
// проверка instanceof будет полагать,
// что всё у чего есть свойтво canEat - животное Animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
alert(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)
```

- Большая часть классов не имеет метода `Symbol.hasInstance`. В этом случае используется стандартная логика: проверяется, равен ли `Class.prototype` одному из прототипов в прототипной цепочке `obj`.

### Продвинутый аналог Object.prototype.toString()

Согласно спецификации встроенный метод `toString` может быть позаимствован у объекта и вызван в контексте любого другого значения. И результат зависит от типа этого значения.

```jsx
const sim = Symbol() // [object Symbol]
const num = 1        // [object Number]
const str = 'ssss'   // [object String] 
const obj = {}.      // [object Object]
const arr = [].      // [object Array]
const fn = () => {}  // [object Function]
const undef = undefined // [object Undefined]
const nul = null     // [object Null]
const boolean = false // [object Boolean]
const err = new SyntaxError('eeerror') // [object Error]

log(Object.prototype.toString.call(sim))
log(Object.prototype.toString.call(num))
    ...
```

|  | работает для | возвращает |
| --- | --- | --- |
| typeof | примитивов | строка |
| {}.toString | примитивов, встроенных объектов, объектов с Symbol.toStringTag | строка |
| instanceof | объектов | true/false |
