console.log('modal');

const modalComp = {
    modal: document.querySelector('.modal'),
    construct: function () {
        this.modal.innerHTML = `
            <div class='modal__dimmer'></div>
            <div class='modal__container'>
                <button class='btn modal__btn-close'>Close</button>
                <div class='modal__content'></div>
            </div>
        `;
    },
    variables: function () {
        modalComp.modalDimmer = document.querySelector('.modal__dimmer');
        modalComp.modalBtnClose = document.querySelector('.modal__btn-close');
        modalComp.modalContent = document.querySelector('.modal__content');
        modalComp.modalBtns = document.querySelectorAll('.modal__btn');
    },
    listeners: function () {
        modalComp.modalBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                modalComp.openModal(btn.dataset.modal);
            });
        });

        modalComp.modalDimmer.addEventListener('click', () => {
            modalComp.closeModal();
        });

        modalComp.modalBtnClose.addEventListener('click', () => {
            modalComp.closeModal();
        });
    },
    openModal: function (id) {
        const modalId = document.querySelector(`#${id}`);

        modalComp.modal.classList.add('modal--show');
        modalComp.modalContent.innerHTML = modalId.innerHTML;
        document.body.classList.add('overflow-hidden');
    },
    closeModal: function () {
        modalComp.modal.classList.remove('modal--show');
        modalComp.modalContent.innerHTML = '';
        document.body.classList.remove('overflow-hidden');
    },
    init: function () {
        this.construct();
        this.variables();
        this.listeners();
    },
};

window.addEventListener('DOMContentLoaded', () => {
    modalComp.init();
});
