import { MongoClient } from "mongodb";




class MongoConnection { 

  
static client = new MongoClient("mongodb+srv://admin:admin@cluster0.q9iunsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
static db = this.client.db("tp2tpfinal");

static connection = async () => {
   await this.client.connect();
  }

}
export default MongoConnection;