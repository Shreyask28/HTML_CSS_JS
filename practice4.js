function myfunc(myarr){
    myarr[0]=100;
    return myarr;
}

let arr = [50];

console.log(arr);

myfunc(arr);

console.log(arr);







function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}



console.log(factorial(5));





class toyotaCar{

  constructor(brand){
    
    this.brand=brand;


  }

  start(){
    console.log("car started");
  }

  stop(){
    console.log("car stopped");
  }


}

let fortuner = new toyotaCar("fortuner");
console.log(fortuner)


let innova = new toyotaCar("innova");
console.log(innova)

class person{

  eat(){
    console.log("person eats")
  }

  sleep(){
    console.log("person sleeps")
  }

  work(){
    console.log("eat five* do nothing")
  }
}

class engineer extends person{
  work(){
    console.log("builds something")
  }
}


class doctor extends person{
  work(){
    console.log("treats patients")
  }
}

let shreyas = new engineer();
shreyas.work();









