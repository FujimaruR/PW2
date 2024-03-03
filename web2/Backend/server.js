const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Escuchando en el puerto 3001");
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ProyectoWebDB"
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos establecida con el número ' + db.threadId);
});


