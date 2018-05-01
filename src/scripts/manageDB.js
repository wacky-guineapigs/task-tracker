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
                },
                currentStatus: {
                    enumerable: true, 
                    writable: true, 
                    value: "todo"
                }
            })
            manageDB.tasks.push(newTask)
        }
    },
    saveTasks: {
      value: (databaseObject, localStorageKey) => {
        // turn DB into JSON string
        const stringifiedDatabase = JSON.stringify(databaseObject)
        // set to local storage
        localStorage.setItem(localStorageKey, stringifiedDatabase)
      },
      retrieveTasks: {
        value: (dbName) => {
          // Check to see if DB exists:
          let databaseParse = []
          if (localStorage.getItem(dbName)) {
            // Get the string version of the database
            const databaseString = localStorage.getItem(dbName)
            // Use JSON.parse() to convert the string back into an object
            databaseParse = JSON.parse(databaseString)
          } 
          return databaseParse
        }
      }
    }
})

manageDB.saveTasks(manageDB.tasks, "tasks")

module.exports = manageDB