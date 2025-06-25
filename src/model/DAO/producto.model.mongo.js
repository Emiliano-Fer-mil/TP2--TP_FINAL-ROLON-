import MongoConnection from "../mongoConnection.js"



class UsersModelMongo {
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

}
export default UsersModelMongo