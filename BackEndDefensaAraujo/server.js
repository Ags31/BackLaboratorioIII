const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const port = process.env.PORT || 3000;
const PDFDocument = require('pdfkit');
const fs = require('fs');
const db = require('./config/config');
const nodemailer = require('nodemailer'); // Para enviar correos electrónicos
const cron = require('node-cron'); // Para programar tareas

app.disable('x-powered-by'); // Mueve esta línea antes de la configuración de las rutas y los controladores

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.disable('x-powered-by');
app.set('port', port);



/* Rutas */
const MenuController = require('./routes/menuRoutes'); 
const ProductoController = require('./routes/productoRoutes');
const BebidaController = require('./routes/bebidaRoutes');
const ComboController = require('./routes/comboRoutes');
const VistasController = require('./routes/vistasRoutes');
const UsuarioController = require('./routes/usuarioRoutes');

MenuController(app);
ProductoController(app);
BebidaController(app);
ComboController(app);
VistasController(app);
UsuarioController(app);

server.listen(3000, 'IP' || 'localhost', function(){
    console.log('Aplicacion de NodeJS ' + process.pid + ' Iniciada...')
});

app.get('/', (req,res) =>{
    res.send('Ruta de conexion test');
});

app.get('/test', (req,res) =>{
    res.send('Testeando');
});

app.get('/descargar-pdf', (req, res) => {
    const doc = new PDFDocument();
    doc.pipe(res);
    db.query('SELECT * FROM bebidas', (err, rows) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        return;
      }
      rows.forEach((row) => {
        const productoFormateado = `${row.bebida}: $${row.precio}`;
        doc.text(productoFormateado);
      });

      doc.end();
      console.log('PDF generado con éxito');
    });
  });


//Error
app.use((err,req,res,next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})