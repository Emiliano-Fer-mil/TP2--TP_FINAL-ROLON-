import { MongoClient } from "mongodb";

let uri = "mongodb+srv://grupotp2:a1b2c3@cluster0.eocfaem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

class MongoConnection {

    static client = new MongoClient(uri)
    
    static db = this.client.db("tp2")

    static connection = async () => {
        await this.client.connect()
    }
}

export default MongoConnection