let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");

let firstNumberValue = Math.ceil(Math.random() * 100);
let secondNumberValue = Math.ceil(Math.random() * 100);

firstNumberEl.textContent = firstNumberValue;
secondNumberEl.textContent = secondNumberValue;

checkButtonEl.addEventListener("click", function () {
    let userInputValue = parseInt(userInputEl.value); // ✅ Moved inside
    if (userInputValue === firstNumberValue + secondNumberValue) {
        gameResultEl.textContent = "Congratulations! You got it right.";
        gameResultEl.style.backgroundColor = "#028a0f";
    } else {
        gameResultEl.textContent = "Please Try Again!";
        gameResultEl.style.backgroundColor = "#1e217c";
        userInputEl.value = "";
    }
});

restartButtonEl.addEventListener("click", function () {
    firstNumberValue = Math.ceil(Math.random() * 100); 
    secondNumberValue = Math.ceil(Math.random() * 100);

    firstNumberEl.textContent = firstNumberValue;
    secondNumberEl.textContent = secondNumberValue;
    userInputEl.value = "";
    gameResultEl.textContent = "";
    gameResultEl.style.backgroundColor = "";
});
