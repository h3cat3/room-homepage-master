document.addEventListener('DOMContentLoaded', () => {
const mainSections = document.querySelectorAll('.main');
const leftBtn = document.querySelectorAll('.left-btn');
const rightBtn = document.querySelectorAll('.right-btn');
const opemMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const overlay = document.querySelector('.overlay');

opemMenuBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.classList.add('page-down');
});

closeMenuBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.classList.remove('page-down');
}); 

let index = 0;
leftBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    mainSections[index].classList.add('hidden');
    mainSections[index].classList.remove('page-left', 'page-right'); 
    index--;    
    if(index < 0){
        index = mainSections.length - 1;
    }
    mainSections[index].classList.remove('hidden');
    mainSections[index].classList.add('page-left');
});
});
rightBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        mainSections[index].classList.add('hidden');
        mainSections[index].classList.remove('page-left', 'page-right');    
        index++;
        if(index >= mainSections.length){
            index = 0;
        }
    mainSections[index].classList.remove('hidden');
    mainSections[index].classList.add('page-right');
});
});
});