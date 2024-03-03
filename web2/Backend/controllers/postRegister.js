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
    database: "ejemploreact"
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos establecida con el ID ' + db.threadId);
});

app.post("/registrar", (req, resp) => {
    const name = req.body.usuario;
    const correo = req.body.correo;
    const passw = req.body.contra;

    db.query('INSERT INTO usuario (nameUser, emailUser, passUser) VALUES (?,?,?)',
        [name, correo, passw],
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                resp.send("Registrado con éxito");
            }
        });
});

app.get("/getUsers", (req, resp) => {
    db.query('SELECT * FROM usuario',
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                if (result.length > 0) {
                    resp.json(result);
                } else {
                    resp.json('No users');
                }
            }
        });
});

app.delete("/delete/:userEliminar", (req, resp) => {
    const usuarioD = req.params.userEliminar;

    db.query('DELETE FROM usuario WHERE nameUser=?',
        req.params.userEliminar, //usuarioD
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Usuario eliminado");
            }
        });
});

app.post("/login", (req, resp) => {
    db.query("SELECT * FROM usuario WHERE nameUser=? AND passUser=?",
        [req.body.usuario, req.body.contra],
        (err, data) => {
            if (err) {
                resp.send(err);
            } else {
                if (data.length > 0) {
                    resp.json({
                        "user": data[0].nameUser,
                        "alert": 'Success'
                    });
                } else {
                    resp.json("'Usuario no existe'");
                }
            }
        });
});
