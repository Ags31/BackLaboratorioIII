const VistasController = require('../controllers/vistasController')
const db = require('../config/config');

module.exports = (app) => {

    app.get('/api/vistas/comidasmenu',VistasController.getComidaMenu);
    app.get('/api/vistas/bebidasmenu',VistasController.getBebidasMenu);
    app.get('/api/vistas/combosmenu',VistasController.getCombosMenu);

    app.get('/api/vistas/comidasatp',VistasController.getComidaATP);
    app.get('/api/vistas/bebidasatp',VistasController.getBebidasATP);
    app.get('/api/vistas/combosatp',VistasController.getCombosATP);

    app.get('/api/vistas/comidamayores',VistasController.getAlimentoMayores);
    app.get('/api/vistas/bebidasmayores',VistasController.getBebidasMayores);
    app.get('/api/vistas/combosmayores',VistasController.getCombosMayores);

    app.get('/api/vistas/vistasusuarios', VistasController.getVistasUsuarios);
}
