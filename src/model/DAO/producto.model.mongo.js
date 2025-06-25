// src/model/DAO/producto.model.mongo.js

import mongoConnection from "../mongo.connection.js"
//Esto me sirve para trabajar con el objeto de id de MongoDB
import { ObjectId } from "mongodb"

class productoModelMongo {
    constructor (){
        this.db = mongoConnection.db
    }
     getProductos = async () => {
    
            const allProductos = await this.db.collection("productos").find({}).toArray()
            return allProductos
    
        }
}
export default productoModelMongo