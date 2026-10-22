console.log("first");
setTimeout(()=>{
    console.log("second")
},5000)
console.log("third")
let count =1;

const intervalID =setInterval(()=>{
    console.log(count);
    
    count++;
    if(count>5){
        clearInterval(intervalId);
        console.log("Interval Cleared")
    }
},1000);

const table =setInterval(()=>{
    


    
})