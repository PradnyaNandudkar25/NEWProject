const express=require('express');

const Router =express.Router();

const{getProduct}=require('../controller/productController.js');

Router.get('/product',getProduct);

module.exports=Router;


