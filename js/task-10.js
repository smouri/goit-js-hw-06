function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

create.addEventListener("click", (event) => {
    createBoxes(input.value);
});

destroy.addEventListener("click", (event) => {
    divBox.innerHTML = "";
    input.value = "";
});

function createBoxes(amount) {
    const startSize = 30;
    if (amount <= 100) {
        for (let i = 0; i < amount; i += 1) {
            const newBox = document.createElement("div");
            console.dir(newBox);
            newBox.style.width = `${startSize + i * 10}px`;
            newBox.style.height = `${startSize + i * 10}px`;
            newBox.style.backgroundColor = getRandomHexColor();
            newBox.style.border = `1px solid black`;
            newBox.style.borderBottom = "";
            divBox.append(newBox);
        }
    } else {
        alert("Please enter value.\nMax value 100");
    }
}