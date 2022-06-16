// const pic = document.querySelector('.nice');
// console.log(pic.classList);

// Adding class
const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);

// Removing Class
pic.classList.remove('cool');

// Toggling Class
pic.classList.add('round');

pic.classList.toggle('round');

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

// contains methods
pic.classList.contains('open');
