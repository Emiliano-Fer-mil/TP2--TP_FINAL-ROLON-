import MongoConnection from "../mongoConnection.js"
import { ObjectId } from "mongodb"



class ProductoModelMongo {
    constructor() {
        this.db = MongoConnection.db
    }

    getProductos = async () => {
        const productos = await this.db.collection("productos").find({}).toArray()
        return productos
    }
    
    postProductos = async (productos) => {
        const newProducto = await this.db.collection("productos").insertOne(productos)
        return newProducto
    }

     putProducto= async (id, data) => {
       
        const update = await this.db.collection("productos").replaceOne(
            {_id: ObjectId.createFromHexString(id)}, data
        )
        return update
    }
 
    patchProducto = async (id, data) => {
        const update = await this.db.collection("productos").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
        return update
    }

    deleteProducto = async (id) => {
        const productoDelete = await this.db.collection("productos").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return productoDelete
    }

}
    


export default ProductoModelMongo