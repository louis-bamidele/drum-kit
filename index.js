// clicking section
var eachDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < eachDrum; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
           var buttonClick = this.innerHTML;
           soundSwitch(buttonClick);
           buttonPressed(buttonClick);
   } );
 }

// keydown section
 document.addEventListener("keydown", function(Event){
         var buttonPress = Event.key;
         soundSwitch(buttonPress);
         buttonPressed(buttonPress);
 });

// souch function section
function soundSwitch(key) {
  switch (key) {
    case "w":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
    break;
    case "a":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
    break;
    case "s":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
    break;
    case "d":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
    break;
    case "j":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
    break;
    case "k":
       var kickBass = new Audio("sounds/kick-bass.mp3");
       kickBass.play();
    break;
    case "l":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
    break;

    default: console.log(buttonClick);

  }
}
function buttonPressed(currentKey){
   var activeButton =  document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout( function(){ activeButton.classList.remove("pressed"); }, 100 );
}
 // function clickMe(i){
 //   if (i === 0) {
 //     var audio = new Audio("sounds/tom-1.mp3");
 //     audio.play();
 //     }
 //   else if (i === 1) {
 //     var audio = new Audio("sounds/tom-2.mp3");
 //   }
 //    else if (i === 2) {
 //      var audio = new Audio("sounds/snare.mp3");
 //   }
 //   else if (i === 3) {
 //     var audio = new Audio("sounds/tom-3.mp3");
 //     }
 //   else if (i === 4) {
 //     var audio = new Audio("sounds/tom-4.mp3");
 //   }
 //   else if (i === 5){
 //     var audio = new Audio("sounds/kick-bass.mp3");
 //   }
 //   else if (i === 6){
 //     var audio = new Audio("sounds/crash.mp3");
 //   }
 // }
 // function handleClick(i, click) {
 //   return clickMe();
 // }
