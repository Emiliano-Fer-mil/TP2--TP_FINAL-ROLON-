# 🧪 Farma24 Backend

# Farma24 - Backend

Este es el backend del proyecto **Farma24**, desarrollado como ejercicio académico. Incluye la lógica de negocio, conexión con base de datos, documentación de la API y pruebas con Postman.

---

## 🚀 Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio y abrir en VS Code

```bash
git clone https://github.com/Emiliano-Fer-mil/TP2--TP_FINAL-ROLON-.git
cd repositorio
code .
2. Instalar dependencias
En la terminal de VS Code, ejecutar:

npm install

3. Crear archivo .env (obligatorio)
Este archivo debe crearse manualmente en la raíz del proyecto. Contiene variables de entorno necesarias para que el sistema funcione.

👉 Ejemplo de contenido para .env:

⚠️ Este archivo es obligatorio. No está incluido en el repositorio por seguridad (está en .gitignore), pero debe ser creado antes de ejecutar el servidor.

4. Ejecutar el servidor
Una vez creado el .env y completadas las instalaciones, podés iniciar el servidor con:

npm start
📚 Documentación de la API
Está disponible en la siguiente ruta una vez iniciado el servidor:

http://localhost:8080/api-docs
La documentación está generada con Swagger y describe todos los endpoints disponibles.

🧪 Pruebas automáticas
Para correr los tests de funcionamiento:

npm run test

🔍 Colección de pruebas (Postman / Thunder Client)
El archivo de colección se encuentra en la raíz del proyecto:

thunder-collection_postman_farma24.json
Podés importarlo en Postman o Thunder Client para probar todos los endpoints del backend.

✅ Requisitos previos
Node.js instalado

Cuenta y base de datos activa en MongoDB Atlas (o Mongo local)

Configuración del archivo .env

Conexión a Internet para instalación de dependencias

📝 Notas
Este proyecto es de uso académico.

No está optimizado para entornos productivos sin revisión de seguridad.

El backend y el frontend se desarrollan en repositorios separados.