const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const columns = document.querySelectorAll(".column")
      columns.forEach(column => {
        column.ondragstart = eventData => {
          // eventData is an object containing information about the object being dragged, and is created upon start of drag
          // dataTransfer is a holding area for data about the event
          eventData.dataTransfer.setData("sourceclasslist", event.target.classList)
        }
      })

      const targets = document.querySelectorAll(".column")
      targets.forEach(target => {
        // variable eventData is an object containing info about the ondragover event
        target.ondragover = eventData => e.preventDefault()
        target.ondrop = eventData => 
      })
    }
  }
})