// Interface
/**
 * Represents a user with basic information.
 */
interface User {
	_id: string;

	email: string;

	// like abstract methods in java
	displayEmail: () => string;

	display_id(): string;

	// with parameters
	getCupon: (name: string, no: number) => string;
}

// extending the interface
// called a reopening of the interface
interface User {
	moreFiled: boolean;
}

// extend interface
interface Admin extends User {
	role: "student" | "admin" | "user";
}
// like bellow sani we can also implement Admin interface also

// Example usage
let sani: User = {
	email: "saniyaj@gmail.com",
	_id: "123",

	// after extending interface we also add that filed in it
	moreFiled: true,

	// A method that returns the user's unique identifier.

	display_id() {
		return this._id;
	},

	// A method that returns the user's email address.
	displayEmail() {
		return this.email;
	},

	// as log as we are passing same number of parameters with same type as defined in interface its ok
	// no need to match the parameters name of interface
	getCupon(name: string, mobNo: number) {
		return `Hello ${name}, your coupon is ${mobNo}`;
	},
};

console.log(sani.getCupon("Saniyaj", 90));

// class implementing interfaces
interface Animal{
	canFly: boolean;
	canSwim: boolean;
	moveSpeed(): number;
}

class Dog implements Animal{
	canFly: false;
	canSwim: true;
	moveSpeed(): number {
        return 10;
    }
}

const dog1 = new Dog()
console.log(dog1.moveSpeed());




