/*
Course: Keeping Up With the Javascripts: ES6
Student: John Bryan Yepez
Homework Assignment #3: Statements and Operators
*/


/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/
function man(name) {
    this.name = name;
    this.isMortal = true; //All men are mortal
}

function isAMan(item) {
    if (item instanceof man) {
        return true;
    }
    else {
        return false;
    }
}

function sayIfIsMortal(item) {
    if (item.isMortal === true) {
        return `${item.name} is mortal.`;
    } else if (item.isMortal === false) {
        return `${item.name} is not mortal.`;
    } else {
        return `${item.name} maybe mortal, maybe not.`;
    }
}

let socrates = new man("Socrates");

console.log("All men are mortal.");
if (isAMan(socrates)) {
    console.log(`${socrates.name} is a man.`);
    console.log(`Therefore ${sayIfIsMortal(socrates)}`);
}
else {
    console.log(`${socrates.name} is not a man.`);
    console.log(sayIfIsMortal(socrates));
}

console.log();



/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/
function cake(type) {
    this.type = type;
}

let myCake = new cake("vanilla");

if (myCake.type === "vanilla" || myCake.type === "chocolate") {
    console.log("This cake is either vanilla or chocolate.");

    if (myCake.type === "chocolate") {
        console.log("This cake is chocolate.");
    }
    else {
        console.log("This cake is not chocolate.");
        if (myCake.type === "vanilla") {
            console.log("Therefore, this cake is vanilla.");
        }
        else {
            console.log("Not vanilla either???!!! not possible.");
        }
    }
}