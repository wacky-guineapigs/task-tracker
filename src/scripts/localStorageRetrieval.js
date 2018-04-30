// Function to retrieve data from local storage
// Call using retrieveTasksDB(dbName) where dbName is the name of the string in local storage
// String in local storage for tasks is "tasksDB"

const retrieveTasksDB = (dbName) => {
  // Get the string version of the database
  const databaseString = localStorage.getItem(dbName)

  // Use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString)
}