# Коллекция Map

[***Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) – это коллекция ключ/значение, как и `Object`. Но основное отличие в том, что `Map` позволяет использовать ключи любого типа.***

Методы и свойства:

- `[new Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)` – создаёт коллекцию.
- `[map.set(key, value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)` – записывает по ключу `key` значение `value`.
- `[map.get(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)` – возвращает значение по ключу или `undefined`, если ключ `key` отсутствует.
- `[map.has(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)` – возвращает `true`, если ключ `key` присутствует в коллекции, иначе `false`.
- `[map.delete(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)` – удаляет элемент (пару «ключ/значение») по ключу `key`.
- `[map.clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)` – очищает коллекцию от всех элементов.
- `[map.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)` – возвращает текущее количество элементов.

```jsx
let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"

alert(map.size); // 3
```

### **`Map` сравнение ключей**

Чтобы сравнивать ключи, объект `Map` использует алгоритм [SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero). Это почти такое же сравнение, что и `===`, с той лишь разницей, что `NaN` считается равным `NaN`. Так что `NaN` также может использоваться в качестве ключа.

Этот алгоритм не может быть заменён или модифицирован.

### **Цепочка вызовов**

Каждый вызов `map.set` возвращает объект map, так что мы можем объединить вызовы в цепочку:

```
map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");
```

### Перебор Map

Для перебора коллекции `Map` есть 3 метода:

- `[map.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)` – возвращает итерируемый объект по ключам,
- `[map.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)` – возвращает итерируемый объект по значениям,
- `[map.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)` – возвращает итерируемый объект по парам вида `[ключ, значение]`, этот вариант используется по умолчанию в `for..of`.
- встроенный метод `forEach`

```jsx
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
  }

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // огурец: 500 и так далее
});
```

### Создание Map из объекта - Object.entries(obj)

Object.entries(obj) -  получает объект и возвращает массив пар ключ-значение для него, как раз в этом формате.

```jsx
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  console.log( map.get('name') ); // John
```

### Создание объекта из Map   - Object.fromEntries(*map`.entries()`*)

`Object.fromEntries`, получив массив пар вида `[ключ, значение]`, он создаёт из них объект:

```jsx
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```