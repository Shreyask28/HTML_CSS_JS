const url="https://randomuser.me/api/";


let output=document.querySelector("#data");


async function gatdata(){
    console.log("getting data............");
    let response = await fetch(url);
    console.log(response);
    let data=await response.json();
    output.innerText=(data.results[0]);

    
}

