// Abstract classes in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laptop = /** @class */ (function () {
    function Laptop() {
        this.name = "MyLaptop";
    }
    // difference bettween interface and abstract class is in abstract class we can have a full method implementation
    Laptop.prototype.switchOn = function () {
        console.log("Power On");
    };
    return Laptop;
}());
// cant't create a new instance of this abstract class
// const lap = new Laptop();
var Hp = /** @class */ (function (_super) {
    __extends(Hp, _super);
    function Hp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 90;
        return _this;
    }
    Object.defineProperty(Hp.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Hp;
}(Laptop));
var hp = new Hp();
console.log(hp.name);
console.log(hp.switchOn());
