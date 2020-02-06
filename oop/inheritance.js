// constructors
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

// Makes a new copy of 'Person' prototype, attatches to 'Student'
Student.prototype = Object.create(Person.prototype);
// 'Student' now has a prototype constructor called 'Person'
console.log(Student.prototype.constructor); // Person
// Reset by setting the constructor to 'Student'
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor); // Student

Student.prototype.status = function(){
    return "I am currently a student!";
}

// testing
let fred = new Person("Fred", "Flintstone");
// 'status()' is NOT available on the 'Person' prototype
console.log(fred.status); // undefined

let alice = new Student("Alice", "Bugrio");
// 'status()' IS available on the 'Student' prototype
console.log(alice.status()); // I am currently a student!


// UDEMY Exercises
// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"
Vehicle.prototype.start = function(){
    return "VROOM!";
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
Vehicle.prototype.toString = function(){
    return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
}

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype
function Car(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}
// Inherit the methods from 'Vehicle' proto
Car.prototype = Object.create(Vehicle.prototype);
// Reset the proto constructor name
Car.prototype.constructor = Car;

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
function Motorcycle(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;