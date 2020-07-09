'use strict';


const modalAdd = document.querySelector(".modal__add"),
 addAd = document.querySelector('.add__ad'),
 modalBtnSubmit =document.querySelector('.modal__btn-submit'),
 modalSubmit = document.querySelector('.modal__submit'), // окно Подать объявление
 modalItem = document.querySelector('.modal__item'),
catalog =document.querySelector('.catalog'),
modalBtnWarning = document.querySelector('.modal__btn-warning') ;

let DataBase={};

const elementsModal =[... modalSubmit.elements]
    .filter(elem=> elem.tagName !== "BUTTON");
  
// Functions

let closeModal = function(event){
    let target = event.target;
    if (target.closest('.modal__close') || target === this ){
       this.classList.add('hide');
        modalSubmit.reset();
    
    }

}
let closeModalEsc = (event)=>{
    if (event.code === 'Escape'){
        modalItem.classList.add('hide');
        modalAdd.classList.add('hide');
        modalSubmit.reset();
        document.removeEventListener('keydown',closeModalEsc);
        
    }}



// EventListeners

modalSubmit.addEventListener('input',()=>{
    let validForm = elementsModal.every(el=> el.value);
    console.log(validForm)
    if (validForm){
        modalBtnWarning.classList.add('hide');
        modalBtnSubmit.disabled = false;
    }

})
modalSubmit.addEventListener('submit',()=>{
   event.defaultPrevented();
   let itemObj={};
   for (const el of elementsModal){
       itemObj[el.name]= el.value;
   }
   DataBase.push(itemObj);

})
addAd.addEventListener('click',()=>{
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
    document.addEventListener('keydown',closeModalEsc);
})
catalog.addEventListener('click',()=>{
    modalItem.classList.remove('hide');
    document.addEventListener('keydown',closeModalEsc);
   
})

modalAdd.addEventListener('click',closeModal);
modalItem.addEventListener('click',closeModal);




