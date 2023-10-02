const Combo = require('../models/combo');

module.exports = {

    register(req,res){

        const combo = req.body;

        Combo.create(combo, (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro de nuevo combo',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Combo creado',
                    data: data
                });
            }
        });
    },

    update(req,res){

        const combo = req.body;

        Combo.update(combo, (err,data) => {
            if(err) {
                return res.status(501).json({
                    success:false,
                    message: 'Error con actualizar el combo',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Combo actualizado correctamente',
                data: data
            })
        })
    },

    destroy(req,res){

        const id = req.body.id;

        Combo.destroy(id, (err,data) => {
            if(err){
                return res.status(501).json({
                    success:false,
                    message: 'Error al eliminar el combo',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Combo eliminado',
                data:data
            })
        })
    }
}