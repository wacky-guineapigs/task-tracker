// const DragDropManager = Object.create(null, {
//   init: {
//     value: () => {
//       const cards = document.querySelectorAll(".card")
//       cards.forEach(card => {
//         card.ondragstart = eventData => {
//           // console.log(eventData)
//           // eventData is an object containing information about the object being dragged, and is created upon start of drag
//           // dataTransfer is a holding area for data about the event
//           eventData.dataTransfer.setData("sourceclasslist", event.target.classList)
//         }
//       })

//       const targets = document.querySelectorAll(".column")
//       targets.forEach(target => {
//         // variable eventData is an object containing info about the ondragover event
//         target.ondragover = eventData => eventData.preventDefault()
//         target.ondrop = eventData => {
//           eventData.preventDefault()
//           // Pull from holding area info about the dragged item's class
//           const data = eventData.dataTransfer.getData("sourceclasslist")
//           if (target.getAttribute("id") !== "todo" && target.className !== "card") {
//           eventData.target.appendChild(document.querySelector(`.${data}`))
//           }
//         }
//       })
//     }
//   }
// })

const manageDB = require("./manageDB")

const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const doingColumn = document.querySelector("#doing")
      doingColumn.ondragover = eventData => eventData.preventDefault()
      doingColumn.ondrop = eventData => {
        eventData.preventDefault()
        const data = eventData.dataTransfer.getData("sourceId")
        const draggedTask = manageDB.tasks.find(task => task.Created === data)
        draggedTask.currentStatus = "doing"
        doingColumn.appendChild(document.querySelector(`#${data}`))
      }
        
      const doneColumn = document.querySelector("#done")
      doneColumn.ondragover = eventData => eventData.preventDefault()
      doneColumn.ondrop = eventData => {
        eventData.preventDefault()
        const data = eventData.dataTransfer.getData("sourceId")
        const draggedTask = manageDB.tasks.find(task => task.Created === data)
        draggedTask.currentStatus = "done"
        draggedTask.Completed = Date.parse(new Date())
        doneColumn.appendChild(document.querySelector(`#${data}`))
      }
    }
  }
})

module.exports = DragDropManager