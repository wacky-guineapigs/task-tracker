const manageDB = Object.create({}, {
    tasks: {
        enumerable: true, 
        writable: true, 
        value: []
    },
    saveNewTask: {
        enumerable: true, 
        writable: false, 
        value: (title, description, category, due) => {
            const newTask = Object.create(null, {
                Title: {
                    enumerable: true, 
                    writable: true, 
                    value: title
                },
                Description:{
                    enumerable: true, 
                    writable: true, 
                    value: description
                },
                Category:{
                    enumerable: true, 
                    writable: true, 
                    value: category
                }, 
                Archived:{
                    enumerable: true, 
                    writable: true, 
                    value: false
                },
                Created: {
                    enumerable: true, 
                    writable: true, 
                    value: new Date()
                }, 
                Completed: {
                    enumerable: true, 
                    writable: true, 
                    value: ""
                }, 
                Due: {
                    enumerable: true, 
                    writable: true, 
                    value: due
                }
            })
            manageDB.tasks.push(newTask)
        }
    }
})

module.exports = manageDB