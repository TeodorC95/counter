"use strict";

const count = document.getElementById("counter");
const btnContainer = document.querySelector(".buttonContainer");

let counter = 0;

btnContainer.addEventListener("click", function (e) {
  // event delegation
  if (!e.target.classList.contains("btn")) return;

  // app logic
  if (e.target.classList.contains("down")) counter--;
  else if (e.target.classList.contains("up")) counter++;
  else counter = 0;
  count.textContent = counter;

  // edit color
  if (counter < 0) count.style.color = "red";
  else if (counter > 0) count.style.color = "green";
  else count.style.color = "#333";
});
