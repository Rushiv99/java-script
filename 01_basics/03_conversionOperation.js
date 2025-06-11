"use strict"
let score = "23"
console.log(typeof score)
let valueInnumber = Number(score)
console.log(typeof valueInnumber)
let id = "23abc"
let idinnumber = Number(id)
console.log(id)
console.log(typeof idinnumber)
console.log(idinnumber)

console.log("------------------------------------------------")
let id1 = true
let id1innumber = Number(id1)
console.log(id1)
console.log(typeof id1innumber)
console.log(id1innumber)

// we also use Boolean , String for convert the type of data

console.log("---------------------------------------------------")
let str1 = "hello"
let str2 = " Rushi"
let str3 = str1+str2
console.log(str3)            // hello Rushi
console.log(str2+str1)       //  Rushihello

console.log("------------------------------------------------------")

console.log("1"+2)
console.log(1+ "2")
console.log(1+ "2"+1)
console.log("1"+ 2+2)
console.log(1+ 2+"2")

console.log("------------------------------------------------------")

console.log(+true)
console.log(+"")

console.log("-------------------------------------------------------")

let gameCounter = 100
let g1 = gameCounter++
let g2 = ++gameCounter

console.log(g1)
console.log(g2)

console.log("-------------------------------------------------------")