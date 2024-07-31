let btn = document.getElementById("btn");
let colorName = document.querySelector(".colorValue");
let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getRandomColor(){
  return Math.floor(Math.random()* hex.length);
}
 btn.addEventListener("click", ()=>{
    let hexcolor = "#";
    for(let i=0;i<6;i++){
        hexcolor += hex[getRandomColor()];
        console.log(hex);

        document.body.style.backgroundColor = hexcolor;
        colorName.textContent =  hexcolor;

    }
 })