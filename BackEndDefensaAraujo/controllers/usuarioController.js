const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {

    login(req,res){

        const usuario = req.body.usuario;
        const password = req.body.password;

        Usuario.findByUsuario(usuario,async (err,myUser) => {
            if (err) {
                return res.status(501).json({
                    success: false, 
                    message: 'Error con el registro del usuario',
                    error: err
                });
            }
            if(!myUser){
                return res.status(401).json({ //Cliente sin autorización
                    success: false,
                    message: 'Usuario no encontrado'
                    });
                }
            
            const isPasswordValid = await bcrypt.compare(password, myUser.password);
            if(isPasswordValid){
            const token = jwt.sign({id: myUser.id, usuario: myUser.usuario}, keys.secretOrKey, {});

                const data = {
                    id: myUser.id,
                    nombre: myUser.nombre,
                    apellido: myUser.apellido,
                    Documento: myUser.DNI,
                    usuario: myUser.usuario,
                    session_token: `JWT ${token}`
                }
                
                return res.status(201).json({
                    success: true,
                    message: 'Usuario autenticado correctamente',
                    data: data
                    })
            }
            else{
                return res.status(401).json({ 
                    success: false,
                    message: 'Contraseña incorrecta'
                    });
            }
            })
    },

    register(req, res) {

        const usuario = req.body; //Capturo datos del cliente

        Usuario.create(usuario, (err,data) => {
            if (err) {
                return res.status(501).json({
                    success: false, 
                    message: 'Error con el registro del usuario',
                    error: err
                });
            }

            Usuario.id = `${data}`;
            const token = jwt.sign({id: Usuario.id, usuario: Usuario.usuario}, keys.secretOrKey, {});
            Usuario.session_token = `JWT ${token}`;

            if (err) {
                    return res.status(501).json({
                        success: false, 
                        message: 'Error con el registro del usuario',
                        error: err
                    });
                }
                return res.status(201).json({
                    success: true,
                    message: 'Registro del usuario exitoso',
                    data: data 
                })

        });
    },

    update(req, res) {

        const usuario = req.body; //Capturo datos del cliente

        Usuario.update(usuario, (err,data) => {
            if (err) {
                return res.status(501).json({
                    success: false, 
                    message: 'Error con actualizar el usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Usuario actualizado correctamente',
                data: data 
            })
        });
    },

    destroy(req,res){
        const id= req.body.id;

        Usuario.destroy(id, (err,data) => {
            if (err) {
                return res.status(501).json({
                    success: false, 
                    message: 'Error con eliminar el usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Usuario eliminado correctamente',
                data: data 
            })
        });
    }
 
}