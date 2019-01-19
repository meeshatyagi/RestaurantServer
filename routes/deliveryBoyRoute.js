const express = require('express');
const bodyParser = require('body-parser');
const deliveryRouter = express.Router();

deliveryRouter.use(bodyParser.json());

deliveryRouter.route('/')
.get((req,res,next) => {

})
.post((req,res,next) => {

})
.put((req,res,next) => {

})
.delete((req,res,next) => {

})

deliveryRouter.route('/:deliveryBoyId')
.get((req,res,next) => {

})
.post((req,res,next) => {

})
.put((req,res,next) => {

})
.delete((req,res,next) => {

})

module.exports = deliveryRouter;

