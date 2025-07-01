import express from 'express'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'
import productoRouter from "./routes/producto.router.js"
import userRoutes from "./routes/user.router.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const swaggerDocument = YAML.load("./openapi.yaml");
const PORT = 8080
app.use (express.json())
app.use ("/productos", new productoRouter().start())
app.use("/api-documentacion", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use ("/usuarios", new userRoutes().start())



app.use ((req,res) => {
    res.status(404).json({
        code: 400,
        message: 'recurso no'
    })
})



app.listen(PORT, ()=> console.log (`Server running at http://localhost:${PORT}`))