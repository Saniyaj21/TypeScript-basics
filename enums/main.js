"use strict";
// enums restrict the choice of user
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["STUDENT"] = "student";
    Role["TEACHER"] = "teacher";
    Role["ADMIN"] = "admin";
    Role[Role["ID"] = 12] = "ID";
})(Role || (Role = {}));
var studentRole = Role.ADMIN;
// default value is index value of enums
console.log(studentRole);
var sani = "first" /* UserClass.CL_1 */;
console.log(sani);
