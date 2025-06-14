let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");
let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionsTabEl.classList.add("d-none");

aboutButtonEl.addEventListener("click", function() {
    aboutButtonEl.classList.add("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.remove("selected-button");

    aboutTabEl.classList.remove("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.add("d-none");
});

timeToVisitButtonEl.addEventListener("click", function() {
    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.add("selected-button");
    attractionsButtonEl.classList.remove("selected-button");

    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.remove("d-none");
    attractionsTabEl.classList.add("d-none");
});

attractionsButtonEl.addEventListener("click", function() {
    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.add("selected-button");

    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.remove("d-none");
})