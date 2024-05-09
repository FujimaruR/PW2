const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS antes de cualquier otra middleware
app.use(cors());

// Configurar el límite de carga para JSON y URL codificado
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.listen(3001, () => {
    console.log("Escuchando en el puerto 3001");
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectowebdb"
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos establecida con el número ' + db.threadId);
});

app.post("/login",
    (req, resp) => {
        db.query("SELECT * FROM usuarios WHERE Usuario=? AND Contraseña=?",
            [req.body.username, req.body.password],
            (err, data) => {
                if (err) {
                    resp.send(err);
                } else {
                    if (data.length > 0) {
                        console.log("El usuario", req.body.username, "ha iniciado sesión")
                        console.log(data[0].ID_Rol);
                        resp.json({
                            "username": data[0].Usuario,
                            "id": data[0].ID_Usuario,
                            "rol": data[0].ID_Rol,
                            "alert": 'Success'
                        })
                    }
                    else {
                        resp.json("'Las credenciales no son correctas, favor de intentar de nuevo'");
                        console.log("El usuario ha fallado", req.body.username, "en el inicio de sesión")
                    }
                }
            })
    })

app.get("/categorias", (req, resp) => {
    db.query("SELECT * FROM categorias", (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener las categorías" });
        } else {
            resp.json(data);
        }
    });
});

app.get("/busqueda", (req, resp) => {
    const juegoParam = req.query.juego;

    // Obtiene los datos de la base de datos, incluyendo la imagen como Buffer
    db.query("SELECT * FROM juegos WHERE titulo LIKE ?", [`%${juegoParam}%`], (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener los juegos" });
        } else {
            // Convierte el Buffer de la imagen a una cadena base64
            const juegosConImagenBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(juegosConImagenBase64);
        }
    });

});

app.get("/perfilUsuario", (req, resp) => {
    const idPerfil = req.query.id;

    // Log para verificar el valor de idPerfil
    console.log("ID de perfil recibido:", idPerfil);

    // Obtiene los datos de la base de datos, incluyendo la imagen como Buffer
    db.query("SELECT * FROM usuarios WHERE ID_Usuario = ? ", [idPerfil], (err, data) => {
        if (err) {
            console.error("Error al obtener el perfil del usuario:", err);
            resp.status(500).json({ error: "Error al obtener el perfil del usuario" });
        } else {
            // Log para verificar los datos obtenidos de la base de datos
            console.log("Datos de perfil obtenidos:", data);
            const usuarioBase64 = data.map(usuario => ({
                ...usuario,
                img: usuario.img.toString('base64')
            }));
            resp.json(usuarioBase64);
        }
    });
});


app.get("/EditJuego", (req, resp) => {
    const id = req.query.id;

    // Log para verificar el valor de idPerfil
    console.log("ID de juego recibido:", id);

    // Obtiene los datos de la base de datos, incluyendo la imagen como Buffer
    db.query("SELECT * FROM juegos WHERE ID_Juego = ? ", [id], (err, data) => {
        if (err) {
            console.error("Error al obtener el perfil del usuario:", err);
            resp.status(500).json({ error: "Error al obtener el perfil del usuario" });
        } else {
            // Log para verificar los datos obtenidos de la base de datos
            console.log("Datos de juego obtenidos:", data);
            const usuarioBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(usuarioBase64);
        }
    });
});


app.get("/publishers", (req, resp) => {
    db.query("SELECT * FROM publisher", (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener los publishers" });
        } else {
            resp.json(data);
        }
    });
});

app.get("/landingGames", (req, resp) => {
    db.query("SELECT * FROM vista_juegos_reviews_likes", (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener los juegos" });
        } else {
            const juegosConImagenBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(juegosConImagenBase64);
        }
    });
});

app.get("/landingGamesLikes", (req, resp) => {
    db.query("SELECT * FROM vista_juegos_reviews_likes WHERE Cantidad_Likes > 0 ORDER BY Cantidad_Likes DESC", (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener los juegos" });
        } else {
            const juegosConImagenBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(juegosConImagenBase64);
        }
    });
});

app.get("/landingGamesCalif", (req, resp) => {
    db.query("SELECT * FROM vista_juegos_reviews_likes WHERE Valor_Calificacion > 0 ORDER BY Valor_Calificacion DESC", (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener los juegos" });
        } else {
            const juegosConImagenBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            
            console.log('Juego encontrado:' + juegosConImagenBase64);
            resp.json(juegosConImagenBase64);
        }
    });
});

app.get("/obtenerResenaUsuarioRe", (req, resp) => {
    const idPr = req.query.id;
    db.query("SELECT * FROM vista_reviewsusuario WHERE ID_Usuario = ? ORDER BY Fecha_Reseña DESC LIMIT 1", [idPr], (err, data) => {
        if (err) {
            resp.status(500).json({ error: "Error al obtener la reseña" });
        } else {
            const juegosConImagenBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(juegosConImagenBase64);
        }
    });
});


