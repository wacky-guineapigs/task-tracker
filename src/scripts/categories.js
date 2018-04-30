const categoriesDB = Object.create({}, {
    categories: {
        enumerable: true, 
        writable: true, 
        value: []
    },
    saveNewCategory: {
        enumerable: true, 
        writable: false, 
        value: (name) => {
            const newCategory = name
            categoriesDB.categories.push(newCategory)
        }
    }
})

module.exports = categoriesDB