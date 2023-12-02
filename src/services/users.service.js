import { usersManager } from "../persistencia/usersManager.js"
import { hashData } from "../utils.js"

export const findAll = () => {
    const users = usersManager.findAll()
    return users
}

export const findById = (id) => {
    const user = usersManager.findById(id)
    return user
}

export const createOne = (object) => {
    const hashPassword = hashData(object.password)
    const userCreated = usersManager.createOne({ 
        ...object, 
        password: hashPassword 
    })
    const response = {
            Bienvenida: `Bienvenido ${userCreated.first_name} ${userCreated.last_name}.`,
            email: userCreated.email,
            password: userCreated.password,
        }
    return response
}