// union type
var data;
// we can now assign both type of data to data variable
// try to avoid any type instead use union type
data = "Saniyaj";
data = 120;
var printSome = function (a) {
    // this will give a error as we have to confirm first a is string or number
    // a.toLowerCase()
    if (typeof a === "string") {
        a.toLowerCase();
    }
};
// union on array
var arr = [1, 2, "sani"];
var arr2 = [1, 2, "sani", false, true];
// litral type of assignment
var pi;
// this will not assign the value but no other value can be assigned to pi
pi = 3.14;
console.log(pi);
