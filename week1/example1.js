const a = 10; //constant, cannot change the value

var b = 20;    //scope is in the window object
let c = 10*20;  //scope is only inside the function

console.log(a);
console.log(b);
console.log(c);

const post = { id:1, title:'New Post'}; //you can modify the object eventough it is const

console.log(post);

Object.freeze(post); //To make the object inmutable, also works with arrays

myName = 'Oliver';

console.log(`Hello, I am ${myName}. This is the first class`);

//arrow functions

function print(){
    console.log("-----------------------------");
    console.log("Function print");
    console.log("-----------------------------");
}

print2=(myName)=>{
    console.log("-----------------------------");
    console.log("Arrow Function print. My name is "+myName);
    console.log("-----------------------------");
}

print();
print2('Oliver');

square=x=>x*x;

number=square(2);
console.log(number);

//spread operator example
const nums = [11,22,33];

function add(first, second, third){
    return first+second+third;
}

//let total = add(nums[0],nums[1],nums[2]);
let total = add(...nums);  //spread operator
console.log(total);

//spread operator example 2
const nums2 = [11,22,33];
const nums3=[44,55,66];

//nums2.push(nums3); //output [ 11, 22, 33, [ 44, 55, 66 ] ]
nums2.push(...nums3); //output [ 11, 22, 33, 44, 55, 66 ] 

console.log(nums2);
