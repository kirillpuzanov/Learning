class A {
	constructor() {
		this.name = 'foo';
		this.getName();
	}

	getName() {
		console.log('foo' + this.name);
	}
}

class B extends A {

	constructor() {
		super();
		this.name = 'bar';
		this.getName();
	}

	getName() {
		super.getName();
		console.log('bar' + this.name);
	}
}

new B()