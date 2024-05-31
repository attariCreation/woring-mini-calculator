const input = document.querySelector("input");

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");
const display = document.querySelector("span");

let originalDisplayStyle = "display.style";
function displayValue() {
  display.innerHTML = "";
  display.innerHTML += input.value;
}
function clearInput() {
  input.value = "";
}
function clearDisplay() {
  display.innerHTML = "0";
}

function calculate() {
  if (input.value == "") {
    display.innerHTML = "please write a valid number !";
    display.style.padding = "30px";
    display.style.overflow = "hidden";
  } else {
    display.style.padding = "10px"
    display.style.overflow = "auto"

    try {
      display.innerHTML = eval(input.value);
    } catch (error) {
      display.innerHTML = "Error";
    }
  }
}
