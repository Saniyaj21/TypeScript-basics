function add(num: number) {
	return num + 2;
}
add(5);

export {};

const div = (num: number, num2: number = 45) => {
	return num + num2;
};

console.log(div(2));

// return type of a fuction

const greetMe = (name: string, email: string, age: number): number => {
	console.log(`Hellow ${name} and email is ${email}`);
	return age;
};
function jointString(str1: string, str2: string): string {
	return str1 + str2;
}

greetMe("saniyaj", "saniyajmallik12@gmail.com", 22);
console.log(jointString("Saniyaj", "mallik"));

// map functions
const nums = [1, 2, 3];

nums.map((i): string => {
	return `${i}`;
});
nums.map((i): number => {
	return i;
});

// return type of void
// void tells that function will not return anything

const display = (msg: string): void => {
	console.log(msg);
	// return msg;  // it will give us error
};


// use for never returning function only used for handling any error
const handleError = (msg: string): never => {
	throw new Error(msg)
};


// last time = 1.15