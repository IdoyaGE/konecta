import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();

// Configuración de bodyParser para procesar las solicitudes en formato JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Rutas

app.use("/api/users", userRoutes);

// Conexión a la base de datos
mongoose
  .connect("mongodb://localhost:27022/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
    // Iniciar el servidor una vez que se haya establecido la conexión a la base de datos
    app.listen(3000, () => {
      console.log("Servidor iniciado en el puerto 3000");
    });
  })
  .catch((error) =>
    console.log("Error al conectar a la base de datos:", error)
  );
