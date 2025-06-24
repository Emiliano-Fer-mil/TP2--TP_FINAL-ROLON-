// src/controller/producto.controller.js

import productService from "../service/product.service.js";

class productController {
    constructor() { this.service = new productService() }

    getProductos = async (req, res) => {
        const allProductos = await this.service.getProductos()
        if (allProductos) {
            res.status(200).send(allProductos)
        } else {
            res.status(204).send("no content")
        }
    }

    createProducto = async (req, res) => {
        const producto = req.body
        try {
            const postedProducto = await this.service.createProducto(producto)
            res.status(201).send(postedProducto)
        } catch (error) {


            if (error.codigo === 400 && error.detalles) {
                console.error(error.detalles)
                res.status(400).json({
                    mensaje: error.mensaje || "error de validación",
                    errores: error.detalles
                })
            } else {
                console.error("Error interno:", error)
                res.status(500).json({
                    mensaje: "Error interno del servidor",
                    detalle: process.env.NODE_ENV === "development" ? error.message : undefined})
            }
        }
    }
}
export default productController