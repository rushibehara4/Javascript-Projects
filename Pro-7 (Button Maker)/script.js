let applyButtonEl = document.getElementById("applyButton");
let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let customButtonEl = document.getElementById("customButton");

applyButtonEl.addEventListener("click", function() {
    let bgColorInputVal = bgColorInputEl.value;
    let fontColorInputVal = fontColorInputEl.value;
    let fontSizeInputVal = fontSizeInputEl.value;
    let fontWeightInputVal = fontWeightInputEl.value;
    let paddingInputVal = paddingInputEl.value;
    let borderRadiusInputVal = borderRadiusInputEl.value;
    
    customButtonEl.style.backgroundColor = bgColorInputVal;
    customButtonEl.style.color = fontColorInputVal;
    customButtonEl.style.fontSize = fontSizeInputVal;
    customButtonEl.style.fontWeight = fontWeightInputVal;
    customButtonEl.style.padding = paddingInputVal;
    customButtonEl.style.borderRadius = borderRadiusInputVal;
});
