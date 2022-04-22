'use strict';

const modalPopup = document.querySelector('.modal');
const hiddenModal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modalPopup.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalPopup.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  //hiddenModal.style.display = 'inline'; - asa am incercat eu, arata modalul, nu arata background
  //hiddenModal.style.display = 'block'; - merge cu block
  //cand avem de manipulate style uri, importam si exportam clase ca mai jos, nu modificam style uri ca mai sus
}

/* my approach on the spot
btnCloseModal.addEventListener('click', event => {
  modalPopup.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modalPopup.classList.add('hidden');
  overlay.classList.add('hidden');
});

const closeModel = function (closeElem) {
  closeElem.addEventListener('click', function () {
    modalPopup.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

closeModel(btnCloseModal);
closeModel(overlay);
*/

//better approch is to export the function from inside of Event listener and
//pass it as a parameter

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

window.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modalPopup.classList.contains('hidden'))
    closeModal();
});
