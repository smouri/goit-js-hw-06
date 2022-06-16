const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === "" || password === "") {
        alert("Все поля должны быть заполнены");
    }

    const userForm = {
        email,
        password,
    };
    console.log(userForm);

    event.currentTarget.reset();
});