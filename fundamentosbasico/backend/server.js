const express = require("express");
const mysql = require("mysql2");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Para procesar JSON en las solicitudes

// Conexión a la base de datos
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "", // Si tienes contraseña, agrégala aquí
  database: "Facultad",
  port: 3309
});

db.connect(err => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL en el puerto 3309");
});

// Ruta para obtener alumnos
app.get("/alumnos", (req, res) => {
  db.query("SELECT * FROM alumno", (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result);
    }
  });
});

// Ruta para agregar un alumno
app.post("/alumnos", (req, res) => {
  const { idAlumno, NIF, nombre, apellido1, apellido2, email, direccion, codigoPostal, municipio, provincia, beca } = req.body;
  const query = "INSERT INTO alumno VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
  db.query(query, [idAlumno, NIF, nombre, apellido1, apellido2, email, direccion, codigoPostal, municipio, provincia, beca], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Alumno agregado con éxito" });
    }
  });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
