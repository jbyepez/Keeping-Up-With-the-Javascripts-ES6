/*
Course: Keeping Up With the Javascripts: ES6
Student: John Bryan Yepez
Homework Assignment #4: Functions
*/


/*
All men are mortal
Socrates is a Man.
Therefore, socrates is mortal.
*/
function Man(name) {
    this.name = name;
    this.isMortal = true; //All men are mortal
}

let menList = [new Man("Socrates")];

function getMan(name) {
    return menList.find(m => m.name === name);
}

function isAMortalMan(name){
    let man = getMan(name);
    if(man === undefined){ //If not a recognized man
        return false;
    }
    return man.isMortal;
}

console.log("Is Socrates Mortal?: " + isAMortalMan("Socrates"));

console.log();


// /*
// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.
// */

function flavorOfCake(possibilities, isChocolate){
    //Checking correctness of input
    if(
        !(possibilities instanceof Array) ||
        possibilities.length !== 2 ||
        typeof isChocolate !== "boolean" ||
        possibilities.find(p => p === "chocolate") === undefined ||
        possibilities.find(p => typeof p !== "string") !== undefined
    ){
        return "undefined";
    }

    if(isChocolate){
        if(possibilities[0] === "chocolate"){
            return possibilities[0];
        }
        else {
            return possibilities[1];
        }
    }
    else {
        if(possibilities[0] !== "chocolate"){
            return possibilities[0];
        }
        else {
            return possibilities[1];
        }
    }
}

let possibilities = ["vanilla", "chocolate"];
let isChocolate = false;

console.log("Flavor of cake: " + flavorOfCake(possibilities, isChocolate));

