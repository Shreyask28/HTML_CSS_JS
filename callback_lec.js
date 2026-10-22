function greet(name, callback){
    console.log("hello ${name}!");
    callback();
}
function welcome(){
    console.log("welcome to the world")
}

greet("shreyas", welcome)