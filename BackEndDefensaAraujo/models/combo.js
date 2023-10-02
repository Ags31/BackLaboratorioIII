const db = require('../config/config');

const Combo = {};

Combo.create = async (comb, result)  =>{

    const sql = 
    `INSERT INTO combos(idComboCat,id_producto,id_bebida)
    VALUES ( ? , ? , ? )`;

    db.query
    (
        sql,
        [comb.idComboCat, comb.id_producto, comb.id_bebida],
        (err, res) => {
            if(err){
                console.log('Error en la creacion de un combo-models',err);
                result(err, null);
            }
            else{
                console.log('ID nuevo combo del menu: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Combo.update = async(comb, result) => {

    const sql = `Update combos set idComboCat = ?, id_producto = ?, id_bebida = ? where id = ? `;

    db.query
    (
        sql,
        [comb.idComboCat, comb.id_producto, comb.id_bebida, comb.id],
        (err,res) => {
                if(err) {
                    console.log('Error en actualizar un combo-models', err)
                    result(err,null);
                }
                else{
                    console.log('Combo actualizado correctamente: ',comb.id);
                    result(null,comb.id);
                }
            }
        )
}

Combo.destroy = async (id, result) => {
    const sql = `Delete from combos where id = ?`
    db.query
    (
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Error al eliminar combo-models ',err);
                result(err,null);
            }
            else{
                console.log('Combo eliminado correctamente-ID: ',id);
                result(null, id);
            }
        }
    )
}

module.exports = Combo;