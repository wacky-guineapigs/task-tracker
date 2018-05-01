const DOMBuilder = require("./DOMBuilder")
const categoryDB = require("./categories")
const manageDB = require("./manageDB")

// preload categories from storage to database and task form 
categoryDB.categories = manageDB.retrieveTasks("categories")
DOMBuilder.addCategoryToDom(categoryDB.categories)