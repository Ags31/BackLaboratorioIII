const MenuController = require('../controllers/menuController');
const db = require('../config/config');

module.exports = (app) => {
    app.post('/api/menu/register', MenuController.register)
    app.put('/api/menu/update', MenuController.update)
    app.delete('/api/menu/destroy', MenuController.destroy)

    app.get('/api/menu/select', (req,res) => {
        const sql = `Select id, categoria from menu order by id`;
        db.query(sql, (err,results) => {
            if(err){
                console.error('Error en la muestra de categorias: ', err);
                res.status(500).json({error: 'Error en el servidor'});
                return;
            }
            res.json(results);
        })
    })


}