const express = require('express');
const bodyParser = require('body-parser');
const orderDetails = require('../models/orderDetails')
const orderDetailsRouter = express.Router();

const {calculateRestaurantList} = require('../library/maxOrders.js');
const {calculateMaxOrders} = require('../library/maxOrders.js');
const {calculateMax} = require('../library/maxOrders.js');

const {distanceList} = require('../library/distance.js');
const {distanceObject} = require('../library/distance.js');

const {orderNumbersList} = require('../library/orderNumbers.js');
const {orderNumbersObject} = require('../library/orderNumbers.js');

const {revenueList} = require('../library/revenue.js');
const {revenueObject} = require('../library/revenue.js');

const {bestRatingList} = require('../library/bestRating.js');
const {bestRatingObject} = require('../library/bestRating.js');
const {bestRatingResult} = require('../library/bestRating.js');


orderDetailsRouter.use(bodyParser.json());        

orderDetailsRouter.route('/distance')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        return distanceList(orderDetails);
       })
       .then((result) => {
        if(result != null)
           return distanceObject();
           else res.end('No orders were placed until now.');
       })
       .then((result) => {
         res.json(result);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})


orderDetailsRouter.route('/ordersNumbers')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        return orderNumbersList(orderDetails);
       })
       .then((result) => {
        if(result != null)
        return orderNumbersObject();
        else res.end('No orders were placed until now.');
       })
       .then((result) => {
         res.json(result);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})


orderDetailsRouter.route('/maxOrders')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        return calculateRestaurantList(orderDetails);
       })
       .then((result) => {
           if(result != null)
        return calculateMaxOrders();
        else res.end('No orders were placed until now.');
       })
       .then((result) => {
        return calculateMax();
       })
       .then((result) => {
         res.json(result);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})


orderDetailsRouter.route('/revenue')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        return revenueList(orderDetails);
       })
       .then((result) => {
        if(result != null)
        return revenueObject();
        else res.end('No orders were placed until now.');
       })
       .then((result) => {
         res.json(result);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

orderDetailsRouter.route('/bestRating')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        return bestRatingList(orderDetails);
       })
       .then((result) => {
        if(result != null)
        return bestRatingObject();
        else res.end('No orders were placed until now.');
       })
       .then((result) => {
        return bestRatingResult();
       })
       .then((result) => {
         res.json(result);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

orderDetailsRouter.route('/retrieveData')
.get((req,res,next) => {
    orderDetails.find({})
    .then((orderDetails) => {
        res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json')
         res.json(orderDetails);
       })
       .catch((err) => {
           console.log(err);
       })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    orderDetails.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on path /orderDetails`)
})
.delete((req,res,next) => {
    orderDetails.remove({})
     .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
 
module.exports = orderDetailsRouter;