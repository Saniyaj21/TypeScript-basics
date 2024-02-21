// Abstract classes in TypeScript

abstract class Laptop {
	name = "MyLaptop";

	// also declaring abstract method inside the class which does not have implementation
	abstract get getName(): string;

	// difference bettween interface and abstract class is in abstract class we can have a full method implementation
	switchOn() {
		console.log("Power On");
	}
}

// cant't create a new instance of this abstract class
// const lap = new Laptop();

class Hp extends Laptop {
	price = 90;

	get getName(): string {
		return this.name;
	}
}

const hp = new Hp();
console.log(hp.name);
console.log(hp.switchOn());
