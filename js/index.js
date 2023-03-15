const images = ["01", "02", "03", "04", "05"];
const wrapper = document.getElementById("wrapper");

let slide = "";
let thumb = "";

for (let i = 0; i < images.length; i++) {
  slide += `
    <div class="slide">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
  thumb += `
    <div class="thumbs ${i}">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
}

wrapper.innerHTML += slide;
const thumbnail = document.querySelector(".thumbnails");
thumbnail.innerHTML += thumb;

const slides = document.querySelectorAll(".slide");
const thumbs = document.querySelectorAll(".thumbs");
let current = 0;

addActive(current);

const next = document.querySelector("#wrapper .next");
const prev = document.querySelector("#wrapper .prev");
const fullscreen = document.querySelector(".fullscreen");

next.addEventListener("click", () => {
  changeSlide("next");
});

prev.addEventListener("click", () => {
  changeSlide("prev");
});

window.addEventListener("keydown", (e) => {
  e.key === "ArrowRight" && changeSlide("next");
  e.key === "ArrowLeft" && changeSlide("prev");
});

for (i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", (e) => {
    removeActive(current);
    addActive(parseInt(e.target.classList[1]));
    current = e.target.classList[1];
  });
}

fullscreen.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  const buttonModal =  document.querySelector(".fullscreen i");
  buttonModal.classList.toggle("fa-up-right-and-down-left-from-center");
  buttonModal.classList.toggle("fa-xmark");
  modal.classList.toggle("hidden");
  modal.innerHTML = `<img src='./img/${images[current]}.webp' alt='image-${images[current]}'>`;
});

function removeActive(current) {
  slides[current].classList.remove("active");
  thumbs[current].classList.remove("active");
  scrollThumb(current)
}
function addActive(current) {
  slides[current].classList.add("active");
  thumbs[current].classList.add("active");
  scrollThumb(current);
  fadeIn(slides[current]);
}


function changeSlide(direction) {
  removeActive(current);
  direction === "next" && (current = (current + 1) % images.length);
  direction === "prev" && (current = (current - 1 + images.length) % images.length);
  addActive(current);
}

function scrollThumb(index){
  thumbnail.scrollTo(index * 80 + index, 0);
}

function fadeIn(el) {
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 150);
}
