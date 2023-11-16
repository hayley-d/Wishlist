const ninjaCreami = document.getElementById("product-image1");
const annepro = document.getElementById("product-image2");
const powder = document.getElementById("product-image3");
const creamiArray = ["NinjaCreami.jpeg","NinjaCreami2.jpg","NinjaCreami3.jpg","NinjaCreami4.webp"]
const anneproArray = ['annepro.jpg','annepro2.jpg','annepro3.jpg','annepro4.jpg']
const powderArray = ['powder.webp','powder2.webp','powder3.webp','powder4.webp']
var imageIndex = 0;

function changeBackground(){
    ninjaCreami.style.backgroundImage = `url(${creamiArray[imageIndex]})`;
    annepro.style.backgroundImage = `url(${anneproArray[imageIndex]})`;
    powder.style.backgroundImage = `url(${powderArray[imageIndex]})`;
    imageIndex = ((imageIndex+1)%creamiArray.length)
}

setInterval(changeBackground, 3000);

const countdown = document.getElementById("days");
const christmasDate = new Date(new Date().getFullYear(), 11, 25);
const currentDate = new Date();
const timeRemaining = christmasDate - currentDate;
const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
countdown.innerHTML = `${days} days!`;