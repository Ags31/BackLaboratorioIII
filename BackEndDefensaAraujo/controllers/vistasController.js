const Vistas = require('../models/vistas');

module.exports = {

    getComidaMenu(req,res){

        Vistas.getComidaMenu( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de comidas del menu',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Comidas del menu',
                    data: data
                });
            }
        });
    },

    getBebidasMenu(req,res){

        Vistas.getBebidasMenu( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de bebidas del menu',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Bebidas del menu',
                    data: data
                });
            }
        });
    },

    getCombosMenu(req,res){

        Vistas.getCombosMenu( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de Combos del menu',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Combos del menu',
                    data: data
                });
            }
        });
    },

    getComidaATP(req,res){

        Vistas.getComidaATP( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de comidas ATP',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Comidas ATP',
                    data: data
                });
            }
        });
    },

    getBebidasATP(req,res){

        Vistas.getBebidasATP( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de bebidas ATP',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Bebidas ATP',
                    data: data
                });
            }
        });
    },

    getCombosATP(req,res){

        Vistas.getCombosATP( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de combos ATP',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Combos ATP',
                    data: data
                });
            }
        });
    },

    getAlimentoMayores(req,res){

        Vistas.getAlimentoMayores( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de alimentos para mayores',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Alimentos para mayores',
                    data: data
                });
            }
        });
    },

    getBebidasMayores(req,res){

        Vistas.getBebidasMayores( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de bebidas para mayores',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Bebidas para mayores',
                    data: data
                });
            }
        });
    },

    getCombosMayores(req,res){

        Vistas.getCombosMayores( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de combos para mayores',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Combos para mayores',
                    data: data
                });
            }
        });
    },

    getVistasUsuarios(req,res){

        Vistas.getVistasUsuarios( (err,data) => {
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con la muestra de los usuarios',
                    error: err
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message: 'Usuarios',
                    data: data
                });
            }
        });
    }
}