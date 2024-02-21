// why we need generics ?
// so  what if we want to create a function which return the type of the input type

function func1(a: number): number {
	return a;
}

const func2 = (msg: string): string => {
	return msg;
};
//  so here we need two sepate methods to handle different input and output types

// we can use any type but that is not a good choice in typeScript
// beacuse we can any type and can return any type like string input and number return

// generics solve this problem
// generic
function func3<Type>(val: Type): Type {
	return val;
}
// now here if we pass string it will lock Type as string
// if we pass number it will lock Type as number

// generally used shortcut form of it
// T can be user define we can also use anything
// arrow function
const func4 = <T>(val: T): T => val;

// normal function
function func5<T>(val: T): T {
	return val;
}

// talking input as a array
// in this case we have retrun one of the value of that array
const func6 = <T>(products: T[]): T => {
	return products[1];
};
let products: Array<{}>;
products = [{ name: "macbook" }, { name: "samsung" }];

console.log(func6(products));
