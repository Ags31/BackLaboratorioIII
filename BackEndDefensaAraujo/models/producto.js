const db = require('../config/config');

const Producto = {};

Producto.create = async (prod, result)  =>{

    const sql = 
    `INSERT INTO producto(nombre,precio,idMenuCat,edadCat)
    VALUES (?, ? , ? , ?)`;

    db.query
    (
        sql,
        [prod.nombre, prod.precio, prod.idMenuCat, prod.edadCat],
        (err, res) => {
            if(err){
                console.log('Error en la creacion de un producto-models',err);
                result(err, null);
            }
            else{
                console.log('ID nuevo producto del menu: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Producto.update = async(prod, result) => {

    const sql = `Update producto set nombre = ?, precio = ?, idMenuCat = ?, edadCat = ? where id = ?`;

    db.query
    (
        sql,
        [prod.nombre, prod.precio,prod.idMenuCat,prod.edadCat, prod.id],
        (err,res) => {
                if(err) {
                    console.log('Error en actualizar un producto-models', err)
                    result(err,null);
                }
                else{
                    console.log('Producto actualizado correctamente: ',prod.id);
                    result(null,prod.id);
                }
            }
        )
}

Producto.destroy = async (id, result) => {
    const sql = `Delete from producto where id = ?`
    db.query
    (
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Error al eliminar producto-models ',err);
                result(err,null);
            }
            else{
                console.log('Producto del menu eliminada correctamente-ID: ',id);
                result(null, id);
            }
        }
    )
}

module.exports = Producto;