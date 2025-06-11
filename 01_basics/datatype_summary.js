//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



console.log("+++++++++++++++++++++++++++++++++++++++++++++++++=")

// stack(primitive)   
//  stack mai apko direct reference nahi milega apko iski copy karke value milgi 
// jisje aap original value main change nahi kar payege
// 
// 
//    heap(non primitive)
// apko yha original value ka reference milga that's why we have to able to change in 
// original values


