var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function calculateNextResetTime() {
  const now = new Date();
  const nextReset = new Date(now.getTime() + (24 * 60 * 60 * 1000)); 
  return nextReset.getTime();
}

let nextResetTime = localStorage.getItem('nextResetTime');
if (!nextResetTime) {
  nextResetTime = calculateNextResetTime();
  localStorage.setItem('nextResetTime', nextResetTime);
} else {
  nextResetTime = parseInt(nextResetTime, 10);
}


function updateTimer() {
  const now = new Date().getTime();
  let timeRemaining = nextResetTime - now;

  if (timeRemaining <= 0) {
    
      nextResetTime = calculateNextResetTime();
      localStorage.setItem('nextResetTime', nextResetTime);
      timeRemaining = nextResetTime - now;
  }

 
  const totalSeconds = Math.floor(timeRemaining / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.querySelector(".sevpart .two .date h1").textContent = days.toString().padStart(2, '0');
  document.querySelector(".sevpart .two .hour h1").textContent = hours.toString().padStart(2, '0');
  document.querySelector(".sevpart .two .min h1").textContent = minutes.toString().padStart(2, '0');
  document.querySelector(".sevpart .two .sec h1").textContent = seconds.toString().padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();

document.addEventListener('DOMContentLoaded', () => {

  const box = document.querySelector('.bg .box .box1 .box2');


  if (box) {
     box.addEventListener('click', () => {

          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });
      });
  } else {
      console.error('Element with class "box" not found.');
  }
});


 var box = document.querySelectorAll(".box")
 var all =  document.querySelectorAll(".tlvpart .box .para")
 all.addEventListener("click",function(){

 })