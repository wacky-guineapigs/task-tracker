const DOMBuilder = require("./DOMBuilder")
const categoryDB = require("./categories")
const manageDB = require("./manageDB")

// preload categories from storage to database and task form 
categoryDB.categories = manageDB.retrieveTasks("categories")
DOMBuilder.addCategoryToDom(categoryDB.categories)

manageDB.tasks = manageDB.retrieveTasks("tasks")

taskData = manageDB.retrieveTasks("tasks")
taskData.forEach(element => {
    DOMBuilder.addCardToDom(element.Title, element.Category, element.Description, element.Due, element.currentStatus)
});

