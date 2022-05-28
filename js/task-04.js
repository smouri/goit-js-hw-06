const dBtn = document.querySelector('button[data-action="decrement"]');
const iBtn = document.querySelector('button[data-action="increment"]');
const count = document.querySelector("#value");
let counterValue = 0;

dBtn.addEventListener("click", (event) => {
    counterValue -= 1;
    count.textContent = counterValue;
});
iBtn.addEventListener("click", (event) => {
    counterValue += 1;
    count.textContent = counterValue;
});