import UsersService from "../service/user.service.js"
import authMiddleware from "../middlewares/auth.js"
import bcrypt from "bcrypt"

class UsersController {
    constructor() {
        this.service = new UsersService()
    }
    
loginUser = async (req, res) => {
  const { nombre, password } = req.body;

  try {
    const { user, token } = await this.service.loginUser(nombre, password);
    res.cookie("token", token);
    res.json({ message: "Inicio de sesión exitoso", user });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(error.codigo || 500).json({ message: error.message || "Error interno del servidor" });
  }
};



   createUsuario = async (req, res) => {
        const usuario = req.body
        try {
            const postedUsuario = await this.service.createUsuario(usuario)
            res.status(201).send(postedUsuario)
           
        } catch (error) {


            if (error.codigo === 400 && error.detalles) {
                console.error(error.detalles)
                res.status(400).json({
                    mensaje: error.mensaje || "error de validación",
                    errores: error.detalles
                })
            } else {
                console.error("Error interno:", error)
                res.status(500).json({
                    mensaje: "Error interno del servidor",
                    detalle: process.env.NODE_ENV === "development" ? error.message : undefined})
            }
        }
    }

     getUsers = async (req, res) => {
        const allusers = await this.service.getUsers()
        res.send(allusers)
    }

    putUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const putUsers = await this.service.putUsers(id, data)
        res.send(putUsers)
    }

    patchUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const patchUsers = await this.service.patchUsers(id, data)
        res.send(patchUsers)
    }

    deleteUsers = async (req, res) => {
        const { id } = req.params
        const deleteUsers = await this.service.deleteUsers(id)
        res.send(deleteUsers)
    }

}

export default UsersController