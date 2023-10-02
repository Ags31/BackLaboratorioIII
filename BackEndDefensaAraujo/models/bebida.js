const db = require('../config/config');

const Bebida = {};

Bebida.create = async (beb, result)  =>{

    const sql = 
    `INSERT INTO bebidas(bebida,precio,edadBeb,idMenuBeb)
    VALUES (?, ? , ? , ?)`;

    db.query
    (
        sql,
        [beb.bebida, beb.precio, beb.edadBeb, beb.idMenuBeb],
        (err, res) => {
            if(err){
                console.log('Error en la creacion de una bebida-models',err);
                result(err, null);
            }
            else{
                console.log('ID nueva bebida del menu: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Bebida.update = async(beb, result) => {

    const sql = `Update bebidas set bebida = ?, precio = ?, edadBeb = ?, idMenuBeb = ?  where id = ? `;

    db.query
    (
        sql,
        [beb.bebida, beb.precio,beb.edadBeb,beb.idMenuBeb,beb.id],
        (err,res) => {
                if(err) {
                    console.log('Error en actualizar una bebida-models', err)
                    result(err,null);
                }
                else{
                    console.log('Bebida actualizada correctamente: ',beb.id);
                    result(null,beb.id);
                }
            }
        )
}

Bebida.destroy = async (id, result) => {
    const sql = `Delete from bebidas where id = ?`
    db.query
    (
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Error al eliminar bebida-models ',err);
                result(err,null);
            }
            else{
                console.log('Bebida del menu eliminada correctamente-ID: ',id);
                result(null, id);
            }
        }
    )
}

module.exports = Bebida;