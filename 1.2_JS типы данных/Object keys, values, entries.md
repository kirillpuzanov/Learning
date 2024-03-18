# Object   keys, values, entries

- [Object.keys(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) – возвращает массив ключей.
- [Object.values(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values) – возвращает массив значений.
- [Object.entries(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) – возвращает массив пар `[ключ, значение]`.
- [Object.getOwnPropertySymbols](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) - возвращающий массив только символьных ключей
- [Reflect.ownKeys(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) - возвращает все ключи

- Object.fromEntries(array) - преобразует массив вида `[ключ, значение]`  обратно в объект

Обратите внимание на различия (по сравнению с `map`, например):

|  | Map | Object |
| --- | --- | --- |
| Синтаксис вызова | map.keys() | Object.keys(obj), не obj.keys() |
| Возвращает | перебираемый ( итерируемый ) объект | «реальный» массив |

**Object.keys/values/entries игнорируют символьные свойства**

***Так же, как и цикл `for..in`, эти методы игнорируют свойства, использующие  `Symbol(...)` в качестве ключей.***

***Обычно это удобно. Но если требуется учитывать и символьные ключи, то для этого существует отдельный метод [Object.getOwnPropertySymbols](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), возвращающий массив только символьных ключей. Также, существует метод [Reflect.ownKeys(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys), который возвращает все ключи.***