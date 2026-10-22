// const pr = new Promise((resolve, reject) => {
//     let data = false;

//     if (data) {
//         resolve("Promise is resolved");
//     } else {
//         reject("Promise is rejected");
//     }
// });




// pr.then((message) => {console.log(message)})
// .catch((error) => {console.log(error)})
// .finally(() => {console.log("Promise is fulfilled")});






// function wait(ms, value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, ms);
//   });
// }



// Promise.all([
//     wait(2000, "abc"),
//     wait(1000, "def"),
//     wait(5000, "ghi")
// ]).then(ans => console.log(ans));








// wait(2000)
//   .then((shreyas) => console.log(shreyas))
//   .catch()
//   .finally();





// Promise.resolve(6)
//   .then((number) => number * 2)
//   .then((number) => number + 3)
//   .then((ans) => console.log(ans))
//   .catch((error) => console.log(error));





// function orderPlace() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order placed successfully");
//       res();
//     }, 1000);
//   });
// }


               


// function orderPrepare() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order is prepared");
//       res();
//     }, 2000);
//   });
// }






// function orderDeliver() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order is delivered");
//       res();
//     }, 1000);
//   });
// }

// orderPlace()
//   .then(() => orderPrepare())
//   .then(() => orderDeliver())
//   .then(() => console.log("Khana aa gya"))
//   .catch(() => console.log("error"));

 
// function wait (ms){
//     return new Promise ((resolve)=>{setTimeout((resolve,reject))})
// }


// async function run(){
//     console.log("step 1")
//     await wait(1000);
//     console.log("step 2")
//     await wait (500);
//     console.log("step 3")
// }

// run();

// function getNumber() {
//     return promise.resolve(5);
// }

// getNumber()
// .then((num)=>num*2)
// .then((ans)=>console.log(ans));

// async function run(){
//     const result =await getNumber();
//     const ans =result*2;

//     console.log(ans);

// }
// run()

// function divide(a,b){
//     if(b===0){
//         throw new Error("cant divide by 0")
//     }
//     return a / b;


// }



async function run(){
    try {
        const val =divide (10 ,0)
        console.log(val)


    }
    catch{
        console.log(error.name)
        console.error("something not right ", error.message);

        console.log(error.stack);


    }
    finally{
        console.log("finally ended");
    }
}

run();




function orderPlace() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log("Order placed successfully");
      res();
    }, 1000);
  });
}


               


function orderPrepare() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log("Order is prepared");
      res();
    }, 2000);
  });
}






function orderDeliver() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log("Order is delivered");
      res();
    }, 1000);
  });
}



async function run(){
    try{
   await orderPlace()
   await orderPrepare()
   await orderDeliver()
    }
    catch(error){
        console.error(error.message )
    }
   
}

run()





// orderPlace()
//   .then(() => orderPrepare())
//   .then(() => orderDeliver())
//   .then(() => console.log("Khana aa gya"))
//   .catch(() => console.log("error"));
