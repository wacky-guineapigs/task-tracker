 taskMaker = require("manageDB.js")
 DOMBuilder = require("DOMBuilder.js")
 formActor = require("formsEvent.js")
 

 const submitButton = document.querySelector("#form__submit")

 const clearForm = () => {
	document.querySelector("#form__title").value = ""
	document.querySelector("#form__description").value = ""
	document.querySelector("#form__category").value = "none"
	document.querySelector("#form__due").value = ""
}

 submitButton.addEventListener("click", function () {
    const taskName = document.querySelector("#form__title").value
    const taskDesc = document.querySelector("#form__description").value
    const taskCat = document.querySelector("#form__category").value
    const taskDue = Date.parse(new Date(document.querySelector("#form__due").value))
	
	taskMaker.saveNewTask(taskName, taskDesc, taskCat, taskDue)
	let task = taskMaker.tasks[taskMaker.tasks.length-1]
	taskMaker.saveTasks(taskMaker.tasks, "tasks")
	DOMBuilder.addCardToDom(task.Title, task.Category, task.Description, task.Due, "todo", task.Created)
    formActor.openTaskAdd()
    clearForm()
 })