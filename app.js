"use strict";

const count = document.getElementById("counter");
const btnContainer = document.querySelector(".buttonContainer");

let counter = 0;

const up = function () {
  counter++;
  if (counter > 0) count.style.color = "green";
};
const down = function () {
  counter--;
  if (counter < 0) count.style.color = "red";
};
const reset = function () {
  counter = 0;
  count.style.color = "#333";
};

btnContainer.addEventListener("click", function (e) {
  // event delegation
  if (!e.target.classList.contains("btn")) return;

  // app logic
  if (e.target.classList.contains("down")) down();
  else if (e.target.classList.contains("up")) up();
  else reset();
  count.textContent = counter;
});
