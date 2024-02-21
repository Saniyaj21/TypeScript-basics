// class in typeScript
class User {
	name: string;

	// private access specifer and readonly type
	// default access specifer is public
	private readonly email: string;
	constructor(name: string, email: string) {
		this.name = name;
		this.email = email;
	}
}

// objects
const sani = new User("saniyaj", "saniyaj@gmail.com");

console.log(sani.name);

sani.name = "saniyaj mallik";
console.log(sani.name);

// shortcuts of class
class People {
	readonly name: string;
	private roomId = 100;
	// we can avoid writing this using the public keyword in constructor
	constructor(public age: number, public email: string) {}

	// getter and setters
	get getRoomId(): number {
		return this.roomId;
	}
	set setRoomId(roomId: number) {
		this.roomId = roomId;
	}
	// private methods can be accessed inside class only
	private method(): string {
		return "private hellow";
	}
}

const people = new People(22, "saniyaj@gmail.com");

// calling of getter and setter
console.log(people.getRoomId);
people.setRoomId = 20;
console.log(people.getRoomId);

// inheritance and acces specifiers
class Parent {
	private email: string;
	protected country: string;
	constructor(public name: string) {}
	get getName(): string {
		return this.name;
	}
}

const p2 = new Parent("Rohit");
console.log(p2.name);

// by extending Parent class
class Child extends Parent {
	constructor(name: string) {
		super(name);
	}
	public method(): string {
		return "public hellow";
	}
	// we can not acces private properties of parent
	// get getEmail(): string {return this.email};

	// protected members of parent can be access only within that class and its child classes
	get getCountry(): string {return this.country};
}

const c2 = new Child("Habibullah");
console.log(c2.name);
console.log(c2.getName);

export {};
