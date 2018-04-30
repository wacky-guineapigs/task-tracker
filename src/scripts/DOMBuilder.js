function addCardToDom (title, category, description, dueDate) {
    const toDoSection = document.querySelector("#todo")
    const newCardDiv = document.createElement("div");
    const newHeaderDiv = document.createElement("div")
    const newTitleHeader = document.createElement("h4");
    const newCategoryHeader = document.createElement("h5")
    const newDescPara = document.createElement("p")
    const newDueDatePara = document.createElement("p")
    const newOverduePara = document.createElement("p")
    const newArchiveBtn = document.createElement("input")

    newCardDiv.classList = "card"
    newHeaderDiv.classList = "cardHeader"

    newArchiveBtn.type = "button"
    newArchiveBtn.value = "Archive"

    newTitleHeader.textContent = title;
    newCategoryHeader.textContent = category;
    newDescPara.textContent = description;
    newDueDatePara.textContent = dueDate;
    newOverduePara.textContent = "This task is overdue"
    

    newOverduePara.classList = "overdueText hide"
    newArchiveBtn.classList = "archiveBtn hide"

    newHeaderDiv.appendChild(newTitleHeader)
    newHeaderDiv.appendChild(newCategoryHeader)
    newCardDiv.appendChild(newHeaderDiv)
    newCardDiv.appendChild(newDescPara)
    newCardDiv.appendChild(newDueDatePara)
    newCardDiv.appendChild(newOverduePara)
    newCardDiv.appendChild(newArchiveBtn)
    toDoSection.appendChild(newCardDiv)
}