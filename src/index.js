import express from 'express'
import productoRouter from './route/producto.router.js'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'


const app = express()
const swaggerDocument = YAML.load("./openapi.yaml");
const PORT = 8080
app.use (express.json())
app.use ("/productos", new productoRouter().start())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use ((req,res) => {
    res.status(404).json({
        code: 400,
        message: 'recurso no'
    })
})



app.listen(PORT, ()=> console.log (`Server running at http://localhost:${PORT}`))