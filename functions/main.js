"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(5);
var div = function (num, num2) {
    if (num2 === void 0) { num2 = 45; }
    return num + num2;
};
console.log(div(2));
// return type of a fuction
var greetMe = function (name, email, age) {
    console.log("Hellow ".concat(name, " and email is ").concat(email));
    return age;
};
function jointString(str1, str2) {
    return str1 + str2;
}
greetMe("saniyaj", "saniyajmallik12@gmail.com", 22);
console.log(jointString("Saniyaj", "mallik"));
// map functions
var nums = [1, 2, 3];
nums.map(function (i) {
    return "".concat(i);
});
nums.map(function (i) {
    return i;
});
