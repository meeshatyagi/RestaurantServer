var val =  false;
var result = {};
var rating = {};
var list = [];
var orderDetail;
var collection = [];

const util = require('util')

function bestRatingList(orderDetails){
    orderDetail = orderDetails;
    result = {};
    list = [];
    rating = {};
    var i;
        return new Promise((resolve,reject) => {
            
            if(orderDetail.length != 0){
                list.push(orderDetail[0].deliveryBoyName);
                for(i=1; i< orderDetail.length; i++){
                    val = false;
                    for(var j=0; j< list.length; j++){
                        if(list[j] == orderDetail[i].deliveryBoyName){
                            val = true;
                        }
                    }
                    if(!val){
                        list.push(orderDetail[i].deliveryBoyName);
                    }
                }

                if(i = orderDetail.length){
                    resolve(list);
                }
        
            } else{
                resolve(null);
            } 
         })   
    }

    function bestRatingObject(){
        var i;
        collection = [];

        return new Promise((resolve,reject) => {

        for(var j=0; j<list.length; j++){
            rating = {};
            rating[list[j]] = 0;
            rating["orders"] = 0;
            for(i=0; i<orderDetail.length; i++){
            
                if(list[j] == orderDetail[i].deliveryBoyName){
                    rating[list[j]] = rating[list[j]] + orderDetail[i].ratingDeliveryBoy;
                    rating["orders"] = rating["orders"] + 1;
                }
             }
             collection.push(rating);
         }
            if(i = orderDetail.length)
            resolve(collection);
     })
}

function bestRatingResult(){ 
    var i,j,temp, temporary;
    var result = [];
    console.log(util.inspect(collection, false, null, true))
    return new Promise((resolve,reject) => {

        for(i=0; i<collection.length; i++){
            collection[i].total = 0;
            collection[i].total = Math.round(collection[i][list[i]]/collection[i].orders);
        }

        for(j=0; j<collection.length ; j++){
            temp = j;
            for(var k=j+1 ; k<collection.length ; k++){
                if(collection[temp].total < collection[k].total){
                    temp = k;
                }
            }
            temporary = collection[j];
            collection[j] = collection[temp];
            collection[temp] = temporary;
        }

        for(var e = 0; e<3 ; e++){
            result.push(collection[e]);
        }

        if(i = collection.length)
        resolve(result);
     })
}

module.exports = {
    bestRatingList: bestRatingList,
    bestRatingObject: bestRatingObject,
    bestRatingResult: bestRatingResult
}
