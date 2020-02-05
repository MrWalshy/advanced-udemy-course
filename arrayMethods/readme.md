# Array Methods
## forEach
- Iterates through an array
- Callback function runs on each value in the array
- Always returns 'undefined'

### Anatomy
array.forEach((value, index, array) => {})

- All the params are not needed, they MUST be in the specified order though

## map
- Creates a new array
- Iterates through an array
- Runs a callback function on each value in the array
- The result of the callback is added to the new array
- Returns the new array

- map returns a new array of the same length as the original

### Anatomy
arr.map((value, index, array) => {
    return value * 2;
});

## filter
- Invoked on arrays & accepts a callback function
- The result of the callback is always evaluated into a boolean

- Creates a new array
- Iterates through the array
- Callback runs on each value
- If the callback returns true, value will be added to the array
- If the callback returns false, value will be added to the new array

### Anatomy
let arr = [1,2,3];
arr.filter((value, index, array) => {
    // No need for if statements,
    // just statements that evaluate truthy or falsey
    return value > 2;
});
// [3]

## some
- Iterates through the array
- Runs a callback on each value
- If the callback returns true for at least one value, return true
- Else, return false
- The result will ALWAYS be a boolean

### Anatomy
arr.some((value, index, array){
    return value < 2;
});

## every
- Iterates through the array
- Runs a callback on each value
- If callback returns false for any one value, return false
- Else, return true

### Anatomy
arr.every((value, index, array) => {
    return value < 0;
});

## reduce
- Accepts a callback and an optional second param
- Iterates through an array
- Runs the callback on each value
- First param to the callback is either first value in the array OR the optional second parameter
- The first param to the callback is often called the "accumulator"
- The returned value from the callback becomes the new value of the accumulator

### Anatomy
array.reduce((accumulator, nextValue, index, array) => {
    // Anything returned inside here becomes the value of the 
    // accumulator in the next iteration 
}, optionalSecondParam);