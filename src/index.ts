// Even if we don't add the type number below, typescript will infer the type
// and shows error if we try to assign any other type to id

// Basic Types
let id: number = 5
let company: string = "sai"
let isPublished: boolean = true
let x: any = 'Hello'

// Array of numbers
let ids: number[] = [1,2,3,4]
let arr: any[] = [1, true, 'Hi']

// Tuple - we can specifiy the exact type
let person: [number, string, boolean] = [1, 'Hi', true]
// Tuple Array
let employee: [number, string][]
employee = [[1,'sai'],[2,'ram']]


// Unions - If we want a particular variable to hold more than one type
let employeeId: string | number

// Enum - Enums allows us to define a set of named constants either numeric or strings
// By default the below are assigned numeric values (Up=0,Down=1,Left=2,Right=3)
// console.log(Direction1.Up) --> prints 0
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

// If we want to set String values

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}


// Objects

const user: {id: number, name: string} = {
    id: 1,
    name: "sai"
}

// cleaner way to do it is define a User type

type User = {
    id: number,
    name: string
}

const user2: User = {id: 2, name: "ram"}


// Type Assertion - Explicitly telling the compiler that we want to treat an entity as a different type
// Two ways to it - 1. using Angle brackets (<>) 2. using "as"

let cid: any = 1;
let customerId = <number>cid
let customerId2 = cid as number


// Using Types in Functions

// Function with return value number
function addNum(x: number, y: number): number {
    return x + y
}

// Function with no return value: we can use "void" type
function log(message: string | number): void {
    console.log(message)
}

// Interfaces - Kind of like a custom type or a specific structure to an Object or a function
// We can't use interfaces with Primitive types and Unions

interface UserInterface  {
    readonly id: number, // readonly property
    name: string,
    age?: number  // Optional
}

const user3: UserInterface = {id: 2, name: "ram"}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y: number): number => {
    return x+y
}

const sub: MathFunc = (x:number, y: number): number => {
    return x-y
}


/* Classes
    * Access modifiers : Public, Private, Protected
    * Private: property only accesible within the class 
    * private id: number --> we can't access it like sai.id (this will throw error)
    * Protected: you can access property only within this class or a class that is extended from the class
    * */
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} registered`
    }
}

const sai = new Person(1,"sai")

/* Interface to a Class 
    * we can map out exactly how our classes, Objects, Functions should look like using "Interface" 
    * this makes our code robust
*/

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// We will use "implements" keyword to associate a interface to a class
class Person1 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} registered`
    }
}


/* Extend a Class 
    * Basically they are derived classes
    * on Derived classes we should call super() inside the constructor and pass in if any parameters
*/

// Employee class here is a "SubClass"
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position =position
    }
}

const emp = new Employee(3, "sai", "Engineer")


/* Generics 
    * Generally used to build Re-Usable Components
    * Placeholder of a type and define the type later
*/

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["sai", "ram", "mani"])