function changeText(){
console.log("hello")

const headings =document.getElementsByTagName("h1");

console.log(headings);

headings[1].textContent ="hello world"

}

const heading =document.getElementByClassName("heading");
heading.textContent ="hello , name"

const heading =document.querySelector(".heading")

const heading = document.querySelector("#heading")

const heading = document.querySelector("p")

p.classList.add("highlight")
p.classList.toggle("highlight")
p.classList.remove("highlight")



const url = document.querySelector("#students");

function addStudent(){
    const addStudent = document.createElement("li");
    addStudent.textContent ="New Student";
    url.appendChild(addStudent);
}











