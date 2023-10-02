const db = require('../config/config');

const Vistas = {};

Vistas.getComidaMenu = async (result) => {
    const sql = 'SELECT * FROM ComidaMenu';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las comidas del menu', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getBebidasMenu = async (result) => {
    const sql = 'SELECT * FROM BebidasMenu';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las bebidas del menu', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getCombosMenu = async (result) => {
    const sql = 'SELECT * FROM CombosMenu';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener los combos del menu', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getComidaATP = async (result) => {
    const sql = 'SELECT * FROM ComidaATP';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las comidas', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getBebidasATP = async (result) => {
    const sql = 'SELECT * FROM BebidasATP';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las bebidas', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getCombosATP = async (result) => {
    const sql = 'SELECT * FROM CombosATP';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener los combos', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getAlimentoMayores = async (result) => {
    const sql = 'SELECT * FROM AlimentoMayores';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las comidas', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getBebidasMayores = async (result) => {
    const sql = 'SELECT * FROM BebidasMayores';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener las bebidas', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getCombosMayores = async (result) => {
    const sql = 'SELECT * FROM CombosMayores';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener los combos', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Vistas.getVistasUsuarios = async (result) => {
    const sql = 'SELECT * FROM VistasUsuarios';

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al obtener los usuarios', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Vistas;