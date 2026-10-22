let a= 12345;
let rev = 0;
for(let i=0; i<5; i++){
    let lastDigit = a%10;
    rev =rev*10+lastDigit;
    a=  Math.floor(a/10);
}
console.log(rev);                   

