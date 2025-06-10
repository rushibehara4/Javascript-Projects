let containerEl = document.getElementById("colorPickerContainer");
let colorNameEl = document.getElementById("selectedColorHexCode");

let btn1El = document.getElementById("button1");
btn1El.onclick = function () {
  containerEl.style.backgroundColor = "#e0e0e0";
  colorNameEl.textContent = "#e0e0e0";
};

let btn2El = document.getElementById("button2");
btn2El.onclick = function () {
  containerEl.style.backgroundColor = "#6fcf97";
  colorNameEl.textContent = "#6fcf97";
};

let btn3El = document.getElementById("button3");
btn3El.onclick = function () {
  containerEl.style.backgroundColor = "#56ccf2";
  colorNameEl.textContent = "#56ccf2";
};

let btn4El = document.getElementById("button4");
btn4El.onclick = function () {
  containerEl.style.backgroundColor = "#bb6bd9";
  colorNameEl.textContent = "#bb6bd9";
};
