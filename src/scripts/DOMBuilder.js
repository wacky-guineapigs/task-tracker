function addCardToDom (title, category, description, dueDate, position) {
    
    const toDoSection = document.querySelector(position)
    const newCardDiv = document.createElement("div")
    const newHeaderDiv = document.createElement("div")
    const newTitleHeader = document.createElement("h4")
    const newCategoryHeader = document.createElement("h5")
    const newDescPara = document.createElement("p")
    const newDueDatePara = document.createElement("p")
    const newOverduePara = document.createElement("p")
    const newArchiveBtn = document.createElement("input")

    newCardDiv.classList = "card"
    newHeaderDiv.classList = "cardHeader"
    newOverduePara.classList = "overdueText hide"
    newArchiveBtn.classList = "archiveBtn hide"


    newArchiveBtn.type = "button"
    newArchiveBtn.value = "Archive"
    newCardDiv.draggable = "true"


    newTitleHeader.textContent = title
    newCategoryHeader.textContent = category
    newDescPara.textContent = description
    newDueDatePara.textContent = dueDate
    newOverduePara.textContent = "This task is overdue"
    

    newHeaderDiv.appendChild(newTitleHeader)
    newHeaderDiv.appendChild(newCategoryHeader)
    newCardDiv.appendChild(newHeaderDiv)
    newCardDiv.appendChild(newDescPara)
    newCardDiv.appendChild(newDueDatePara)
    newCardDiv.appendChild(newOverduePara)
    newCardDiv.appendChild(newArchiveBtn)
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