let age =25;

let output= age>=20 ? "adult" : "not adult";

console.log(output);
let str = "hello";

for (let i of str) {
	console.log(i);

	// iterate over characters
};
let upper = str.toUpperCase();
console.log(upper);






let arr=["amazon","adobe","google","facebook","twitter"];

arr.push("microsoft");

    console.log(arr);






function hello(){
    console.log("hello");
}


setTimeout(hello, 4000);//timeout
console.log("my name is shreyas kumbhar");




//callback




function add(a,b){
    console.log(a+b);
}

function execute(a, b, callback){
    callback(a,b);
}

execute(1,4, add);

function sayHi(name){
    console.log("hi"+name)
}
function name(callback){
    callback(" shreyas");
}
name(sayHi);






function getdata(dataid){
    
    setTimeout(()=>{
        console.log("data=", dataid);
    },2000);

}

getdata(1, (data) => {
    console.log(data); 
});






function printname(name){
 setTimeout(()=>{   
    console.log("hi "+ name);
 }, 2000);
}





function take(callback){
    callback("Shreyas");

};

take(printname);
console.log("my name is shreyas kumbhar");





function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}




getdata(1,()=>{
    console.log("getting next data .............")
    getdata(2,()=>{
        console.log("getting next data .............")
        getdata(3,()=>{
            console.log("getting next data .............")
            getdata(4);
        })
    });
});

function getData(data,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
        },3000)
    })
}


getData(1, () => {
  console.log("getting next data............");
  getData(2, () => {
    console.log("getting next data............");
    getData(3, () => {
      console.log("getting next data............");
      getData(4);
    });
  });
});







function asyncFunc1(){
return new Promise((resolve , reject)=>{
    setTimeout(() => {
    console.log("data1");

    resolve("success");
    // reject("some error ocurred");

    }, 2000);
    

});
};








function asyncFunc2(){
return new Promise((resolve , reject)=>{
    setTimeout(() => {
    console.log("data2");

    resolve("success");
    // reject("some error ocurred");

    }, 2000);
    

});
};





console.log("fectching data1.....")
let p1 =asyncFunc1();
p1.then((res)=>{
   console.log(res);
   console.log("fectching data2.....")
   let p2= asyncFunc2();
   p2.then((res)=>{
    console.log(res);
    console.log("fectching data3.....")

   })
    
});







function getData(dataId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 1000);
    });
}

async function fetchAllData() {
    for (let i = 1; i <= 6; i++) {
        console.log("fetching data.............", i);
        await getData(i);
    }
}

fetchAllData();









