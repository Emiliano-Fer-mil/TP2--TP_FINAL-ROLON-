// src/service/product.service.js
import factoryModel from "../model/factory.model.js";
import validateProducto from "../util/validateProducto.js";

class productService {
  constructor() {
    this.model = factoryModel.get(process.env.PERSISTENCIA);
  }

  getProductos = async () => {
    const allProductos = await this.model.getProductos();
    return allProductos;
  };

  createProducto = async (producto) => {
  const { error } = validateProducto.validate(producto, { abortEarly: false });

  if (error) {
    const err = new Error("error de validación");
    err.codigo = 400;
    err.detalles = error.details.map((e) => ({
      campo: e.path[0],
      mensaje: e.message
    }));
    throw err;
  }

  const postProducto = await this.model.postProductos(producto);
  return postProducto;
};
}

export default productService;
