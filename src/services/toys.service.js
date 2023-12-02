import { toysManager } from "../persistencia/toysManager.js"

export const findAll = () => {
    const toys = toysManager.findAll()
    return toys
}

export const findById = (id) => {
    const toy = toysManager.findById(id)
    return toy
}

export const createOne = (object) => {
    const createdToy = toysManager.createOne(object)
    return createdToy
}

