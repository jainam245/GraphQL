console.log(`It's Works`);
const item = document.querySelector('.item');

item.innerHTML = `
  <div>
    <h1>Hey How are you?</h1>;
  </div>
`;
// item.innerHTML = `<h1>Hey How are you?</h1>`;
console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = 'Cute pup';
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
console.log(typeof myHTML);

// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

// const myFragment = document.createRange();
// console.log(myFragment);

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
myFragment.querySelector('img');

document.body.appendChild(myFragment);

// const desc = `Cute pup <h1>LOVE THIS GUY</h1>`;
// const desc = `Cute pup <h1>LOVE THIS GUY</h1><style>*{display:none;}</style>`;

// const desc = `Cute Pup <img onload="alert('hacked');" src="https://picsum.photos/50"/>`;
