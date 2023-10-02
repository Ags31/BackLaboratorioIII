const Producto = require('../models/producto');

module.exports = {

    register(req,res){

        const prod = req.body;

        Producto.create(prod, (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro de nuevo producto',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Producto creado',
                    data: data
                });
            }
        });
    },

    update(req,res){

        const prod = req.body;

        Producto.update(prod, (err,data) => {
            if(err) {
                return res.status(501).json({
                    success:false,
                    message: 'Error con actualizar el producto',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Producto actualizado correctamente',
                data: data
            })
        })
    },

    destroy(req,res){

        const id = req.body.id;

        Producto.destroy(id, (err,data) => {
            if(err){
                return res.status(501).json({
                    success:false,
                    message: 'Error al eliminar el producto',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Producto eliminado',
                data:data
            })
        })
    }
}