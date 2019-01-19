var val =  false;
var result = {};
var list = [];
var orderDetail;

function distanceList(orderDetails){
    orderDetail = orderDetails;
    result = {}
    list = []
    var i;
        return new Promise((resolve,reject) => {
            
            if(orderDetail.length != 0){
                list.push(orderDetail[0].deliveryBoyName);
                for(i=1; i< orderDetail.length; i++){
                    val = false;
                    console.log(val)
                    for(var j=0; j< list.length; j++){
                        console.log(list[j] + " " + orderDetail[i].deliveryBoyName)
                        if(list[j] == orderDetail[i].deliveryBoyName){
                            val = true;
                        }
                    }
                    if(!val){
                        list.push(orderDetail[i].deliveryBoyName);
                    }
                }

                if(i = orderDetail.length){
                    console.log('inside');
                    resolve(list);
                }
        
            } else{
                resolve(null);
            } 
         })   
    }

    function distanceObject(){
        var i;
        for(var k = 0; k<list.length; k++){
            result[list[k]] = 0;
        }
        return new Promise((resolve,reject) => {

        for(var j=0; j<list.length; j++){

            for(i=0; i<orderDetail.length; i++){
            
                if(list[j] == orderDetail[i].deliveryBoyName){
                    result[list[j]] = result[list[j]] + orderDetail[i].distance;
                }
             }
         }

    if(i = orderDetail.length)
    resolve(result);
})
}

module.exports = {
    distanceList: distanceList,
    distanceObject: distanceObject,
}
