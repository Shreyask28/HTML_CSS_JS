function greet(name,callback){
    console.log("good morning "+ name )
    callback()
}

function goodbye(){
    console.log("goodbye!")
}

greet("shreyas",goodbye);