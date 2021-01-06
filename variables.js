/*
Course: Keeping Up With the Javascripts: ES6
Student: John Bryan Yepez
Homework Assignment #2: Variables and Constants
*/

/*
Javascript has something called hoisting, which consist of the variable and function
declarations being moved to the top of their scope.
In the case of a variable, altough it is declared at top of his scope, the assignment
is made in the same line you declared it. You can not access a variable before his
assignment, but you can use a function before you declare it because his declaration
is hoisted.
*/

/*
ES6 has 3 types of variable declarations: var, let and const.
A variable declared with 'var' has a function scope if declared inside a function,
or a global scope if declared out of a function, regardless of the blocks.
A variable declared with 'let' has a block scope, so it only exist inside the block
it has been declared (a block starts with a '{' and ends with a '}').
A variable declared with 'const' has the same scope as one declared with 'let', and
it adds the property of not allowing reassignments, so it always points to the same
primitive value or the same object. It doesn't mean that an object pointed by a const
can not be modified.
*/

//var example
function varHelloWorld() {
    if (true) {
        var hello = "hello";
    }
    var world = "world";

    //It can access the 'hello' variable regardless of being declared inside the if block.
    console.log(hello + " " + world + "!");
}
varHelloWorld();

//let example
function letHelloWorld() {
    if (true) {
        let hello = "hello";
    }
    let world = "world";

    //It can not access the 'hello' variable because that variable is out of scope,
    //so it will throw an error.
    console.log(hello + " " + world + "!");
}
try {
    letHelloWorld();
}
catch (e) {
    console.log(e.name + ": " + e.message);
}

//const example
function constHelloWorld() {
    const HELLO = "hello";
    const WORLD = "world";

    //'WORLD' variable can not be reassigned, so it will throw an error.
    WORLD = "earth";
    console.log(HELLO + " " + WORLD + "!");
}
try {
    constHelloWorld();
}
catch (e) {
    console.log(e.name + ": " + e.message);
}