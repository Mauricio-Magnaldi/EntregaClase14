import { 
    findAll, 
    findById, 
    createOne 
} from "../services/toys.service.js"

export const findToys = (request, response) => {
    const toys = findAll()
    if(!toys.length){
        return response.status(400).json({mensaje: "Sin juguetes encontrados."})
    }
    response.status(200).json({mensaje: "Juguetes encontrados.", toys: toys})
}

export const findToyById = (request, response) => {
    const {idToy} = request.params
    const toy = findById(+idToy)
    if(!toy) {
        return response
        .status(404)
        .json({mensaje: "Juguete no encontrado con el id.", idToy})
    }
    response.status(200).json({mensaje: "Juguete encontrado.", toy})
}

//name, price, stock

export const createToy = (request, response) => {
    const {name, price, stock} = request.body
    if(!name || !price || !stock) {
        return response.status(404).json({mensaje: "Todos los datos son obligatorios."})
    }
    const createdToy = createOne(request.body)
    response.status(200).json({mensaje: "Juguete creado.", toy: createdToy})  

}