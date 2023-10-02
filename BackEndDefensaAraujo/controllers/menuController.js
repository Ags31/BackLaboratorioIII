const Menu = require('../models/menu');

module.exports = {

    register(req,res){

        const menu = req.body;

        Menu.create(menu, (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro de nueva categoria',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Categoria creada',
                    data: data
                });
            }
        });
    },

    update(req,res){

        const menu = req.body;

        Menu.update(menu, (err,data) => {
            if(err) {
                return res.status(501).json({
                    success:false,
                    message: 'Error con actualizar la categoria',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Categoria actualizada correctamente',
                data: data
            })
        })
    },

    destroy(req,res){

        const id = req.body.id;

        Menu.destroy(id, (err,data) => {
            if(err){
                return res.status(501).json({
                    success:false,
                    message: 'Error al eliminar la categoria',
                    error: err
                })
            }
            return res.status(201).json({
                success:true,
                message: 'Categoria eliminada',
                data:data
            })
        })
    }
}