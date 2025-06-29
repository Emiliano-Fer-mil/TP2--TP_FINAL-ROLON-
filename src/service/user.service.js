import validation from "../util/validateProducto.js";
import { sendMail } from "../util/mailService.js";
import factoryModel from "../model/factory.user.model.js";
import authMiddleware from "../middlewares/auth.js";
import bcrypt from "bcrypt";


class UsersService {
    constructor() {
    this.model = factoryModel.get(process.env.PERSISTENCIA);
  }
  
  loginUser = async (nombre, password) => {
  const user = await this.model.getUserByNombre(nombre);
  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.codigo = 401;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("Contraseña incorrecta");
    error.codigo = 401;
    throw error;
  }

  const token = await authMiddleware.generateToken(user);

  try {
    await sendMail({
      to: user.email,
      subject: 'Inicio de sesión exitoso',
      text: `Hola ${user.nombre}, se inició sesión en tu cuenta.`,
    });
  } catch (error) {
    console.error("Error al enviar correo de login:", error);
  }

  return { user, token };
};
  
  createUsuario = async (usuario) => {
  const { error } = validation.validateUser.validate(usuario, { abortEarly: false });

  if (error) {
    const err = new Error("error de validación");
    err.codigo = 400;
    err.detalles = error.details.map((e) => ({
      campo: e.path[0],
      mensaje: e.message,
    }));
    throw err;
  }

  const hashedPassword = await bcrypt.hash(usuario.password, 10);
  usuario.password = hashedPassword;

  const postUsers = await this.model.postUsers(usuario);
   
  try {
    await sendMail({
      to: usuario.email,
      subject: 'Bienvenido a TP2',
      text: `Hola ${usuario.nombre}, ¡tu cuenta fue creada con éxito!`
    });
  } catch (error) {
    console.error("Error al enviar correo de bienvenida:", error);
   
  }
  return postUsers;
};

  getUsers = async () => {
        const users = await this.model.getUsers();
        return users;
    }


   
    putUsers = async (id, data) => {
       
        const update = await this.model.putUsers(id, data);
        return update;
    }
    patchUsers = async (id, data) => {
       
        const update = await this.model.patchUsers(id, data);
        return update;
    }
    deleteUsers = async (id) => {
        const userDelete = await this.model.deleteUsers(id);
        return userDelete;
    }
    getUserByNombre = async (nombre) => {
        const user = await this.model.getUserByNombre(nombre);
        return user;
    }
    


    

}

export default UsersService