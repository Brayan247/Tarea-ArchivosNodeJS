const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Students = require('./api/students');
const multer = require('multer');
const mimeTypes = require('mime-types');
const app = express();

app.use(express.static('views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/students', Students);

mongoose.connect(
    "mongodb://localhost/estudiantes",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(4000, () => {
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

const storageCedula = multer.diskStorage({
    destination: 'uploads/uploads-cedula',
    filename: function(req, file, cb){
        mimeTypes.contentType = app;
        cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
})

const storageFoto = multer.diskStorage({
    destination: 'uploads/uploads-foto',
    filename: function(req, file, cb){
        
        cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
})

const uploadCedula = multer({
    storage: storageCedula
})

const uploadFoto = multer({
    storage: storageFoto
})

app.post("/files/cedula", uploadCedula.single('cedula'), (req,res) => {
    res.send("Cedula subida correctamente...!!!")
})

app.post("/files/foto", uploadFoto.single('foto'), (req,res) => {
    res.send("Foto subida correctamente...!!!")
})