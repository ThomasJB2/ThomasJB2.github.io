function bigImg(x) {
  x.style.height = "30rem";
  x.style.width = "45rem";
}

function normalImg(x) {
  x.style.height = "20rem";
  x.style.width = "30rem";
}

var openPage = new Audio("/sounds/delta_flyer_door.mp3");

var socialPress = new Audio("/sounds/helm_engage_clean.mp3");

const btnPressSound = document.getElementById("btnPressSound");
const btnPress = document.querySelectorAll("btnPress");
btnPress.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    btnPressSound.play();
  });
});
