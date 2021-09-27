"use strict";

const arr = [];
const arr2 = ["2", "5", "1"];
// we can use the join operator to combine all the elements in the array
// the use teh Number function to convert the string into a number
// console.log(Number(arr.join("")) + Number(arr2.join("")));

// Testing part
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const display = document.getElementById("display");

//TODO

// Get the context of a Button

const clickEvent = function (btn) {
  btn.addEventListener("click", function () {
    console.log(btn.textContent);
    const lastnumber = Number(btn.textContent);
    arr.push(lastnumber);
    display.textContent = Number(arr.join(""));
  });
};
console.log(arr);
// Once Press append the value into an array  DONE

// after pressing the operator the first array will combine all the elements

// log the next value into the next array
clickEvent(btn1);
clickEvent(btn2);
clickEvent(btn3);
clickEvent(btn4);
clickEvent(btn5);
