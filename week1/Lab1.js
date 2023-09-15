//add default value to parameters
function getArea(width=0, length=0, unit='m'){
    return console.log(`The area is ${width*length} ${unit}`);
}

getArea(2,2,'ft');

//change to arrow function

/*function greet(val) {
    return `Hi, ${val}!`;
}*/

greet=val=> `Hi, ${val}!`;

console.log(greet('cool coders'));