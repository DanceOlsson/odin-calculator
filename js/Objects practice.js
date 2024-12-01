// Objects :)

let howToCreateAnObject1 = new Object(); // object constructor
let howToCreateAnObject2 = {}; // object literal - most common

// Objects have key:value.  Like a cabinet(object) with folders(keys) with data(value)
let myObjectLiteral = {
    name: "Alex",
    age: 31
};

// get property values of the objects using dot notation
alert( myObjectLiteral.name );
alert( myObjectLiteral.age );

// add a new value
myObjectLiteral.isAdmin = true;
myObjectLiteral.birthYear = 1993;
myObjectLiteral.appleDevices = ["iphone", "ipad", "macbook"]

// delete value
delete myObjectLiteral.appleDevices;

// multi word value must be "bracketed"
anotherObject = {
    name: "Peter",
    "Is a dick": true, //best practice to leave a hanging comma ,,,,

};

// for multi word values we need to use [brackets] instead of dot methods
anotherObject["Is a winner"] = false;
alert(anotherObject["Is a dick"]);
delete anotherObject["Is a winner"];