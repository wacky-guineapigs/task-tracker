const manageDB = require("./manageDB")
const taskToEdit = require("./DOMBuilder").taskToEdit


//handle the submit by editing the current task in the database and save the database



newArchiveBtn.addEventListener("click", (e) => {
	const archivedTask = manageDB.tasks.find(task => task.Created === parseInt(e.target.parentNode.id))
	archivedTask.currentStatus = "archive"
	e.target.parentNode.remove()
	manageDB.saveTasks(manageDB.tasks, "tasks")
	addCardToDom(archivedTask.Title, archivedTask.Category, archivedTask.Description, archivedTask.Due, archivedTask.currentStatus, archivedTask.Created)
})


function submitHandling(e){

}

//add event Listener to submit button