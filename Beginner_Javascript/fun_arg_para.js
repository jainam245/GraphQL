// Function Definition
function calculateBill(billAmount, textRate) {
  console.log(billAmount, textRate);
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount * (1 + textRate);
  // console.log(total);
  return total;
}

// Function call or **Run**
const wesTotal = 500;
const wesTextRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTextRate);
// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal, myTotal2);

// const firstName = 'Jainam';
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo('Jainam');
console.log(greeting);

function doctorize(firstName) {
  return `Dr. ${firstName.toUpperCase()}`;
}

function yell(firstName) {
  return `Hello ${firstName.toUpperCase()}`;
}

const display = yell('Jainam');
console.log(display);
