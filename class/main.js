"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// class in typeScript
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
// objects
var sani = new User("saniyaj", "saniyaj@gmail.com");
console.log(sani.name);
sani.name = "saniyaj mallik";
console.log(sani.name);
// shortcuts of class
var People = /** @class */ (function () {
    // we can avoid writing this using the public keyword in constructor
    function People(age, email) {
        this.age = age;
        this.email = email;
        this.roomId = 100;
    }
    Object.defineProperty(People.prototype, "getRoomId", {
        // getter and setters
        get: function () {
            return this.roomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "setRoomId", {
        set: function (roomId) {
            this.roomId = roomId;
        },
        enumerable: false,
        configurable: true
    });
    // private methods can be accessed inside class only
    People.prototype.method = function () {
        return "private hellow";
    };
    return People;
}());
var people = new People(22, "saniyaj@gmail.com");
// calling of getter and setter
console.log(people.getRoomId);
people.setRoomId = 20;
console.log(people.getRoomId);
// inheritance
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    Object.defineProperty(Parent.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Parent;
}());
var p2 = new Parent("Rohit");
console.log(p2.name);
// by extending Parent class
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.method = function () {
        return "public hellow";
    };
    return Child;
}(Parent));
var c2 = new Child("Habibullah");
console.log(c2.name);
console.log(c2.getName);
