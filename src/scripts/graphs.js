const manageDB = require("./manageDB")
const categoriesDB = require("./categories")


///How many tasks currently in each active column and how many are archived
///data for the first chart
const currentColumns = []
currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "todo").length)
currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "doing").length)
currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "done").length)
currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "archived").length)

///How many tasks in each category (include uncategorized)
const categories = {}
categoriesDB.categories.forEach(category => {
    categoriesTally[category] = 0
})
manageDB.tasks.forEach(task => {
    categoriesTally[task.Category]++
})
const catTallySortable = categoriesTally.entries()
//data and labels for the second chart
const tallySorted = []
const tallyLabelsSorted = []
catTallySortable.forEach(category => {
    tallySorted.push(category[1])
    tallyLabelsSorted.push(category[0])
})

///How many tasks were completed on time vs. how many were not
const onTimeTasks = manageDB.tasks.filter(task => {
    const dueDate = parse(new Date(task.Due))
    const completedDate = parse(task.Completed)
    return dueDate >= completedDate
})
const lateTasks = manageDB.tasks.filter(task => {
    const dueDate = parse(new Date(task.Due))
    const completedDate = parse(task.Completed)
    return dueDate <= completedDate
})

const onTime = onTimeTasks.length
const behindSchedule = lateTasks.length

const onTimeChartData = []
onTimeChartData.push(onTime)
onTimeChartData.push(behindSchedule)


///Average time it took to complete tasks in each category
const categoryAverages = categoriesDB.categories.map(category => {
     return manageDB.tasks.filter(task => task.Category === category).reduce((a, b) => {
        a + (parse(b.Completed) - parse(b.Created))
     }, 0)/manageDB.tasks.filter(task => task.Category === category)
})

///labels for fourth graph:
categoriesDB.categories
///data for fourth graph: 
categoryAverages

