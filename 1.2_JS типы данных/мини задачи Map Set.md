# мини задачи Map / Set

Создайте функцию `unique(arr)`, которая вернёт массив уникальных, не повторяющихся значений массива `arr`.

```jsx
function unique(arr) {
  return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) ); // Hare,Krishna,:-O
```

**Отфильтруйте анаграммы**

Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Напишите функцию `aclean(arr)`, которая возвращает массив слов, очищенный от анаграмм.

```jsx
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function clean (arr) {
    const map = new Map()

    for(let word of arr) {
        const formattedWord = word.toLowerCase().split('').sort().join('');
        map.set(formattedWord, word)
    }

    return Array.from(map.val);
}
  console.log( clean(array) ); // Hare,Krishna,:-O

можно без Map: с обычным объектом
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
```