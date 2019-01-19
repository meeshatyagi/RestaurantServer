const express = require('express');
const bodyParser = require('body-parser');
const restaurantRouter = express.Router();

restaurantRouter.use(bodyParser.json());

restaurantRouter.route('/')
.get((req,res,next) => {

})
.post((req,res,next) => {

})
.put((req,res,next) => {

})
.delete((req,res,next) => {

})

restaurantRouter.route('/:restaurantId')
.get((req,res,next) => {

})
.post((req,res,next) => {

})
.put((req,res,next) => {

})
.delete((req,res,next) => {

})

module.exports = restaurantRouter;