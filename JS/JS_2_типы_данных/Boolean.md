# Boolean

```jsx
const x = new Boolean(false);
if (x) {
  // этот код будет выполнен
}

console.log(typeof new Boolean(false) );  // 'object'
```

### 8 ложных значений в JS

```jsx
Boolean(false);         // false

Boolean(undefined);     // false

Boolean(null);          // false

Boolean('');            // false

Boolean(NaN);           // false

Boolean(0);             // false

Boolean(-0);            // false

Boolean(0n);            // false
```