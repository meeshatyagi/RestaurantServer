var val =  false;
var result = {};
var list = [];
var orderDetail;

function orderNumbersList(orderDetails){
    orderDetail = orderDetails;
    result = {};
    list = [];
    var i;
        return new Promise((resolve,reject) => {
            if(orderDetails.length != 0){
                list.push(orderDetails[0].deliveryBoyName);
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
                console.log(list + '  list.');

                if(i = orderDetail.length)
                resolve(list);

            } else{
                resolve(null);
            } 
         })   
}

    function orderNumbersObject(){
        var i;
        for(var k = 0; k<list.length; k++){
            result[list[k]] = 0;
        }
        return new Promise((resolve,reject) => {

        for(var j=0; j<list.length; j++){

            for(i=0; i<orderDetail.length; i++){
            
                if(list[j] == orderDetail[i].deliveryBoyName){
                    result[list[j]] = result[list[j]] + 1;
                }
        }
    }

    if(i = orderDetail.length)
    resolve(result);
})
}

module.exports = {
    orderNumbersList: orderNumbersList,
    orderNumbersObject: orderNumbersObject,
}
