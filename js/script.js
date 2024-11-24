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

var btnPress = new Audio("/sounds/communications_start_transmission.mp3");

// const btnPressSound = document.getElementById("btnPressSound");
// const btnPress = document.querySelectorAll("btnPress");
// btnPress.forEach((button) => {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     btnPressSound.play();
//   });
// });

const slides = document.querySelectorAll(".ss-slides");
let currentSlide = 0;

// Function to show the slide
function showSlide(index) {
  // Ensure the index wraps around correctly
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Hide all slides
  slides.forEach((slide) => (slide.style.display = "none"));

  // Show the current slide
  slides[currentSlide].style.display = "block";
}

// Function to change the slide
function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Initial setup to show the first slide
showSlide(currentSlide);
