function orderPlace(orderPrepare, orederDeliver){
    setTimeout(()=>{
        console.log("order placed successfully");
    },1000)

}
function orderPrepare(orderDeliver){
    setTimeout(()=>{
        console.log("order is prepared!");
        orderDeliver
    })

}