// arrays

// wrong way
// const arr  =  []
// const arr: []  =  []

// do it like this
const arr: number[] = [];
// or
const arr2: Array<number> = [];

arr.push(10);
arr.push(1020);

console.log(arr.indexOf(20));

// creating custom type array
// an array that stroes all users
type User = {
	name: string;
	email: string;
};

const allUsers: User[] = [];

allUsers.push({
	name: "saniyaj",
	email: "Saniyaj@gmail.com",
});
allUsers.push({
	name: "Shubha",
	email: "Shubha@gmail.com",
});

console.log(allUsers);

// array of array
const matrix: number[][] = [];

matrix.push([120, 20]);
matrix.push([1, 2, 3]);
console.log(matrix);

// array of objects
type MyObj = {
	id: number;
	user: string;
};

const response: Array<MyObj> = [];

response.push({ id: 12, user: "Sani" });
response.push({ id: 13, user: "Papu" });
console.log(response);


export {}