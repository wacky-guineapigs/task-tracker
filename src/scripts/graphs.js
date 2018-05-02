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
            currentColumns.push(manageDB.tasks.filter(task => task.currentStatus === "archive").length)
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
                if (completedDate > 0) {
                return dueDate >= completedDate
                } else {
                    return false
                }
            })
            const lateTasks = manageDB.tasks.filter(task => {
                const dueDate = task.Due
                const completedDate = task.Completed
                if (completedDate > 0) {
                    return dueDate <= completedDate
                } else {
                    return false
                }
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
                return tasksinCategory.reduce((a, b) => a + (b.Completed - b.Created), 0)/tasksinCategory.length/86400000 //converts milliseconds to days 1000*60*60*24
            })
        }
    }
})

const displayCharts = () => {
    var myChart = new Chart(document.getElementById("currentColumns"), {
        type: "bar",
        data: {
            labels: ["to do", "doing", "done", "archived"],
            datasets: [{
                label: "# of tasks",
                data: dataAnalysis.currentColumns(),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })
    var myChart = new Chart(document.getElementById("currentCategoryTotals"), {
        type: "bar",
        data: {
            labels: dataAnalysis.currentCategoryTotals("labels"),
            datasets: [{
                label: "# of tasks",
                data: dataAnalysis.currentCategoryTotals("tally"),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })

    var myChart = new Chart(document.getElementById("onTimeData"), {
        type: "doughnut",
        data: {
            labels: ["on time", "late"],
            datasets: [{
                label: "# of completed tasks",
                data: dataAnalysis.onTimeData(),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {}
    })

    var myChart = new Chart(document.getElementById("categoryAverages"), {
        type: "bar",
        data: {
            labels: dataAnalysis.currentCategoryTotals("labels"),
            datasets: [{
                label: "Average time to complete task in category",
                data: dataAnalysis.categoryAverages(),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })
}

module.exports = {dataAnalysis, displayCharts}