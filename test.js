"use strict";

const arr = ["1", "2", "3"];
const arr2 = ["2", "5", "1"];
// we can use the join operator to combine all the elements in the array
// the use teh Number function to convert the string into a number
console.log(Number(arr.join("")) + Number(arr2.join("")));
