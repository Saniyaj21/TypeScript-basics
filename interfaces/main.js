// like bellow sani we can also implement Admin interface also
// Example usage
var sani = {
    email: "saniyaj@gmail.com",
    _id: "123",
    // after extending interface we also add that filed in it
    moreFiled: true,
    // A method that returns the user's unique identifier.
    display_id: function () {
        return this._id;
    },
    // A method that returns the user's email address.
    displayEmail: function () {
        return this.email;
    },
    // as log as we are passing same number of parameters with same type as defined in interface its ok
    // no need to match the parameters name of interface
    getCupon: function (name, mobNo) {
        return "Hello ".concat(name, ", your coupon is ").concat(mobNo);
    },
};
console.log(sani.getCupon("Saniyaj", 90));
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.moveSpeed = function () {
        return 10;
    };
    return Dog;
}());
var dog1 = new Dog();
console.log(dog1.moveSpeed());
