// Constructor Function
function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

let firstHouse = new House(2, 2, 1000);
console.log(firstHouse.bedrooms + " bedrooms");

// Dog exercise
function Dog(name, age){
    this.name = name;
    this.age = age;

    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

let joey = new Dog("Joey", 1);
console.log(joey.name + " is age " + joey.age);
joey.bark();

// Multiple Constructors
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Bike(make, model, year){
    // Use call or apply to set the context of 'this' and use the
    // properties from the 'Car' constructor
    // Car.call(this, make, model, year);
    Car.apply(this, [make, model, year]);
    this.numWheels = 2
}

function Motorbike(){
    // We don't need to pass in params if we use the arguments from 'Car'
    Car.apply(this, arguments);
    this.numWheels = 2;
}

let bmw = new Car("BMW", "318i", 2000);
console.log(bmw);

let boardman = new Bike("Boardman", "Jump", 2019);
console.log(boardman);

let ducati = new Motorbike("Ducati", "Speed", 2010);
console.log(ducati);

// Udemy Exercise
// PART 1

// Create a constructor function for a Person, each person should have a 
// firstName, lastName, favoriteColor and favoriteNumber. 
// Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a 
// number and returns the product of the number and the object 
// created from the Person functions' favorite number.

function Person(firstName, lastName, favouriteColor, favouriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favouriteColor = favouriteColor;
    this.favouriteNumber = favouriteNumber;
    
    this.multiplyFavouriteNumber = function(num){
        return this.favouriteNumber * num;
    }
}

// PART 2

// Given the following code - refactor the Child function to remove 
// all the duplication from the Parent function. 
// You should be able to remove 4 lines of code in the Child function 
// and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(){
    // 'this' refers to the 'Child' object created when 'Child()' is run
    Parent.apply(this, arguments);
}