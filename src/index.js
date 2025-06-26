import express from 'express'
import productoRouter from "./routes/producto.router.js"
import userRoutes from "./routes/user.router.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 8080
app.use (express.json())
app.use ("/productos", new productoRouter().start())
app.use ("/usuarios", new userRoutes().start())



app.listen(PORT, ()=> console.log (`Server running at http://localhost:${PORT}`))