app.get("/ShowJuegoR", (req, resp) => {
    const id = req.query.id;

    // Log para verificar el valor de idPerfil
    console.log("ID de juego recibido:", id);

    // Obtiene los datos de la base de datos, incluyendo la imagen como Buffer
    db.query("SELECT * FROM juegos WHERE ID_Juego = ? ", [id], (err, data) => {
        if (err) {
            console.error("Error al obtener el perfil del juego:", err);
            resp.status(500).json({ error: "Error al obtener el perfil del juego" });
        } else {
            // Log para verificar los datos obtenidos de la base de datos
            console.log("Datos de juego obtenidos:", data);
            const usuarioBase64 = data.map(juego => ({
                ...juego,
                Imagen: juego.Imagen.toString('base64')
            }));
            resp.json(usuarioBase64);
        }
    });
});


app.post("/register", (req, resp) => {
    const nombre = req.body.nombre;
    const apellidoP = req.body.apellidoP;
    const fechaNacimiento = req.body.fechaNacimiento;
    const genero = req.body.genero;
    const correo = req.body.correo;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    const imagenPerfil = req.body.imagenPerfil;


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


app.post("/editarUsuario", (req, resp) => {
    const nombre = req.body.Nombre;
    const apellidoP = req.body.Apellido_P;
    const fechaNacimiento = req.body.Fecha_Nacimiento;
    const genero = req.body.Genero;
    const correo = req.body.Correo_Electronico;
    const usuario = req.body.Usuario;
    const contraseña = req.body.Contraseña;
    const imagenPerfil = req.body.img;
    const id = req.body.ID_Usuario;


    console.log(imagenPerfil);



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
    db.query('CALL sp_EditarUsuario(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id, nombre, apellidoP, fechaNacimiento, genero, correo, usuario, contraseña, imagenPerfil],
        (err, data) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_SIGNAL_EXCEPTION') {
                    // Si el error es una excepción de señal, significa que el usuario ya existe
                    if (err.sqlMessage.includes('correo')) {
                        resp.status(400).send("El correo electrónico ya existe.");
                    } else {
                        resp.status(400).send("El usuario ya existe.");
                    }
                } else {
                    // Si no, es un error genérico
                    resp.status(500).send("Error al registrar el usuario.");
                }
            } else {
                resp.send("Usuario registrado con éxito.");
            }
        });
});


app.post("/newGame", (req, resp) => {
    console.log("ENTRE AL REQUEST BODY ");
    const titulo = req.body.nombreJuego;
    const fechaLanzamiento = req.body.fechaLanzamiento;
    const desarrolladora = req.body.desarrolladora;
    const publisher = req.body.publisher;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcionJuego;
    const imagenPerfil = req.body.imagenPerfil;
    const idUsuario = req.body.idUsuario;


    // Llama al procedimiento almacenado sp_AltaUsuario
    db.query('CALL sp_AltaJuego(?, ?, ?, ?, ?, ?, ?, ?)',
        [titulo, fechaLanzamiento, desarrolladora, publisher, imagenPerfil, descripcion, idUsuario, categoria],
        (err, data) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_SIGNAL_EXCEPTION') {
                    // Si el error es una excepción de señal, significa que el usuario ya existe
                    if (err.sqlMessage.includes('juego')) {
                        resp.status(400).send("Este juego ya existe, favor de borrarlo o modificarlo en la sección de busquéda.");
                    }
                } else {
                    // Si no, es un error genérico
                    resp.status(500).send("Error al registrar el usuario.");
                }
            } else {
                resp.send("Usuario registrado con éxito.");
            }
        });
});


app.post("/editGame", (req, resp) => {
    console.log("ENTRE AL REQUEST BODY ");
    const titulo = req.body.Titulo;
    const fechaLanzamiento = req.body.Fecha_Lanzamiento;
    const desarrolladora = req.body.Desarrolladora;
    const publisher = req.body.selectedPublisher;
    const categoria = req.body.selectedCategoria;
    const descripcion = req.body.Descripcion;
    const imagenPerfil = req.body.Imagen;
    const idJuego = req.body.id;
    const idUsuario = req.body.idUsuario;


    // Llama al procedimiento almacenado sp_AltaUsuario
    db.query('CALL sp_EditarJuego(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idJuego, titulo, fechaLanzamiento, desarrolladora, publisher, imagenPerfil, descripcion, idUsuario, categoria],
        (err, data) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_SIGNAL_EXCEPTION') {
                    // Si el error es una excepción de señal, significa que el usuario ya existe
                    if (err.sqlMessage.includes('juego')) {
                        resp.status(400).send("Este juego ya existe, favor de borrarlo o modificarlo en la sección de busquéda.");
                    }
                } else {
                    // Si no, es un error genérico
                    resp.status(500).send("Error al modificar el juego.");
                }
            } else {
                resp.send("Juego modificado con éxito.");
            }
        });
});






