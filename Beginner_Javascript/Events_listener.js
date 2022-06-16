const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

butts.addEventListener('click', () => {
  console.log('IT GOT CLICKED!!!!!!!!');
});

function handleClick() {
  console.log('IT GOT CLICKED!!!!!!!!');
}
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// Removing an Event Listener

butts.addEventListener('click', () => {
  console.log('I am an anon!');
});
butts.removeEventListener('click', () => {
  console.log('I am an anon!');
});

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

// Listening to events on multiple elements
const buyButtons = document.querySelectorAll('button.buy');
function buyItem() {
  console.log('BUYING ITEM');
}
console.log(buyButtons);
console.dir(butts);

// forEach method
buyButtons.forEach((buyButton) => {
  console.log(buyButton);
});

buyButtons.forEach((buyButton) => {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});

// function handleBuyButtonClick(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }
// buyButtons.forEach(handleBuyButtonClick);

// function handleBuyButtonClick(oprah) {
//   console.log('Binding the buy button');
//   oprah.addEventListener('click', buyItem);
// }

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('You clicked it!');
  });
});

// Video 30 Targets, Bubbling, Propagation and Capture

// function handleBuyButtonClick(event) {
//   console.log('You are buying it');
// }
buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
// function handleBuyButtonClick(event) {
//   const button = event.target;
//   console.log(button.textContent);
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   console.log('You are buying it!!');
//   console.log(event.target.dataset);
//   console.log(parseFloat(event.target.dataset.price));
//   event.stopPropagation();
// }

window.addEventListener('click', () => {
  console.log('you clicked the window');
});

// Propagation
window.addEventListener('click', (event) => {
  console.log('you clicked the window');
  console.log(event.target);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
  }
  // { capture: true }
);
function handleBuyButtonClick(e) {
  const button = e.target;
  // console.log(button.textContent);
  // console.log(parseFloat(e.target.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  // stop this event from bubbling up
  e.stopPropagation();
}

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', (e) => {
  console.log(e.currentTarget);
});

// this keyword
photoEl.addEventListener('mousemove', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});

photoEl.addEventListener('mousemove', (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
