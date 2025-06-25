// src/route/producto.router.js

import express from 'express'
import productController from "../controller/producto.controller.js"
import { Router } from 'express'

class productoRouter{
    
    constructor(){
        this.controller = new productController()
        this.router = express.Router()
    }
    start () {
        this.router.get("/", this.controller.getProductos)
        this.router.post("/", this.controller.createProducto)
        return this.router
    }
    
}
export default productoRouter

