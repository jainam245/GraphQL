// // Global Variable
// /* eslint-disable */
// const first = 'wes';
// let second = 'bos';
// var age = 100;

// function sayHi()
// {
//     console.log('Hi!');
// }

// Function Scoping
const age = 100;

function go() {
  const age = 200;
  const hair = 'blonde';
  console.log(age);
  console.log(hair);
}
go();
 //2nd Example
function sayHi(name) {
    function yell() {
      console.log(name.toUpperCase());
    }
    yell();
  }

// Block Scoping
// if (1 === 1) {
//   var cool = true;
// }
// console.log(cool);

// let cool;
// if (1 === 1) {
//   cool = true;
// }
// console.log(cool);

function isCool(name) {
  let cool;
  if (name === 'wes') {
    cool = true;
  }
  console.log(cool);
  return cool;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}


const dog = 'snickers';
function logDog() {
  console.log(dog);
}
function go() {
  const dog = 'sunny';
  logDog();
  //logDog('sunny');
}
go();

// Lexical & Static Scoping
const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = 'sunny';
  logDog('Rufus');
}
go();