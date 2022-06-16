function init() {
  const p = document.querySelector('p');
  console.log(p);
  const divs = document.querySelectorAll('.item p');
  console.log(divs);
}
document.addEventListener('DOMContentLoaded', init);

const heading = document.querySelector('h2');
console.dir(heading.textContent);
