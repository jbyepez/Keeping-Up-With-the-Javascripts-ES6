/*
Course: Keeping Up With the Javascripts: ES6
Student: John Bryan Yepez
Homework Assignment #4: Functions
*/

function timeAdder(value1, label1, value2, label2){

    function getSeconds(value, label){
        if(typeof value !== 'number'){
            return undefined;
        }
        if(typeof label !== 'string'){
            return undefined;
        }
        if((value === 1) !== (label.charAt(label.length - 1) !== 's')){ //correctness of plurality
            return undefined;
        }
        switch(label){
            case 'second':
            case 'seconds':
                return value;
            case 'minute':
            case 'minutes':
                return value * 60;
            case 'hour':
            case 'hours':
                return value * 3600;
            case 'day':
            case 'days':
                return value * 86400;
            default:
                return undefined;
        }
    }

    let seconds = getSeconds(value1, label1) + getSeconds(value2, label2);
    if(isNaN(seconds)){
        return false;
    }
    if(seconds % 60 !== 0){
        return [seconds, seconds === 1 ? 'second' : 'seconds'];
    }
    let minutes = seconds / 60;
    if(minutes % 60 !== 0){
        return [minutes, minutes === 1 ? 'minute' : 'minutes'];
    }
    let hours = minutes / 60;
    if(hours % 24 !== 0){
        return [hours, hours === 1 ? 'hour' : 'hours'];
    }
    let days = hours / 24;
    return [days, days === 1 ? 'day' : 'days'];
}

console.log(timeAdder(1,"minute",3,"minutes"));
console.log(timeAdder(5,"days",25,"hours"));
console.log(timeAdder(1,"minute",240,"seconds"));
console.log(timeAdder(5,"hour",5,"minutes"));
console.log(timeAdder(false,false,5,"minutes"));
console.log(timeAdder({},"days",5,"minutes"));
console.log(timeAdder(20,"hours",4,"hours"));
console.log(timeAdder(20,"hours",5,"hours"));
