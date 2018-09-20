const secondHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.second-hand');
function setDate(){
  const present = new Date();
  const seconds = present.getSeconds()*6;
  const minutes = present.getMinutes()*6;
  const hours = present.getHours()*30;
  moveHands(seconds,minutes,hours);
}

function moveHands(seconds, minutes, hours){
  secondHand.style.transform = `rotate(${seconds+90}deg)`;
  minHand.style.transform = `rotate(${minutes+90}deg)`;
  hourHand.style.transform = `rotate(${hours+90}deg)`;
  console.log(`${seconds/6} ${minutes/6} ${hours/30}`);
}

setInterval(setDate, 1000);