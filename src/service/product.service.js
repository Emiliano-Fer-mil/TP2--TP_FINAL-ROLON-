// src/service/product.service.js
import productoModelFs from "../model/DAO/producto.model.fs.js"
import factoryModel from "../model/factory.model.js"
import validateProducto from "../util/validateProducto.js"

class productService {

    constructor() {
        this.model = factoryModel.get("fs")
    }

    getProductos = async () => {
        const allProductos = await this.model.getProductos()
        return allProductos
    }

    createProducto = async (producto) => {
        const { error, value } = validateProducto(producto)

        if (error) {
            const detalles = error.details.map(e => ({
                campo: e.context.key,
                mensaje: e.message
            }))
            const err = new Error('Datos inválidos')
            err.codigo = 400
            err.detalles = detalles
            throw err
        }       
        return await this.model.saveProducto(value)
    }

}

export default productService