const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'proyectodefensaaraujo'
})

db.connect(function (err){
    if(err) throw err;
    console.log('Base de datos CONECTADA');
})

module.exports = db;