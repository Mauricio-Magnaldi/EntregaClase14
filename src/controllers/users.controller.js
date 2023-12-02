import { 
    findAll, 
    findById, 
    createOne 
} from "../services/users.service.js"

export const findUsers = (request, response) => {
    const users = findAll()
    if(!users.length){
        return response.status(400).json({mensaje: "Sin usuarios encontrados."})
    }
    response.status(200).json({mensaje: "Los usuarios encontrados.",users: users})
}

export const findUserById = (request, response) => {
    const {idUser} = request.params
    const user = findById(+idUser)
    if(!user) {
        return response
            .status(404)
            .json({mensaje: "Usuario no encontrado con el id.", idUser})
    }
    response.status(200).json({mensaje: "Usuario encontrado.", user})
}

export const createUser = (request, response) => {
        const { first_name, last_name, email, password } = request.body
        if (!first_name || !last_name || !email || !password) {
            return response.status(404).json({mensaje: "Todos los datos son obligatorios."})   
        }
        const createdUser = createOne(request.body)
        response.status(200).json({mensaje: "Usuario creado.", user: createdUser})
    }