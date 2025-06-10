let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");

let btnEl = document.getElementById("calculateButton");

btnEl.addEventListener("click", function() {
    let billAmountValue = parseFloat(billAmountEl.value);
    let percentageTipValue = parseFloat(percentageTipEl.value);

    if (isNaN(billAmountValue) || isNaN(percentageTipValue)) {
        errorMessageEl.textContent = "Please Enter a Valid Input";
        tipAmountEl.value = "";
        totalAmountEl.value = "";
    } else {
        errorMessageEl.textContent = "";
        let calculatedTipValue = (percentageTipValue / 100) * billAmountValue;
        tipAmountEl.value = calculatedTipValue.toFixed(2);
        let totalAmountValue = billAmountValue + calculatedTipValue;
        totalAmountEl.value = totalAmountValue.toFixed(2);
    }
});
