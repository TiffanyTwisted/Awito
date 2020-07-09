'use strict';


const modalAdd = document.querySelector(".modal__add"),
 addAd = document.querySelector('.add__ad');

addAd.addEventListener('click',()=>{
    modalAdd.classList.remove('hide');
})


modalAdd.addEventListener('click',(event)=>{
    let target = event.target;
    if (target.classList.contains('modal__close') || target === modalAdd){
        modalAdd.classList.add('hide');
    }
})