let randomNum1 = Math.random();
randomNum1 = Math.floor((randomNum1*6)+1);
//console.log(randomNum1)
let random1Source ="./images/dice"+randomNum1+".png";
document.querySelector(".img1").setAttribute("src",random1Source);

let randomNum2 = Math.random();
randomNum2 = Math.floor((randomNum2*6)+1);
//console.log(randomNum1)
let random2Source ="./images/dice"+randomNum2+".png";
document.querySelector(".img2").setAttribute("src",random2Source);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if(randomNum2==randomNum1){
    document.querySelector("h1").innerHTML ="Both are Same";
}
else{
    document.querySelector("h1").innerHTML ="Player 2 Win";
}

function refreshMe(){
    window.location.reload();
}