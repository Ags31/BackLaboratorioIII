const Bebida = require('../models/bebida');

module.exports = {

    register(req,res){

        const prod = req.body;

        Bebida.create(prod, (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro de nueva bebida',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Bebida creada',
                    data: data
                });
            }
        });
    },

    update(req,res){

        const beb = req.body;

        Bebida.update(beb, (err,data) => {
            if(err) {
                return res.status(501).json({
                    success:false,
                    message: 'Error con actualizar la bebida',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Bebida actualizada correctamente',
                data: data
            })
        })
    },

    destroy(req,res){

        const id = req.body.id;

        Bebida.destroy(id, (err,data) => {
            if(err){
                return res.status(501).json({
                    success:false,
                    message: 'Error al eliminar la bebida',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Bebida eliminada',
                data:data
            })
        })
    }
}