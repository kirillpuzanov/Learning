# Коллекция SET

Объект `[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)` – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

### Основные методы:

- `[new Set(iterable)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)` – создаёт `Set`, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый `Set`.
- `[set.add(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)` – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект `set`.
- `[set.delete(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)` – удаляет значение, возвращает `true`, если `value` было в множестве на момент вызова, иначе `false`.
- `[set.has(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)` – возвращает `true`, если значение присутствует в множестве, иначе `false`.
- `[set.clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)` – удаляет все имеющиеся значения.
- `[set.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size)` – возвращает количество элементов в множестве.

### + Встроенные методы:

- `[set.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys)` – возвращает перебираемый объект для значений,
- `[set.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)` – то же самое, что и `set.keys()`, присутствует для обратной совместимости с `Map`,
- `[set.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)` – возвращает перебираемый объект для пар вида `[значение, значение]`, присутствует для обратной совместимости с `Map`.
- встроенный метод `forEach`

### Перебор объекта Set (for..of / forEach )

```jsx
let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => { // value, valueAgain - дублируется ( особенность )
    console.log(value);
});
```