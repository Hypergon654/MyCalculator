"use strict";
// this are the variables
const one = document.querySelector(".key-1");
const two = document.querySelector(".key-2");
const three = document.querySelector(".key-3");
const four = document.querySelector(".key-4");
const five = document.querySelector(".key-5");
const six = document.querySelector(".key-6");
const seven = document.querySelector(".key-7");
const eight = document.querySelector(".key-8");
const nine = document.querySelector(".key-9");
const dot = document.querySelector(".key-dot");
const zero = document.querySelector(".key-0");
const output = document.querySelector(".output");
// Event listener
one.addEventListener("click", function () {
  const value = Number(one.textContent);
  output.textContent = value;
});
two.addEventListener("click", function () {
  const value = Number(two.textContent);
  output.textContent = value;
});
three.addEventListener("click", function () {
  value = Number(three.textContent);
  output.textContent = value;
});
four.addEventListener("click", function () {
  value = Number(four.textContent);
  output.textContent = value;
});
five.addEventListener("click", function () {
  value = Number(five.textContent);
});
six.addEventListener("click", function () {
  value = Number(six.textContent);
});
seven.addEventListener("click", function () {
  value = Number(seven.textContent);
});
eight.addEventListener("click", function () {
  value = Number(eight.textContent);
});
nine.addEventListener("click", function () {
  value = Number(nine.textContent);
});
zero.addEventListener("click", function () {
  value = Number(zero.textContent);
});
dot.addEventListener("click", function () {
  value = dot.textContent;
});
