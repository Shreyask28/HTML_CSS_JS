let mode = document.querySelector("#but1");
color="light";

mode.addEventListener("click", () => {
    if(color=="light"){
        color="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        color="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(color);
    
});
