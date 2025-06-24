import express from 'express'
import productoRouter from './route/producto.router.js'


const app = express()
const PORT = 8080
app.use (express.json())
app.use ("/productos", new productoRouter().start())


app.listen(PORT, ()=> console.log (`Server running at http://localhost:${PORT}`))