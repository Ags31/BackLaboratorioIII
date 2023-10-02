const ProductoController = require('../controllers/productoController');
const db = require('../config/config');

module.exports = (app) => {
    app.post('/api/producto/register', ProductoController.register)
    app.put('/api/producto/update', ProductoController.update)
    app.delete('/api/producto/destroy', ProductoController.destroy)

    app.get('/api/producto/select', (req,res) => {
        const sql = `Select p.id, p.nombre, p.precio, m.categoria from producto p join menu m on m.id = p.idMenuCat`;
        db.query(sql, (err,results) => {
            if(err){
                console.error('Error en la muestra de productos: ', err);
                res.status(500).json({error: 'Error en el servidor'});
                return;
            }
            res.json(results);
        })
    })


}