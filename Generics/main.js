// why we need generics ?
// so  what if we want to create a function which return the type of the input type
function func1(a) {
    return a;
}
var func2 = function (msg) {
    return msg;
};
//  so here we need two sepate methods to handle different input and output types
// we can use any type but that is not a good choice in typeScript
// beacuse we can any type and can return any type like string input and number return
// generics solve this problem
// generic
function func3(val) {
    return val;
}
// now here if we pass string it will lock Type as string
// if we pass number it will lock Type as number
// generally used shortcut form of it
// T can be user define we can also use anything
// arrow function
var func4 = function (val) { return val; };
// normal function
function func5(val) {
    return val;
}
// talking input as a array
// in this case we have retrun one of the value of that array
var func6 = function (products) {
    return products[1];
};
var products;
products = [{ name: "macbook" }, { name: "samsung" }];
console.log(func6(products));
