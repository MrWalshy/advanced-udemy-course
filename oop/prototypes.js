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