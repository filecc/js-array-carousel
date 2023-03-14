/* fixing window height on iPhone */

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()
/* fixing window height on iPhone */

const images = ['01', '02', '03', '04', '05']
const wrapper = document.getElementById('wrapper');

let slide = '';

for (let i= 0; i<images.length; i++){
    slide += `
    <div class="slide">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
}

wrapper.innerHTML += slide;

const slides = document.querySelectorAll('.slide');
let current = 0;
slides[current].classList.add('active');

const next = document.querySelector('#wrapper .next');
const prev = document.querySelector('#wrapper .prev');



next.addEventListener('click', () => {
    if (current < images.length - 1) {
        moveForward();
    } else {
        removeActive();
        current = 0;
        addActive();
    }
    
})
prev.addEventListener('click', () => {
    if (current === 0) {
        removeActive();
        current = images.length - 1;
        addActive();
    } else {
       moveBackward();
    }
    
})


function moveForward(){
    removeActive();
    current++;
    addActive();
}

function moveBackward(){
    removeActive();
    current--;
    addActive();
}

function removeActive(){
    slides[current].classList.remove('active');
}
function addActive(){
    slides[current].classList.add('active');
}

