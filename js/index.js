/* fixing window height on iPhone */

const appHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};
window.addEventListener("resize", appHeight);
appHeight();
/* fixing window height on iPhone */

const images = ["01", "02", "03", "04", "05"];
const wrapper = document.getElementById("wrapper");

let slide = "";

for (let i = 0; i < images.length; i++) {
  slide += `
    <div class="slide">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
}

wrapper.innerHTML += slide;

const slides = document.querySelectorAll(".slide");
let current = 0;
slides[current].classList.add("active");

const next = document.querySelector("#wrapper .next");
const prev = document.querySelector("#wrapper .prev");

next.addEventListener("click", () => {
  removeActive();
  current = (current + 1) % images.length;
  addActive();
});

prev.addEventListener("click", () => {
  removeActive();
  current = (current - 1 + images.length) % images.length;
  addActive();
});

function removeActive() {
  slides[current].classList.remove("active");
}
function addActive() {
  slides[current].classList.add("active");
}
