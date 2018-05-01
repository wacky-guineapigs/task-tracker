const newCategory = require("./categories")
const appendCategory = require("./DOMBuilder")

const openTaskAdd = () => {
	let addBox = document.querySelector(".card__form")
	button = document.querySelector(".task__button")
	button.classList.toggle("open")
	addBox.classList.toggle("hide")
}

const addTask = document.querySelector(".task__button").addEventListener("click", openTaskAdd);

const closeCatAdd = () => {
	let text = document.querySelector("#form__new__category")
	let submit = document.querySelector("#form__submit__category")
	button = document.querySelector(".cat__button")
	button.classList.toggle("open")
	text.classList.toggle("hide")
	submit.classList.toggle("hide")
}

const addCategory = () =>{
	// pull value from #form__new__category
	let catRef = document.querySelector("#form__new__category")
	let newCat = catRef.value
	// add it to the category array
	newCategory.categories.push(newCat)
	// print it to the DOM at #form__category as option with value and text content set to the pulled value
	appendCategory.addCategoryToDom(newCat)
	//clear text content on input
	catRef.value = ""
	// call 
	closeCatAdd
}

const openCatAdd = () => {
	let text = document.querySelector("#form__new__category")
	let submit = document.querySelector("#form__submit__category")
	button = document.querySelector(".cat__button")
	button.classList.toggle("open")
	text.classList.toggle("hide")
	submit.classList.toggle("hide")
	submit.addEventListener("click", addCategory)
}


const addCat = document.querySelector(".cat__button").addEventListener("click", openCatAdd)