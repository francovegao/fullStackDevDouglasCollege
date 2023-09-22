//console.log("Hello from node");

//built in module

//const and let --> block scope
//var --> function scope
/* const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt");

fs.writeFile("message.txt","Hello from node",(err)=>{
    if(err) throw err;
    console.log("data is saved");
})

fs.readFile("message.txt",(err,data)=>{
    if(err) throw err;
    console.log(`message is ${data}`);
}) */

//external modules example
/* const pokemon = require('pokemon'); //to require a module as common module

console.log(pokemon.all());
//=> ['Bulbasaur', …]

console.log(pokemon.random()); */

//other way using ecmascript module
//change package json to type: module
import pokemon from "pokemon";   //import a module using ecmascript 6 (change package.json configuration)
console.log(pokemon.random());

import {random} from "pokemon"  //import only the random method 
console.log(random());