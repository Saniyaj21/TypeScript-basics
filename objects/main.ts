const students = {
	name: "Sani",
	roll: 12,
};

// writing  object keyword for return type
const createStudents = (obj: object): object => {
	return obj;
};

console.log(createStudents(students));

// writing  {} empty object  for reeturn type of object
const createStudents2 = (obj: object): {} => {
	return obj;
};
// specifying specific fileds that have to return
const createStudents3 = (
	name1: string,
	age1: number
): { name: string; age: number } => {
	return { name: name1, age: age1 };
};

console.log(createStudents3("saniyaj", 22));

// in ts you have to amke sure any property exists inside a object before destructer any property
// for that ?:type is used
// update takes a object in which id property should exists and returns a object which has a userId property
const update = (obj: { id?: string }): { userId?: string } => {
	let { id } = obj;
	return { userId: id };
};

const user = {
	id: "1233443",
	name: "Shubbha",
};
const user2 = {
	name: "Shubbha",
};

update(user);

// update(user2);  // it will give error as any id field is not in there

// type aliases
// a way of creating custom types

// declaring the custom User type which will be a object and contains name, email, mobileNo
type User = {
	name: string;
	email: string;
	mobileNo: number;
};

// a function that takes argument of User type and return User type
const getUser = (user: User): User => {
	let name = user.name;
	console.log(name);
	return user;
};

// a object
const newUser = {
	name: "Rohit",
	email: "rohit@gmail.com",
	mobileNo: 1234566789,
};

// calling that function with this object that is User type
let result = getUser(newUser);
console.log(result);

// readonly properties
type NewUser = {
	readonly _id: number;
	name: string;
	token?: string; // ? makes a optional filed
};

const updateUser = (user: NewUser, newName: string): NewUser => {
	// so here we can cont change the _id because it is define to readonly
	// user._id = 121;
	user.name = newName;
	return user;
};

let u = {
	name: "shubha",
	_id: 900,
};

console.log(updateUser(u, "Papu"));



export {};
