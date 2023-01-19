window.addEventListener("load", function () {
    const inputElement = document.getElementById("input-text");
    const outputElement = document.getElementById("output-text");

    inputElement.addEventListener("input", function() {
        console.log(inputElement.value)
        outputElement.textContent = window.btoa(inputElement.value);
    })
});

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = `${25+element.scrollHeight}px`
}