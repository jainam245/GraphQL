const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}" />
  <p>${desc}</p>
`;
  // show the modal
  modalOuter.classList.add('open');
}
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
