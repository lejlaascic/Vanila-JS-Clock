var secondArrow= document.querySelector('.second');
var minutArrow= document.querySelector('.minut');
var hourArrow= document.querySelector('.hour')

function setDate(){
   var newDate = new Date();
   var second=newDate.getSeconds();
   var secondDegrees=((second/60)*360)+90;
   secondArrow.style.transform=`rotate(${secondDegrees}deg)`

   var minut= newDate.getMinutes();
   var minutDegrees=((minut/60)*360)+90;
   minutArrow.style.transform=`rotate(${minutDegrees}deg)`

   var hour=newDate.getHours();
   var hourDegrees=((hour/12)*360)+90;
   hourArrow.style.transform=`rotate(${hourDegrees}deg)`
}

setInterval(setDate,1000);
