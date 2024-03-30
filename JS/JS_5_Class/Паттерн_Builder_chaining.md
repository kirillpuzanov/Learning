# Паттерн Builder и chaining

В методах  return this, что позволяет делать цепочку вызовов нескольких методов друг за другом…
Паттерн Builder необходим для быстрого построения объектов, построения объектов из частей, используется для тестов ….

```jsx
class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house;
  }
}

const house = new Builder()
  .addFloor()
  .addRoof()
  .execute();
  
console.log(house); // { floor: 'Floor', roof: 'Roof' }
```