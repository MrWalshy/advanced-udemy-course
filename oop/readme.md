# Object Oriented Programming (OOP)
- Programming model based on the idea of objects
- Objects are constructed from 'classes', a blueprint of sorts. Objects created from 'classes' are called 'instances'.
- Classes should be abstract and modular to enable as much non-specific usage as possible
- Functions & Objects mimic the behaviour of classes in JS

## Constructor Functions
- This represents a 'class'
- It is convention to capitalise the constructor functions name
- The keyword 'this' has properties attatched to it

### The 'new' Keyword (Creating an object)
- First, 'new' creates an empty object
- 'this' is then set to be that empty object
- The line 'return this' is added to the end of the function which follows it
- A property, called '__proto__', is added onto the empty object. This links the prototype property on the constructor function to the new empty object

## Prototypes
- Every constructor function has a property called 'prototype', which is an object
- The prototype object has a property called 'constructor', which points back to the constructor function
- When an object is created with the 'new' keyword, the '__proto__' property gets created which links the object and the prototype property of the constructor function.

### The Prototype Chain
- JS finds methods & properties by first looking at the object
- If it cannot find what it is looking for, it then searches the objects '__proto__' by looking up the 'Prototype Chain'
- Returns 'undefined' if it cannot be found after following the chain

### Prototypal Inheritance
- The passing of methods & properties from one class to another
- Careful, assigning a prototype to another object creates a reference

#### Two Parts
- Set the prototype property to be a newly created object
- Reset the constructor property

#### Object.create
- This creates a new function.
- The function accepts, as its first param, what the prototype object should be for the newly created object.
- Do not use 'new' in inheritance. It adds additional unnecessary properties to the prototype object