var randomDice1 = Math.floor((Math.random()*6)+1);
var randomDice2 = Math.floor((Math.random()*6)+1);
function randomImage(){
    document.querySelector(".img1").setAttribute("src","images/dice"+ randomDice1 +".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+ randomDice2 +".png");
}

function winners(){
    if (randomDice1>randomDice2){
        document.querySelector("h1").textContent="🚩Player 1 Wins!"
    }
    else if (randomDice1===randomDice2){
        document.querySelector("h1").textContent="Draw!"
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins!🚩"
    }
}

function reload (){
    randomImage();
    winners();
}

reload();
