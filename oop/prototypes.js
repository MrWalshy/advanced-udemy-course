// Constructor Function
function Person(name){
    this.name = name;
}
console.log(Person.prototype);

// Objects created from the Person constructor
let bob = new Person("Bob");
let fred = new Person("Fred");
// '__proto__' points at the 'prototype' object on the 'Person' constructor
console.log(bob.__proto__ === Person.prototype); // true

// 'Person.prototype' object has a property called 'constructor',
// pointing back at the function
console.log(Person.prototype.constructor === Person); // true

// Adding Methods to the Prototype
// Assigning a method to a prototype means it is declared once
// and available to all linked objects. This stops the function being
// declared for every new instance of the constructor.
Person.prototype.sayHi = function(){
    // 'this' refers to the object invoking the 'sayHi' method
    return "Hi " + this.name;
}
console.log(bob.sayHi()); // Hi Bob

// CHALLENGE Udemy
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning === true){return "beep"}
}

let car = new Vehicle("Flintstone", "Mobile", "500BC");
console.log(car);
car.turnOn(); // isRunning = true
console.log(car.isRunning); // true
console.log(car.honk()); // beep


// UDEMY Exercises
// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.

Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/
Person.prototype.addToFamily = function(person){
    // If person is not in family, and person is an instance of Person
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        // Push the 'person' object into the 'family' array
        this.family.push(person);
    }
    return this.family.length;
}

// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 
Array.prototype.map = function(callback){
    let newArr = [];
    // iterate over array
    for(let i = 0; i < this.length; i++){
        // push the result of the callback into newArr
        newArr.push(callback(this[i], i, this));
    }
    // return newArr
    return newArr;
}

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
String.prototype.reverse = function(){
    let newStr = "";
    // iterate backwards
    for(let i = this.length - 1; i >= 0; i--){
        // add value of i into newStr
        newStr += this[i];
    }
    // return the newStr
    return newStr;
}