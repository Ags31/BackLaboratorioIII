const BebidaController = require('../controllers/bebidaController');
const db = require('../config/config');

module.exports = (app) => {
    app.post('/api/bebida/register', BebidaController.register)
    app.put('/api/bebida/update', BebidaController.update)
    app.delete('/api/bebida/destroy', BebidaController.destroy)

    app.get('/api/bebida/select', (req,res) => {
        const sql = `Select p.id, p.bebida, p.precio, m.categoria from bebidas p join menu m on m.id = p.idMenuBeb`;
        db.query(sql, (err,results) => {
            if(err){
                console.error('Error en la muestra de bebidas: ', err);
                res.status(500).json({error: 'Error en el servidor'});
                return;
            }
            res.json(results);
        })
    })


}