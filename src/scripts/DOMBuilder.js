const manageDB = require("./manageDB")

function addCardToDom (title, category, description, dueDate, position, dateCreated) {
    
    const toDoSection = document.querySelector(`#${position}`)
    const newCardDiv = document.createElement("div")
    const newHeaderDiv = document.createElement("div")
    const newTitleHeader = document.createElement("h4")
    const newCategoryHeader = document.createElement("h5")
    const newDescPara = document.createElement("p")
    const newDueDatePara = document.createElement("p")
    const newOverduePara = document.createElement("p")
    const newArchiveBtn = document.createElement("input")
    const newEditBtn = document.createElement("input")

	newCardDiv.classList = "card"
	newCardDiv.id = ("" + dateCreated)
    newHeaderDiv.classList = "cardHeader"
    newOverduePara.classList = "overdueText hide"
    if (dueDate < Date.parse(new Date())) {
        newOverduePara.classList.toggle("hide")
    }
    newArchiveBtn.classList = "archiveBtn hide"
    newEditBtn.classList = "editBtn"


    newArchiveBtn.type = "button"
    newArchiveBtn.value = "Archive"
    newEditBtn.type = "button"
    newEditBtn.value = "Edit"
    newArchiveBtn.addEventListener("click", (e) => {
        const archivedTask = manageDB.tasks.find(task => task.Created === parseInt(e.target.parentNode.id))
        archivedTask.currentStatus = "archive"
        e.target.parentNode.remove()
        manageDB.saveTasks(manageDB.tasks, "tasks")
        addCardToDom(archivedTask.Title, archivedTask.Category, archivedTask.Description, archivedTask.Due, archivedTask.currentStatus, archivedTask.Created)
    })
    newCardDiv.draggable = "true"


    newTitleHeader.textContent = title
    newCategoryHeader.textContent = category
    newDescPara.textContent = description
    newDueDatePara.textContent = new Date(dueDate).toDateString()
    newOverduePara.textContent = "This task is overdue"
    

    newHeaderDiv.appendChild(newTitleHeader)
    newHeaderDiv.appendChild(newCategoryHeader)
    newCardDiv.appendChild(newHeaderDiv)
    newCardDiv.appendChild(newDescPara)
    newCardDiv.appendChild(newDueDatePara)
    newCardDiv.appendChild(newOverduePara)
    newCardDiv.appendChild(newArchiveBtn)
    newCardDiv.appendChild(newEditBtn)
    newCardDiv.ondragstart = eventData => {
      eventData.dataTransfer.setData("sourceId", eventData.target.getAttribute("id"))
    }
    toDoSection.appendChild(newCardDiv)
}


function addCategoryToDom (value) {
    const categorySelector = document.querySelector("#form__category")
    if (Array.isArray(value)) {
        const optionFrag = document.createDocumentFragment()
        value.forEach(element => {
            const newCategoryOption = document.createElement("option")
            newCategoryOption.value = element
            newCategoryOption.textContent = element
            optionFrag.appendChild(newCategoryOption)
        })
        categorySelector.appendChild(optionFrag)
    } else if (typeof value === "string") {
        const newCategoryOption = document.createElement("option")
        newCategoryOption.value = value
        newCategoryOption.textContent = value
        categorySelector.appendChild(newCategoryOption)
    } else {
        alert("Must be a String")
    }
}

const DOMBuilder = Object.create({},{
	addCardToDom:
	{
		value: addCardToDom
	},
	addCategoryToDom:
	{
		value: addCategoryToDom
	}
})

module.exports = DOMBuilder