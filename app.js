const magazine = document.querySelector('.versions');
const magazineImages = document.querySelectorAll('.versions img');

const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');

let counter = 1;
//const size = magazineImages[0].clientWidth;
const size = 300;

magazine.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    console.log(size);
    if(counter >= magazineImages.length - 1){
        return;
    }
    magazine.style.transition = "transform 0.4s ease-in-out";
    counter++;
    magazine.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0){
        return;
    }
    magazine.style.transition = "transform 0.4s ease-in-out";
    counter--;
    magazine.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

magazine.addEventListener('transitionend', ()=>{
    if(magazineImages[counter].id === 'lastClone'){
        magazine.style.transition = "none";
        counter = magazineImages.length - 2;
        magazine.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(magazineImages[counter].id === 'firstClone'){
        magazine.style.transition = "none";
        counter = magazineImages.length - counter;
        magazine.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});