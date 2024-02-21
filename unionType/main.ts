// union type
let data: number | string;

// we can now assign both type of data to data variable
// try to avoid any type instead use union type

data = "Saniyaj";
data = 120;

const printSome = (a: string | number) => {
	// this will give a error as we have to confirm first a is string or number
	// a.toLowerCase()
	if (typeof a === "string") {
		a.toLowerCase();
	}
};

// union on array
let arr: Array<string | number> = [1, 2, "sani"];
let arr2: (number | string | boolean)[] = [1, 2, "sani", false, true];

// litral type of assignment
let pi: 3.14;
// this will not assign the value but no other value can be assigned to pi
pi = 3.14;
// now if  i try to assign 2 to pi
// pi = 2; // this will give us error

console.log(pi);

let role : "User" | "Admin" | "admin";
role = "Admin"; //fine
// role = "Teacher"; //error
