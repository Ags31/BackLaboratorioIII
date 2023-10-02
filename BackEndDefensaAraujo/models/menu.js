const db = require('../config/config');

const Menu = {};

Menu.create = async (cat, result)  =>{

    const sql = 
    `INSERT INTO menu(categoria,edad)
    VALUES (?, ?)`;

    db.query
    (
        sql,
        [cat.categoria, cat.edad],
        (err, res) => {
            if(err){
                console.log('Error en la creacion de una categoria-models',err);
                result(err, null);
            }
            else{
                console.log('ID nueva categoria del menu: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Menu.update = async(cat, result) => {

    const sql = `Update menu set categoria = ?, edad = ? where id = ?`;

    db.query
    (
        sql,
        [cat.categoria, cat.edad, cat.id],
        (err,res) => {
                if(err) {
                    console.log('Error en actualizar una categoria-models', err)
                    result(err,null);
                }
                else{
                    console.log('Categoria actualizada correctamente: ',cat.id);
                    result(null,cat.id);
                }
            }
        )
}

Menu.destroy = async (id, result) => {
    const sql = `Delete from menu where id = ?`
    db.query
    (
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Error al eliminar usuario-models ',err);
                result(err,null);
            }
            else{
                console.log('Categoria del menu eliminada correctamente-ID: ',id);
                result(null, id);
            }
        }
    )
}

module.exports = Menu;