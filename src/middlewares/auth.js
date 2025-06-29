import jwt from "jsonwebtoken";

const SECRETKEY = process.env.JWT_SECRET || "clave";

const generateToken = async (data) => {
  const payload = { nombre: data.nombre };
  return jwt.sign(payload, SECRETKEY, { expiresIn: "5m" });
};

const verifyToken = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization?.split(" ")[1];
    const cookieToken = req.cookies?.token;
    const token = bearerToken || cookieToken;

    if (!token) {
      return res.status(403).json({ message: "Token requerido" });
    }

    const decoded = jwt.verify(token, SECRETKEY);
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Error verificando token:", error.message);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

export default {
  generateToken,
  verifyToken,
};
