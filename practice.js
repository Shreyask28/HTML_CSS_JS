let a=[1,3,4,2,8];
let sum=0;
let average=0;
for(let i=0;i<a.length;i++){
     sum=sum+a[i];
    average=sum/a.length;
    
}

console.log(average);







let items=[360,470,370,480,770,570];
for(let i=0;i<items.length;i++){
     let offer = items[i]/10;
     items[i]=items[i]-offer;
}
console.log(items);






let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
company.shift();
console.log(company);
company.splice(2,1,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);





const mult=(a,b)=>{

    return a*b;
}

console.log(mult(5,6));






function v(str){
    count=0;
    
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
          count ++;

        }
    }
    return count;
    

    
} 




let arr = prompt("Enter the array elements separated by commas").split(",").map(Number);
 arr.forEach(element=>{
    console.log(element*element );

//forEach
});






let arr = prompt("Enter the array elements separated by commas").split(",").map(Number);
 arr.map(element=>{
    console.log(element*element );

//map
});





let arr = prompt("Enter the array elements separated by commas").split(",").map(Number);
 arr.filter(element=>{
     element%2===0;
     console.log(element);

    

//filer
});





let arr=[1,2,3,4,5];
 let ouput= arr.reduce((prev, curr)=>{
    return prev+curr;
//filer
});
console.log(ouput);




let heading=document.getElementById("heading");
console.dir(heading);





let paragraph=document.getElementById("paragraph");
console.dir(paragraph);




let sameClass = document.getElementsByClassName("same");
console.dir(sameClass);






let tagname=document.getElementsByTagName("h1");
console.dir(tagname);



let firstel=document.querySelector("h1");
console.dir(firstel);
// fiest element





let allel=document.querySelectorAll("h1");
console.dir(allel);
//all element




let classselect=document.querySelectorAll(".same");
console.dir(classselect);
//class selector





let classselect1=document.querySelectorAll(".same1");
console.dir(classselect1);
//class selector



let idselect=document.querySelectorAll("#heading");
console.dir(idselect);
//id selector






let idselect1=document.querySelectorAll("#paragraph");
console.dir(idselect1);
//id selector






let idselect=document.querySelector("#heading");
console.dir(idselect.innerText);
idselect.innerText=idselect.innerText+" Kumbhar";
console.dir(idselect.innerText);







let para =document.querySelector("p");
console.log(para.getAttribute("class"));







let paragraph=document.querySelector("p");
paragraph.setAttribute("class","newclass");







let head=document.querySelector("#heading");
head.style.backgroundColor="lightgreen";
head.style.fontSize="30px";






let newElement = document.createElement("h2");
newElement.innerText="this is a new element";





let selectElement=document.querySelector("body");
selectElement.prepend(newElement);
//adds new element to website without HTML






let button1=document.querySelector("#id1");
button1.onclick=(e)=>{
   console.log(e);
   console.log(e.type);
}








let button4=document.querySelector("#id4");

button4.addEventListener("mouseover",(e)=>{
    console.log(e);
    console.log(e.type);
})












let employee ={
    calctax(){
        q
    }
}








class Toyotacar{

    constructor(){
        this.milaege="good mileage";
    }

    stop(){
        console.log("start");
    }
    start(){
        console.log("stop");
    }
    setbrand(brand){
        this.brand=brand;
    }
    
}

class bigBrand extends Toyotacar{
    manufacturing(){
        console.log("Big Manufacturing");
    }
}

let fortuner= new Toyotacar();
console.log(fortuner);
let lexus=new Toyotacar();
console.log(lexus);
fortuner.setbrand("fortuner");
lexus.setbrand("lexus");


let toyota= new bigBrand();
console.log(toyota);


