const inputSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
textSize.style.fontSize = `${inputSize.value}px`;
inputSize.addEventListener("input", (event) => {
    textSize.style.fontSize = `${event.target.value}px`;
});