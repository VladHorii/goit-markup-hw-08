(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-backdrop]'),
    body: document.querySelector("body"),

  };
  if (refs.openModalBtn && refs.closeModalBtn) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('modal__backdrop--hidden');
    refs.body.classList.toggle("modal-open");
  }
})();