console.log("it's working");
var num= Math.floor(Math.random() * 6) + 1;
console.log(num);

var randomDice = "dice"+num+".png";

var randomImage = "/images/"+randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);


var num2 = Math.floor(Math.random() * 6) + 1;

console.log(num2);


var randomImage2 = "/images/dice" + num2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);


if (num > num2){
    document.querySelector("h1").innerHTML = "Player 1 Won !";
} else if ( num < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Won !";
} else {
    document.querySelector("h1").innerHTML = "ITS A DRAW !";
}