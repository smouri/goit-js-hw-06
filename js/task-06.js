const input = document.querySelector("#validation-input");
const inputValid = Number(input.dataset.length);

input.addEventListener("blur", ({ currentTarget }) => {
    if (currentTarget.value.length !== inputValid) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
});