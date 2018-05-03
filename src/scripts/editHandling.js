const manageDB = require("./manageDB")
const DOMBuilder = require("./DOMBuilder")



//add event Listener to submit button
const updateBtn = document.querySelector("#editform__submit")
updateBtn.addEventListener("click", event => {
    const tasktoEdit = manageDB.tasks.find(task => task.Created === parseInt(DOMBuilder.taskID))
    tasktoEdit.Title = document.querySelector("#editform__title").value
    tasktoEdit.Description =document.querySelector("#editform__description").value
    tasktoEdit.Category = document.querySelector("#editform__category").value
    tasktoEdit.Due = Date.parse(new Date(document.querySelector("#editform__due").value))
    DOMBuilder.cardReference.remove()
    DOMBuilder.addCardToDom(tasktoEdit.Title, tasktoEdit.Category, tasktoEdit.Description, tasktoEdit.Due, tasktoEdit.currentStatus, tasktoEdit.Created)
    manageDB.saveTasks(manageDB.tasks, "tasks")
    document.querySelector("#edit").classList.toggle("hide")
})