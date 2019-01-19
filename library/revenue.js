var val =  false;
var result = {};
var list = [];
var orderDetail;

function revenueList(orderDetails){
    orderDetail = orderDetails;
    result = {};
    list = [];
    var i;
        return new Promise((resolve,reject) => {
            if(orderDetails.length != 0){
                list.push(orderDetails[0].restaurantName)
                for(i=1; i< orderDetail.length; i++){
                    val = false

                    for(var j=0; j< list.length; j++){
                        if(list[j] == orderDetail[i].restaurantName){
                            val = true;
                        }
                    }
                    if(!val){
                        list.push(orderDetail[i].restaurantName)
                    }
                }

                if(i = orderDetail.length)
                resolve(list);
            } else{
                resolve(null)
            } 
        })   
    }

    function revenueObject(){
        var i;
        for(var k = 0; k<list.length; k++){
            result[list[k]] = 0;
        }
        return new Promise((resolve,reject) => {

        for(var j=0; j<list.length; j++){

            for(i=0; i<orderDetail.length; i++){
            
                if(list[j] == orderDetail[i].restaurantName){
                    result[list[j]] = result[list[j]] + orderDetail[i].price;
                }
        }
    }
    if(i = orderDetail.length)
    resolve(result);
})
}

module.exports = {
    revenueList: revenueList,
    revenueObject: revenueObject,
}
