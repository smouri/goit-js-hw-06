const ingredientsCont = document.querySelector("#ingredients");
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const createList = (el) => {
    let li = document.createElement("li");
    li.textContent = el;
    li.classList.add("item");
    return li;
};
const list = ingredients.map(createList);
ingredientsCont.append(...list);