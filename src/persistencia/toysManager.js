class ToysManager {

    constructor() {
        this.toys = []
    }

    findAll() {
        return this.toys
    }

    findById(id) {
        const toy = this.toys.find((t) => t.id === id)
        return toy
    }

    createOne (object) {
        const id = 
            this.toys.length 
            ? this.toys[this.toys.length - 1].id + 1 
            : 1
        const newObject = { id, ...object }
        this.toys.push(newObject)
        return newObject
    }
}

export const toysManager = new ToysManager()
