# Testing with Jasmine
- Larger applications require automated testing to help find bugs
- Testing code thoroughly is important
- Jasmine is a BDD style testing framework to write Unit Tests

## What is needed to test code?
- A framework to write tests
- A way of describing the code we are testing
- A tool where we can make assertions or expectations about our code
- A 'spec'(specification) file, which holds all the tests

## Unit Tests
- A Unit Test, tests part of an application (a unit). Usually, each unit is tested independently/individually to ensure the application runs as expected.

## Integration Tests
- Tests that individual units are working together. More than 1 unit is tested to see the functionality/behaviour is when working together.

## Acceptance Tests
- This involves testing the whole system/application to see if it meets the specfication required. Evaluates the whole systems/business requirements.

## Stress Tests
- Sees how much our application can cope with in terms of: high load; hacks; attacks; etc...

## Test Driven Development (TDD)
- Known as: RED, GREEN, REFACTOR.
1. Write the tests
2. See the tests fail
3. Write code to pass the tests
4. Refactor code as necessary
5. Repeat

## Behaviour Driven Development (BDD)
- A subset of TDD
- Not mutually exclusive with TDD
- This involves being verbose(express more then needed) with style and describing the functionalities behaviour
- Helpful for testing software design

## Jasmine
- Jasmine is a framework for writing tests
- Everything needed, to test code, is included in the framework
- Works in many different kinds of JS Environments
- Simple syntax
- CDNs: https://cdnjs.com/libraries/jasmine
Order the scripts like so: jasmine-js; jasmine-html-js; boot.js

### Essential Keywords
#### describe
- A function for describing the test
- Can be nested
#### it
- A function used inside the 'describe' function, tells more detail about the test. A 'spec' is a 'test'. Each 'it' function, is a spec.
#### expect
- A function used inside the 'it' function. Expecations are set, if they are not met the test fails. Returns a object.
- More than 1 expect can be used in a single unit, if they are tests related to only that single unit. Use seperate 'it' blocks if the test is for more than one unit.

#### Matchers
- Functions attatched to the result of the 'expect' function
- Many different matchers exists

##### toBe/not.toBe
- Matches or does not match what is specified (Triple equals comparison/strict equality). Triple equals returns false if the memory locations are different.
##### toBeCloseTo
- Checks to see if the result is similar
##### toBeDefined
- Makes sure a value is not undefined
##### toBeFalsey/toBeTruthy
- Checks for falsey or truthy values
##### toBeGreaterThan/toBeLessThan
- Checks to see if a value is greater than (arrays)
##### toContain
- Checks to see if an array contains a value
##### toEqual
- Checks to see if they are loosely/abstractly equal. Returns true if the values inside an object or array match another.
##### jasmine.any()
- Used to check the type of a variable

### Jasmine Hooks
#### beforeEach
- A callback function that runs before every 'it' callback defined
- Declaring the var outside of 'beforeEach' gives it scoping that can be accessed by the 'beforeEach' function and every 'it' function
##### Example
describe("Arrays", () => {
    let arr;
    beforeEach(() => {
        arr = [1,3,5];
    });
});

#### afterEach
- This function runs after each 'it' callback
##### Example
describe("Arrays", () => {
    let count = 0;

    beforeEach(() => {
        count++;
    });
    
    afterEach(() => {
        // Resets the counter to 0 after every 'it' block
        count = 0;
    });
});

#### beforeAll / afterAll
- This runs before/after all tests.
- This does not reset in between each test.
- This may have unintended consequences, so is used less often
- Makes a variable accessible outside the scope of the test, so it is accessible by all tests
##### Example
let arr = [];

beforeAll(() => {
    arr = [1, 2, 3];
})

describe("counting", () => {
    it("Starts with an array", () => {
        // some code here
    });
});

#### Pending Tests
- Sometimes you just don't know what needs testing
##### Example
describe("Pending specs", () => {
    xit("Can start with an xit", () => {
        expect(true).toBe(true);
    });

    it("is a pending test if there is no callback function");

    it("is pending if the pending function is invoked inside the callback", () => {
        expect(2).toBe(2);
        pending();
    });
});

### Spies
- A 'mock', mocking, is a fake object posing as a function without the overhead of creating a real object
- Mocks can be used to find out how many times the mock was run, what values the function returned, and how many params the function was called with
- A mock is only available in the describe & it blocks it is defined in, it is removed once the spec is complete
- A spy can stub(mimic) any function, tracking calls to it and all args.
- There are special matchers for creating spys(toHaveBeenCalled & toHaveBeenCalledWith)
- Spies can help speed up the time took running a test

#### Example (Testing a return value)
function add(a, b, c){
    return a + b + c;
}

describe("add", () => {
    let addSpy, result;

    beforeEach(() => {
        addSpy = spyOn(window, "add").and.callThrough();
        result = addSpy(1,2,3);
    })
    it("Can have a return value tested", () => {
        expect(result).toEqual(6);
    });
});

#### Example (Testing frequency)
function add(a, b, c){
    return a + b + c;
}

describe("add", () => {
    let addSpy, result;

    beforeEach(() => {
        addSpy = spyOn(window, "add").and.callThrough();
        result = addSpy(1,2,3);
    })
    it("Can have params tested", () => {
        // Checks if addSpy is called
        expect(addSpy.calls.any().toBe(true); 
        // Checks if addSpy call amount is equal to 1
        expect(addSpy.calls.count()).toBe(1);
        expect(result).toEqual(6);
    });
});

### Testing Time Dependant Code
- The Jasmine Clock is for testing time dependant code
- Installed by invoking 'jasmine.clock().install()'
- Uninstall the clock after finishing the test to restore the original functions

#### Example
describe("A simple setTimout", () => {
    let sample;

    beforeEach(() => {
        sample = jasmine.createSpy("sample function");
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it("is only invoked after 1000 milliseconds", () => {
        setTimout(() => {
            sample();
        }, 1000);

        jasmine.clock().tick(999); // ms
        expect(sample).not.toHaveBeenCalled();
        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
    });
});

### Testing Asynchronous Code
- Jasmine has support to run specs that require testing asynchronous code
- beforeAll, afterAll, beforeEach, afterEach, and 'it' take an optional single argument(usually called 'done'). This should be called when the aynchronous work is complete.
- A test WILL NOT complete until 'done' is called
- The 'done' function handles asynchronous code
- The 'done' function waits 5 seconds by default, modify the internal time with: 'jasmine.DEFAULT_TIMOUT_INTERVAL

#### Example
function getUserInfo(username){
    return $.getJSON("someapi.com/users/" + username); // promise
}

describe("#getUserInfo", () => {
    it("returns the correct name for the user", (done) => {
        getUserInfo("bob").then((data) => {
            expect(data.name).toBe("Bob Blue");
            done(); // make sure the test doesn't timeout
        });
    });
});