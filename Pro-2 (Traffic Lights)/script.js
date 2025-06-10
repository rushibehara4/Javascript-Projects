let stopBtn = document.getElementById("stopButton");
let readyBtn = document.getElementById("readyButton");
let goBtn = document.getElementById("goButton");

let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");

stopBtn.addEventListener("click", function() {
    stopLightEl.style.backgroundColor = "#cf1124";
    stopBtn.style.backgroundColor = "#cf1124";
    
    readyLightEl.style.backgroundColor = "#4b5069";
    readyBtn.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
    goBtn.style.backgroundColor = "#1f1d41";
});

readyBtn.addEventListener("click", function() {
    readyLightEl.style.backgroundColor = "#f7c948";
    readyBtn.style.backgroundColor = "#f7c948";
    
    stopLightEl.style.backgroundColor = "#4b5069";
    stopBtn.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
    goBtn.style.backgroundColor = "#1f1d41";
})

goBtn.addEventListener("click", function() {
    goLightEl.style.backgroundColor = "#199473";
    goBtn.style.backgroundColor = "#199473";
    
    readyLightEl.style.backgroundColor = "#4b5069";
    readyBtn.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    stopBtn.style.backgroundColor = "#1f1d41";
})