// src/util/validateProducto.js

import Joi from 'joi'

const productoSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(6).required(),
    oferta: Joi.string().optional(),
    presentacion: Joi.string().required(),
    concentracion: Joi.string().required(),
    precio: Joi.number().positive().required(),
    laboratorio: Joi.string().optional(),
    fecha_vencimiento: Joi.date().iso().optional(),
    necesita_receta: Joi.boolean().optional(),
    imagen: Joi.string().uri().optional(),
    descripcion: Joi.string().optional(),
    contraindicaciones: Joi.string().optional()
}).strict()

const validateProducto = (producto) =>{
    return productoSchema.validate(producto, {abortEarly: false})
}

export default validateProducto