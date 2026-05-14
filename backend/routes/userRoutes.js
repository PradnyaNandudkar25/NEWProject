const express=require('express');

const Router =express.Router();

const{getAlluser, getuserbyId,insertUser,updateUser,deleteUser, updateUserName}=require('../controller/userController');

Router.get('/user',getAlluser);

Router.get('/user/:id',getuserbyId);

Router.patch('/updateuser/:id',updateUserName);

Router.post('/insert',insertUser);

Router.put('/update/:id',updateUser);

Router.delete('/delete/:id',deleteUser);


module.exports=Router;