
import Joi from "joi";

const validateProducto = Joi.object({
  nombre: Joi.string().required(),
  descuento: Joi.number().min(0).max(1).precision(2).optional(),
  presentacion: Joi.string().required(),
  concentracion: Joi.string().required(),
  precio: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  laboratorio: Joi.string().required(),
  fecha_vencimiento: Joi.date().iso().required(),
  necesita_receta: Joi.boolean().required(),
  imagen: Joi.string().uri().required(),
  descripcion: Joi.string().required(),
  contraindicaciones: Joi.string().required()
});

const validateUser = Joi.object({
  nombre: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});


export default {validateProducto , validateUser};
