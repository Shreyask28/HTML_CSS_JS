function getdata(data){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",data);
            resolve("success");
            reject("some error occurred");

        },2000)
    });
};

async function getalldata(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    await getdata(5);
    await getdata(6);



}





const getpromise = ()=>{

return promise = new Promise((resolve, reject) => {
   
   setTimeout(()=>{
    console.log("i am promise");
    
    resolve("success");
},2000);
    
});
}






let promise = getpromise();
promise.then((res)=>{
 

    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("some error..",err);

});
























function getdata(data, getnextdata) {
    setTimeout(() => {
        console.log(data);
        if (typeof getnextdata === 'function') {
            getnextdata();
        }
    }, 2000);
}








getdata(1, () => {
    console.log('getting next data ...........');
    getdata(2, () => {
        console.log('getting next data ...........');
        getdata(10, () => {
            console.log('the end...........');
        });
    });
});







function getdata(data){

    console.log(data);
}


getdata(37864,);