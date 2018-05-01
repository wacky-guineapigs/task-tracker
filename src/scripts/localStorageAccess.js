// // Save DB to local storage:
// const saveTasksDB = (databaseObject, localStorageKey) => {
//   // turn DB into JSON string
//   const stringifiedDatabase = JSON.stringify(databaseObject)
//   // set to local storage
//   localStorage.setItem(localStorageKey, stringifiedDatabase)
// }

// // Function to retrieve data from local storage
// // Call using retrieveTasksDB(dbName) where dbName is the name of the string in local storage
// // String in local storage for tasks is "tasksDB"
// const retrieveTasksDB = (dbName) => {
//   // Check to see if DB exists:
//   let databaseParse = []
//   if (localStorage.getItem(dbName)) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(dbName)
//     // Use JSON.parse() to convert the string back into an object
//     databaseParse = JSON.parse(databaseString)
//   } 
//   return databaseParse
// }

// module.exports = 