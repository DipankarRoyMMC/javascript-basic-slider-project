const container= document.querySelector('.slider');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter === 5){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(imgs/slider-${counter}.jpg)`;
}

function prevSlide(){
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter === 0){
        counter = 5;
    }
    counter--;
    container.style.backgroundImage =  `url(imgs/slider-${counter}.jpg)`;
}