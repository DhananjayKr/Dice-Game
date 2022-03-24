
//Setting randomNumber
var randomNumber1 = Math.floor(Math.random()*6) + 1;

// Setting Left Side Images
var randomImages1 = "dice"+randomNumber1+".png";
var imageSource = "images/"+randomImages1;

var image1 = document.querySelector("img.img1");
image1.setAttribute("src" , imageSource);


//Setting randomNumber2
   var randomNumber2 = Math.floor(Math.random()*6)+ 1;
// Setting Right Side Images
var randomImage2 = "dice"+randomNumber2+".png";
var imageSource2 = "images/"+randomImage2;

var image2 = document.querySelector("img.img2");
image2.setAttribute("src", imageSource2);
//Deciding Winner
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent = "🚩 Player 1 WINS !";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").textContent =  "DRAWS";
}
else{
  document.querySelector("h1").textContent =" Player 2 Wins ! 🚩";
}
