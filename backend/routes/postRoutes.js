const express=require('express');

const Router =express.Router();

const{getAllpost}=require('../controller/postController');

Router.post('/post',getAllpost);

module.exports=Router;