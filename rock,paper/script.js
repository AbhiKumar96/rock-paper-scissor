let play = document.getElementById("Play");
// console.log(play.id)
let winner = document.createElement("div");
winner.id = "winner";
let image_arr=["./img/img1.png","./img/img2.webp","./img/img4.jpg","./img/img5.jpg","./img/img6.jpg","./img/img7.jpg"];
let i=Math.floor(Math.random()*6);
let j=Math.floor(Math.random()*6);

while(j===i){
    i=Math.floor(Math.random()*6);
    j=Math.floor(Math.random()*6);
}
let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
pl1.style.backgroundImage = `url(${image_arr[i]})`;
pl2.style.backgroundImage = `url(${image_arr[j]})`;



const chose = {
  0: "./img/paper.jpg",
  1: "./img/rock.jpg",
  2: "./img/scissor.jpg",
};

let onclick=function () {
    // play.id="restart";
    // play = document.getElementById("restart");
    play.style.zIndex='0';
    console.log(play.id)
    let ind1 = Math.floor(Math.random() * 3);
    let ind2 = Math.floor(Math.random() * 3);
    let var1 = chose[ind1];
    let var2 = chose[ind2];
    pl1.style.backgroundImage = `url(${var1})`;
    pl2.style.backgroundImage = `url(${var2})`;
    
 document.body.appendChild(winner);
  if (ind1 === ind2) {
    winner.innerHTML = "No Winner";
    return;
  }

  if (
    (ind1 == 0 && ind2 == 1) ||
    (ind1 === 1 && ind2 === 2) ||
    (ind1 == 2 && ind2 == 0)
  )
    winner.innerHTML = "Player1 Won";
  else winner.innerHTML = "Player2 Won";

  play.removeEventListener('click',onclick)

  // console.log(im);
};

play.addEventListener('click',onclick);

let restart=document.getElementById('restart');

restart.addEventListener('click',()=>{
let i=Math.floor(Math.random()*6);
let j=Math.floor(Math.random()*6);
play.style.zIndex='2';
while(j===i){
    i=Math.floor(Math.random()*6);
    j=Math.floor(Math.random()*6);
}
let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
pl1.style.backgroundImage = `url(${image_arr[i]})`;
pl2.style.backgroundImage = `url(${image_arr[j]})`;
document.body.removeChild(winner);
play.addEventListener('click',onclick);
})

