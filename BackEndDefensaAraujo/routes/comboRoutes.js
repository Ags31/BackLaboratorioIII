const ComboController = require('../controllers/comboController');
const db = require('../config/config');

module.exports = (app) => {
    app.post('/api/combo/register', ComboController.register)
    app.put('/api/combo/update', ComboController.update)
    app.delete('/api/combo/destroy', ComboController.destroy)

    app.get('/api/combo/select', (req,res) => {
        const sql = 
        `Select c.combo as NombreCombo, c.precio as Precio , p.nombre as Comida, b.bebida as Bebida, m.categoria as Categoria
        from combos c
        join producto p on c.id_producto = p.id
        join bebidas b on c.id_bebida = b.id
        join menu m on c.idComboCat = m.id`;
        db.query(sql, (err,results) => {
            if(err){
                console.error('Error en la muestra de combos: ', err);
                res.status(500).json({error: 'Error en el servidor'});
                return;
            }
            res.json(results);
        })
    })


}