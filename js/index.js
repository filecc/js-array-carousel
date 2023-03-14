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

/* thumbanil */

let thumb = '';
for(let i=0;i<images.length;i++){
    thumb+= `
    <div class="thumbs ${i}">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
}
const thumbnail = document.querySelector('.thumbnails');

thumbnail.innerHTML += thumb;

const thumbs = document.querySelectorAll('.thumbs');
thumbs[current].classList.add('active');


/* thumbanil */

const next = document.querySelector("#wrapper .next");
const prev = document.querySelector("#wrapper .prev");
const fullscreen = document.querySelector('.fullscreen');

next.addEventListener("click", () => {
  removeActive(current);
  current = (current + 1) % images.length;
  addActive(current);
});

prev.addEventListener("click", () => {
  removeActive(current);
  current = (current - 1 + images.length) % images.length;
  addActive(current);
});

for(i=0;i<thumbs.length;i++){
    thumbs[i].addEventListener('click', (e) => {
        removeActive(current);
        addActive(parseInt(e.target.classList[1]));
        current = e.target.classList[1];
    })
}

fullscreen.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    document.querySelector('.fullscreen i').classList.toggle('fa-up-right-and-down-left-from-center');
    document.querySelector('.fullscreen i').classList.toggle('fa-xmark');
    modal.classList.toggle('hidden');
    modal.innerHTML = `<img src='./img/${images[current]}.webp' alt='image-${images[current]}'>`
})

function removeActive(current) {
  slides[current].classList.remove("active");
  thumbs[current].classList.remove('active');
  thumbnail.scrollTo(current * 80 + current, 0)
}
function addActive(current) {
  slides[current].classList.add("active");
  thumbs[current].classList.add('active');
  thumbnail.scrollTo(current * 80 + current, 0)
}


