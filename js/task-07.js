const inputSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputSize.addEventListener("input", (event) => {
    textSize.style.fontSize = `${event.target.value}px`;
});