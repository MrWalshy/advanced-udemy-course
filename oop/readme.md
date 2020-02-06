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