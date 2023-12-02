class UsersManager {

    constructor() {
        this.users = []
    }

    findAll() {
        return this.users
    }

    findById(id) {
        const user = this.users.find((u) => u.id === id)
        return user
    }

    createOne (object) {
        const id = 
            this.users.length 
            ? this.users[this.users.length - 1].id + 1 
            : 1
        const newObject = { id, ...object }
        this.users.push(newObject)
        return newObject
    }
}

export const usersManager = new UsersManager()
