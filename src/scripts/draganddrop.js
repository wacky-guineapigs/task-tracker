const manageDB = require("./manageDB")

const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const doingColumn = document.querySelector("#doing")
      doingColumn.ondragover = eventData => eventData.preventDefault()
      doingColumn.ondrop = eventData => {
        eventData.preventDefault()
        const data = eventData.dataTransfer.getData("sourceId")
        const draggedTask = manageDB.tasks.find(task => task.Created === parseInt(data))
        draggedTask.currentStatus = "doing"
        manageDB.saveTasks(manageDB.tasks, "tasks")
        doingColumn.appendChild(document.getElementById(`${data}`))
      };
      
      const doneColumn = document.querySelector("#done")
      doneColumn.ondragover = eventData => eventData.preventDefault()
      doneColumn.ondrop = eventData => {
        eventData.preventDefault()
        const data = eventData.dataTransfer.getData("sourceId")
        const draggedTask = manageDB.tasks.find(task => task.Created === parseInt(data))
        draggedTask.currentStatus = "done"
        draggedTask.Completed = Date.parse(new Date())
        manageDB.saveTasks(manageDB.tasks, "tasks")
        doneColumn.appendChild(document.getElementById(`${data}`))
      }
    }
  }
})

module.exports = DragDropManager