'use strict';

const modalButton1 = document.querySelector('.modal-container .modal1');
const modalContent = document.querySelector('.modal-content');

modalButton1.addEventListener('click', event => {
  modalContent.style.visibility = 'visible';
});
