const db = require('../config/config');
const bcrypt = require('bcryptjs');

const Usuario = {};

Usuario.findById = (id, result) => {
    const sql =`
    SELECT id, nombre, apellido, usuario , dni as DNI, password
    from usuario where usuario = ?
    `;

    db.query(
        sql,
        [id],
        (err, user) => {
            if(err) {
                console.log('Error en encontrar id del usuario-models'),err;
                result (err,null);
            }
            else {
                console.log('Usuario: ', user[0]);
                result(null, user[0]);
            }
        }
    )
}

Usuario.findByUsuario = (usuario, result) => {
    const sql = `
    SELECT id, nombre, apellido, usuario,dni as DNI, password
    from usuario where usuario = ?
    `;

    db.query(
        sql,
        [usuario],
        (err, user) => {
            if(err) {
                console.log('Error en encontrar usuario de usuario-models'),err;
                result (err,null);
            }
            else {
                console.log('Usuario: ', user[0]);
                result(null, user[0]);
            }
        }
    )
}


Usuario.create = async (user, result)  =>{

    const hash = await bcrypt.hash(user.password, 14);

    const sql = 
    `INSERT INTO usuario(nombre,apellido,usuario, password, created_at,updated_at, dni)
    Values(?, ? , ? , ? , ? , ? , ?)`;

    db.query
    (
        sql,
        [user.nombre, user.apellido, user.usuario,hash, new Date(),new Date(), user.dni],
        (err, res) => {
            if(err){
                console.log('Error en la creacion de un nuevo usuario-models ',err);
                result(err, null);
            }
            else{
                console.log('ID nuevo usuario: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Usuario.update = (user,result) => {

    const sql= `
    Update usuario SET nombre = ? ,apellido= ?, dni = ? ,update_at= ? 
    WHERE id = ?
    `;
    db.query
    (
        sql,
        [user.nombre, user.apellido,user.dni,new Date(),user.id],
        (err, res) => {
            if(err){
                console.log('Error en actualizar el usuario-models: ',err);
                result(err, null);
            }
            else{
                console.log('Usuario Actualizado: ', user.id);
                result(null,user.id);
            }
        }
    )
}

Usuario.destroy = (id,result) => {

    const sql= `DELETE FROM usuario WHERE id= ? `;
    db.query
    (
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Error en eliminar el usuario-models ',err);
                result(err, null);
            }
            else{
                console.log('Usuario Eliminado: ', id);
                result(null,id);
            }
        }
    )
}


module.exports = Usuario;