"use strict";
// Even if we don't add the type number below, typescript will infer the type
// and shows error if we try to assign any other type to id
// Basic Types
let id = 5;
let company = "sai";
let isPublished = true;
let x = 'Hello';
// Array of numbers
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hi'];
// Tuple - we can specifiy the exact type
let person = [1, 'Hi', true];
// Tuple Array
let employee;
employee = [[1, 'sai'], [2, 'ram']];
// Unions - If we want a particular variable to hold more than one type
let employeeId;
// Enum - Enums allows us to define a set of named constants either numeric or strings
// By default the below are assigned numeric values (Up=0,Down=1,Left=2,Right=3)
// console.log(Direction1.Up) --> prints 0
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// If we want to set String values
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: "sai"
};
const user2 = { id: 2, name: "ram" };
// Type Assertion - Explicitly telling the compiler that we want to treat an entity as a different type
// Two ways to it - 1. using Angle brackets (<>) 2. using "as"
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Using Types in Functions
// Function with return value number
function addNum(x, y) {
    return x + y;
}
// Function with no return value: we can use "void" type
function log(message) {
    console.log(message);
}
const user3 = { id: 2, name: "ram" };
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
/* Classes
    * Access modifiers : Public, Private, Protected
    * Private: property only accesible within the class
    * private id: number --> we can't access it like sai.id (this will throw error)
    * Protected: you can access property only within this class or a class that is extended from the class
    * */
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} registered`;
    }
}
const sai = new Person(1, "sai");
// We will use "implements" keyword to associate a interface to a class
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} registered`;
    }
}
/* Extend a Class
    * Basically they are derived classes
    * on Derived classes we should call super() inside the constructor and pass in if any parameters
*/
// Employee class here is a "SubClass"
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "sai", "Engineer");
/* Generics
    * Generally used to build Re-Usable Components
    * Placeholder of a type and define the type later
*/
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["sai", "ram", "mani"]);
