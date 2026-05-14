const express=require('express');

const Router =express.Router();

const{getCountries, getStatesByCountry, getDistByState}=require('../controller/countryController');

Router.get('/country',getCountries);
Router.get('/state/:country_id',getStatesByCountry);
Router.get('/dist/:state_id',getDistByState);


module.exports=Router;

