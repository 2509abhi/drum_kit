var lenbutton = document.querySelectorAll("button").length;
for (let i = 0; i < lenbutton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    playSound(document.querySelectorAll("button")[i].innerHTML);
    animation(document.querySelector("."+document.querySelectorAll("button")[i].innerHTML));
  });
  document.addEventListener("keypress", function(event){
        playSound(event.key);
        animation(document.querySelector("."+event.key));
  })
}
function  animation(event){
  event.classList.add("pressed");
  setTimeout(function (){
    event.classList.remove("pressed");
    
  }, 100)
}

function playSound(params) {
  switch (params) {
    case "l":
      var audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;
    case "w":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;

    default:
      console.log(params)
      break;
  }
}