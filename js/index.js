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
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let slide = '';

for (let i= 0; i<images.length; i++){
    slide += `
    <div class="slide">
        <img src='./img/${images[i]}.webp' alt='image-${images[i]}'>     
    </div>
    `;
}

wrapper.innerHTML += slide;
let current = 0;

const slides = document.querySelectorAll('.slide');
slides[current].classList.add('active');

let button = '';

next.addEventListener('click', () => {
    button = 'next';
    console.log('next');
   
});
prev.addEventListener('click', () => {
    button = 'prev';
 
});

/* function changeImg(){
    if (current < images.length && current > 0) {
       if( button === 'next' ){
        slides[current].classList.remove('active');
        current++;
        slides[current].classList.add('active');
    } 
       }
       
   
} */