# SOLID

**Принципы построения приложения в объектно ориентированном программировании** 

***Single responsibility***  "принцип единственной ответственности" 
«Модуль должен выполнять одну конкретную задачу» 

***Open–closed***  Принцип открытости/закрытости  
«программные сущности … должны быть открыты для расширения, но закрыты для модификации».  

***Liskov substitution***  Принцип подстановки Барбары Лисков  
”если мы сделали частный класс от общего, далее по коду мы можем использовать вместо общего частный и ничего не должно сломаться“

***Interface segregation***  Принцип разделения интерфейса  
«много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения»  

***Dependency inversion*** Принцип инверсии зависимостей 
Более общие классы не должны зависеть от каких то частных классов, только наоборот «Зависимость на Абстракциях. Нет зависимости на что-то конкретное»

***Open–closed***  Принцип открытости/закрытости  

```jsx
// Неправильная Реализация  !!!
// Нарушающая принцип ***Open–closed
// если есть проверки типа*** instanceof - Значит что-то не так!!!
class  Treasure {
}

class Coin extends Treasure {
}

class Crystal extends Treasure {
}

class Brilliant extends Treasure {
}

class Inventory {
    #score;
    pick(treasure) {
        if(treasure instanceof Coin) {
            this.#score += 1;
        }
        if(treasure instanceof Crystal) {
            this.#score += 10;
        }
        if(treasure instanceof Brilliant) {
            this.#score += 20;
        }
    }
}

// Более правильная  Реализация
// при добавлении новых видов "монет", нам 
// не нужно менять логику в Inventory...
class  Treasure {
	value = 0;
}

class Coin extends Treasure {
	value = 1;
}

class Crystal extends Treasure {
	value = 10;
}

class Brilliant extends Treasure {
	value = 20;
}

class Inventory {
	#score;
	pick(treasure) {
		this.#score += treasure.value;
	}
}

```

***Liskov substitution***  Принцип подстановки Барбары Лисков  

```jsx
class User {
    role = 'user';
    getRole() {
        return this.role; // базовый класс из метода возвращает строку !!
    }
}

class Admin extends User {
    role = ['user', 'admin'] 
    // потомок из унаследованного метода будет возвращать массив !!!
    // нарушение принципа ***Liskov substitution
    
    // решение переопределение метода 
    getRole() {
        return this.***role.join(', ') // вернет все роли одной строкой
    }

}

function logRole(user) {
	console.log(`Role - ${user.getRole().toUpperCase()}`);
}

logRole(new User()) // Role - USER
logRole(new Admin()) 
// 1 вариант -  TypeError: user.getRole(...).toUpperCase is not a function
// 2 вариант - Role - USER, ADMIN
```

***Dependency inversion*** Принцип инверсии зависимостей 

```jsx
// Неправильная Реализация  !!!
// Нарушающая принцип ***Dependency inversion***
class DB {
	save(items) {
		console.log(`Save in DB - ${items}`);
	}
}
class MongoDB extends DB {
	save(items) {
		console.log(`Save in MongoDB - ${items}`);
	}
}

class TodoList {
    items = [1, 2, 3]
    db = new DB() // проблема зависимости от конкретного класса - не расширяемо..
    saveToDB() {
        this.db.save(this.items)
    }
}

// решение 
// динамически при создании указываем с какой базой будем работать ...
class TodoList {
    items = [1, 2, 3]
    db;
    constructor(db) {
        this.db = db;
    }
    saveToDB() {
        this.db.save(this.items)
    }
}

const list1 = new TodoList(new DB())
list1.saveToDB() // Save in DB - 1,2,3
const list2 = new TodoList(new MongoDB())
list2.saveToDB() // Save in MongoDB - 1,2,3
```
