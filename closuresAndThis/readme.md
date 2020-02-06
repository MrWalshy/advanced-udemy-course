# Closures & the keyword 'this'
- A closure is an inner function that makes use of variables defined inside outer functions that have prior returned
- If an inner function does not make use of the outer functions variable, it is just a 'nested function'
- Only variables used inside the inner function are remembered, closures don't use every variable (just the ones needed)

## What is needed for a closure to work?
- MUST return the inner function for it to work
- CAN call either the inner function straight away by using an extra parenthesis'()' or store the result of the function in a variable
- The inner function DOES NOT require a name, it can be anonymous

## Closure Usecases
- Private Variables
JS does not have Private Variables built in, this can be done with closures though

## What is 'this'?
- A reserved JS keyword
- Determined by how a function is called (execution context)
- Can be determined with four rules(global, object/implicit, explicit, new)
- Strict Mode was added to ES6 to prevent global object assignment

# RECAP
- 'this' is a reserved JS Keyword, value is determined at execution
- 'this' is set using either the 'global context', 'object binding', 'explicit binding', or the 'new' keyword
- When 'this' is set in the 'global context' in a function, 'this' is either the 'global object'('window' in browser) or 'undefined' in strict mode.
- Explicitly set 'this' with 'call', 'apply', or 'bind'
- The keyword 'new' can set the context of 'this', 'new' is used a lot in Object Oriented Programming