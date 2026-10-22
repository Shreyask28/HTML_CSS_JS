let divbox=document.querySelectorAll(".box");
console.dir(divbox);

let idx=1;
for(let i=0; i<divbox.length; i++){
    divbox[i].innerText="new value "+idx;
    idx++;
}


console.dir(divbox);

