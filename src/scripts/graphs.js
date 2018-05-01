const manageDB = require("./manageDB")
const categoriesDB = require("./categories")


///dataAnalysis methods return arrays for the datasets of the charts
const dataAnalysis = Object.create({}, {
    currentColumns: {
        enumerable: true, 
        writable: false, 
        value: () => {
            const currentColumns = []
            currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "todo").length)
            currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "doing").length)
            currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "done").length)
            currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "archived").length)
            return currentColumns
        }
    },
    currentCategoryTotals: {
        enumerable: true, 
        writable: false, 
        value: (tallyOrLabels) => {
            const categoriesTally = {}
            categoriesDB.categories.forEach(category => {
                categoriesTally[category] = 0
            })
            manageDB.tasks.forEach(task => {
                categoriesTally[task.Category]++
            })
            const catTallySortable = Object.entries(categoriesTally)
            const tally = []
            const labels = []
            catTallySortable.forEach(category => {
                tally.push(category[1])
                labels.push(category[0])
            })
            if (tallyOrLabels === "tally") {
                return tally
            } else if (tallyOrLabels === "labels") {
                return labels
            }
        }
    },
    onTimeData: {
        enumerable: true, 
        writable: false, 
        value: () => {
            const onTimeTasks = manageDB.tasks.filter(task => {
                const dueDate = task.Due
                const completedDate = task.Completed
                return dueDate >= completedDate
            })
            const lateTasks = manageDB.tasks.filter(task => {
                const dueDate = task.Due
                const completedDate = task.Completed
                return dueDate <= completedDate
            })
            const onTime = onTimeTasks.length
            const behindSchedule = lateTasks.length
            const onTimeChartData = []
            onTimeChartData.push(onTime)
            onTimeChartData.push(behindSchedule)
            return onTimeChartData
        }
    },
    categoryAverages: {
        enumerable: true, 
        writable: false, 
        value: () => {
            return categoriesDB.categories.map(category => {
                const tasksinCategory = manageDB.tasks.filter(task => task.Category === category)
                return tasksinCategory.reduce((a, b) => a + (b.Completed - b.Created), 0)/tasksinCategory.length
            })
        }
    }
})
