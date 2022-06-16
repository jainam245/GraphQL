// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// // Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression

console.log(doctorize2('Jainam'));
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}

/* eslint-disable */
// function inchToCM (inches) => {
//   return inches * 2.54;
// };
const inchToCM = (inches) => inches * 2.54;

// function add(a,b = 3)
// {
//     const total = a + b;
//     return total;
// }

const add = (a,b=3) => a + b;

// returning an Objects
// function make(first,last)
// {
//     const many = {
//         name : `${first} ${last}`,
//         age : 0
//     }
//     return many;
// }

const make = (first,last) => ({name : `${first} ${last}`,age : 0 });

// IIFE - Immediately Invoked Function Expression
(function(age){
    console.log('Running the Anon Function');
    return `you are cool and age ${age}`;
})(10);

//Methods!!!
const wes = {
    name : 'Wes Bos',
    //Method!
    sayHi: function()
    {
        console.log('Hey Wes');
        return 'Hey Wes';
    },
    //Short hand Method
    yellHi : function(){
        console.log('Hey Wess');
    },
    //Arrow Function
    wisperHi: () =>
    {
        console.log('hii wess im a mouse');
    }
} 

//Callback Function
//click callback
const button = document.querySelector('.clickMe');

function handClick()
{
    console.log('Great Clicking!!');
}
button.addEventListener('click',handClick);

button.addEventListener('click',function()
{
    console.log('Nice Job!!!');
});

//Timer Callback
setTimeout(() =>{
    console.log('Done! Time Out');
},1000);
