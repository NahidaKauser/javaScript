let btn = document.getElementById("btn");
let colorName = document.querySelector(".colorValue");

let colors = ["green","blue","orange","red","black"];
function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}
btn.addEventListener("click",function(){
    let random = getRandomColor();
    document.body.style.backgroundColor = colors[random];
    colorName.textContent= colors[random]
    console.log("button clicked");
    });
