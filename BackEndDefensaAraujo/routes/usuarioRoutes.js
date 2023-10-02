const usuarioController = require('../controllers/usuarioController');


module.exports = (app) =>{

    app.post('/api/usuario/create', usuarioController.register);
    app.post('/api/usuario/login', usuarioController.login);
    app.put('/api/usuario/update', usuarioController.update);
    app.delete('/api/usuario/delete', usuarioController.destroy);
    
}