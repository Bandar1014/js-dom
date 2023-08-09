

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function purple(){
    let img= document.getElementById("img");
    img.style.backgroundColor="purple";
    let text= document.getElementById("text");
    text.innerText="the background color is purple";

}

function blue(){
    
    let img= document.getElementById("img");
    img.style.backgroundColor="blue";
    let text= document.getElementById("text");
    text.innerText="the background color is blue";
   
    

}

function btn1(){
    let para=document.getElementById("paragraph")
    para.textContent="I hate you"
}

function btn2(){
    let iSize=document.getElementById("paragraph")
    iSize.style.fontSize="40px"
}
function btn3(){
    let dSize=document.getElementById("paragraph")
    dSize.style.fontSize="10px"
}
function btn4(){
    let backColor=document.getElementById("paragraph")
    backColor.style.backgroundColor="blue"
}

const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  myImg.src = "my photo.jpg";
  
});


function btn5(){
        alert("8/9/2023");
      
    
    }

