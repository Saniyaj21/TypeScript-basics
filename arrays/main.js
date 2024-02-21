// arrays
// wrong way
// const arr  =  []
// const arr: []  =  []
// do it like this
var arr = [];
// or
var arr2 = [];
arr.push(10);
arr.push(1020);
console.log(arr.indexOf(20));
var allUsers = [];
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
var matrix = [];
matrix.push([120, 20]);
matrix.push([1, 2, 3]);
console.log(matrix);
var response = [];
response.push({ id: 12, user: "Sani" });
response.push({ id: 13, user: "Papu" });
console.log(response);
