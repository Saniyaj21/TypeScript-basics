"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students = {
    name: "Sani",
    roll: 12,
};
// writing  object keyword for return type
var createStudents = function (obj) {
    return obj;
};
console.log(createStudents(students));
// writing  {} empty object  for reeturn type of object
var createStudents2 = function (obj) {
    return obj;
};
// specifying specific fileds that have to return
var createStudents3 = function (name1, age1) {
    return { name: name1, age: age1 };
};
console.log(createStudents3("saniyaj", 22));
// in ts you have to amke sure any property exists inside a object before destructer any property
// for that ?:type is used
// update takes a object in which id property should exists and returns a object which has a userId property
var update = function (obj) {
    var id = obj.id;
    return { userId: id };
};
var user = {
    id: "1233443",
    name: "Shubbha",
};
var user2 = {
    name: "Shubbha",
};
update(user);
// a function that takes argument of User type and return User type
var getUser = function (user) {
    var name = user.name;
    console.log(name);
    return user;
};
// a object
var newUser = {
    name: "Rohit",
    email: "rohit@gmail.com",
    mobileNo: 1234566789,
};
// calling that function with this object that is User type
var result = getUser(newUser);
console.log(result);
var updateUser = function (user, newName) {
    // so here we can cont change the _id because it is define to readonly
    // user._id = 121;
    user.name = newName;
    return user;
};
var u = {
    name: "shubha",
    _id: 900,
};
console.log(updateUser(u, "Papu"));
