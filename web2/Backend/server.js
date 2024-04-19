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

app.post("/login",
    (req, resp)=>{
        db.query("SELECT * FROM usuarios WHERE Usuario=? AND Contraseña=?",
        [req.body.username, req.body.password],
        (err, data)=>{
            if(err){
                resp.send(err);
            }else{
                if(data.length > 0){
                    console.log("El usuario", req.body.username, "ha iniciado sesión")
                    resp.json({
                        "id": data[0].ID_Usuario,
                        "username": data[0].Usuario,
                        "alert": 'Success'
                    })
                }
                else{
                    resp.json("'Las credenciales no son correctas, favor de intentar de nuevo'");
                    console.log("El usuario ha fallado" ,req.body.username , "en el inicio de sesión")
                }
            }
        })
})

app.post("/register", (req, resp) => {
    const nombre = req.body.nombre;
    const apellidoP = req.body.apellidoP;
    const fechaNacimiento = req.body.fechaNacimiento;
    const genero = req.body.genero;
    const correo = req.body.correo;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;

    // Verifica la longitud de la contraseña
    if (contraseña.length < 6) {
        resp.status(400).send("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (!/[A-Z]/.test(contraseña) || !/\d/.test(contraseña)) {
        resp.status(400).send("La contraseña debe contener al menos una mayúscula y un número.");
        return;
    }

    // Verifica la longitud del nombre de usuario
    if (usuario.length < 3) {
        resp.status(400).send("El nombre de usuario debe tener al menos 3 caracteres.");
        return;
    }

    // Llama al procedimiento almacenado sp_AltaUsuario
    db.query('CALL sp_AltaUsuario(?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidoP, fechaNacimiento, genero, correo, usuario, contraseña],
        (err, data) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_SIGNAL_EXCEPTION') {
                    // Si el error es una excepción de señal, significa que el usuario ya existe
                    if (err.sqlMessage.includes('correo')) {
                        resp.status(400).send("El correo electrónico ya existe.");
                    } else if (err.sqlMessage.includes('contraseña')) {
                        resp.status(400).send("La contraseña debe tener al menos 6 caracteres.");
                    } else {
                        resp.status(400).send("El usuario ya existe.");
                    }
                } else {
                    // Si no, es un error genérico
                    resp.status(500).send("Error al registrar el usuario.");
                }
            } else {
                db.query("SELECT * FROM usuarios WHERE Usuario=? AND Contraseña=?",
                [usuario, contraseña],
                (err, data)=>{
                    if(err){
                        resp.send(err);
                    }else{
                        if(data.length > 0){
                            console.log("Usuario registrado con éxito.")
                            resp.json({
                                "id": data[0].ID_Usuario,
                                "username": data[0].Usuario,
                                "alert": 'Success'
                            })
                        }
                        else{
                            resp.json("'Las credenciales no son correctas, favor de intentar de nuevo'");
                            console.log("El usuario ha fallado en el inicio de sesión")
                        }
                    }
                })
            }
        });
})

app.post("/createreview", (req, resp) => {
    const user = req.body.usuario;
    const juego = req.body.game;
    const resen = req.body.reseña;
    const cali = req.body.calif;
    const fecha = req.body.fecha;

    db.query('INSERT INTO review (ID_Juego, ID_Usuario, Fecha_Reseña, Valor_Calificacion, Reseña) VALUES (?,?,?,?,?)',
        [juego, user, fecha, cali, resen],
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                resp.send("Registrado con éxito");
            }
        });
});






