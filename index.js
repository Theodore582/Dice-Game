var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber1 + ".png";
var Img1 = document.querySelectorAll("img")[0];
Img1.setAttribute("src",randomImage);
 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice"+ randomNumber2 + ".png";
var Img2 = document.querySelectorAll("img")[1];
Img2.setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 wins!!!!"
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 wins!!!!"
} else (document.querySelector("h1").innerHTML ="DRAW!!!")