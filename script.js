"use strict";
const number = document.querySelector(".number");
const decrease = document.querySelectorAll(".btn")[0];
const reset = document.querySelectorAll(".btn")[1];
const increase = document.querySelectorAll(".btn")[2];
function changeClr() {
  if (+number.textContent > 0) {
    number.style.color = "green";
  } else if (+number.textContent < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "#222";
  }
}
// decrease functionnality
decrease.addEventListener("click", function (e) {
  e.preventDefault();
  number.textContent = +number.textContent - 1;
  changeClr();
});
// increase functionnality
increase.addEventListener("click", function (e) {
  e.preventDefault();
  number.textContent = +number.textContent + 1;
  changeClr();
});
// reset functionnality
reset.addEventListener("click", function (e) {
  e.preventDefault();
  number.textContent = 0;
  changeClr();
});
