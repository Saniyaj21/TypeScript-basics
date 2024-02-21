// enums restrict the choice of user

enum Role {
	STUDENT = "student",
	TEACHER = "teacher",
	ADMIN = "admin",
	ID = 12,
}

let studentRole = Role.ADMIN;

// default value is index value of enums
console.log(studentRole);

// in the above TS code it generates a huge jaaScript code
// to avoid it just put aonstant before enum
const enum UserClass {
	CL_1 = "first",
	CL_2 = "second",
}

let sani = UserClass.CL_1;
console.log(sani);

export {};
