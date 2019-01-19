var val =  false;
var result = {};
var list = [];
var orderDetail;

function calculateRestaurantList(orderDetails){
    orderDetail = orderDetails;
    list = [];
    result = {};
    var i;
        return new Promise((resolve,reject) => {
            if(orderDetails.length != 0){
                list.push(orderDetails[0].restaurantName)
            for(i=1; i< orderDetail.length; i++){
                val = false

                for(var j=0; j< list.length; j++){
                    if(list[j] == orderDetail[i].restaurantName)
                    val = true;
                }
                if(!val){
                    list.push(orderDetail[i].restaurantName)
                    val = false;
                }
            }

            if(i = orderDetail.length)
            resolve(list);
        } else {
            resolve(null);
        }
    })   
}

    function calculateMaxOrders(){
        var i;
        for(var k = 0; k<list.length; k++){
            result[list[k]] = 0;
        }
        return new Promise((resolve,reject) => {
            console.log(list + ' list data.');

        for(var j=0; j<list.length; j++){

            for(i=0; i<orderDetail.length; i++){
            
                if(list[j] == orderDetail[i].restaurantName){
                    result[list[j]] = result[list[j]] + 1;
                }
        }
    }
    if(i = orderDetail.length)
    resolve(result);
})
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

    function calculateMax(){
        var max = 0;
        var data = {}
        var i,j=0;
        return new Promise((resolve,reject) => {
        for(i in result){
            j++;
            console.log(result[i] + ' value of ii for ' + i);
            if(result[i] >= max){
                max = result[i];
                if(max>3)
                data[i] = max;
                console.log(max + ' value of i for ' + i);
            }
        }

        if(j == Object.size(result))
        resolve(data);
    })
}

module.exports = {
    calculateRestaurantList: calculateRestaurantList,
    calculateMaxOrders: calculateMaxOrders,
    calculateMax: calculateMax
}
