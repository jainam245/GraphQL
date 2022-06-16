// 7th Video Types of String
/* eslint-disable */
/*const name = 'Jainam';
const middle = 'V';
const last = 'Doshi';

const hello = 'My Name is ' + name + ". Nice to meet you .";

const html = `
<div>
<h2>${name}</h2>
<p>${hello}</p>
</div>
`;

document.body.innerHTML = html;
//console.log(html);
*/

// 8th Video Types of Number
const kids = 3;
const smarties = 20;
const eachKidGets = Math.floor(smarties / kids) ;
console.log(`Each kids gets ${eachKidGets}`);

//9th Video Types Of Object
const person = {
    first : 'Jainam',
    last : 'Doshi',
    age : 21
};

console.log(person);

// 11th Video Types of Boolean & Equality
const isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);


 age = 100; //Single Equality
 let age2 = 100;

age === 100; // Triple Equality (True)
age === age2; // Triple Equality (True)

age === 10; //Triple Equality (False)

10 == 10 ; // Double Equality (True)
"10" == 10 ; //Double Equality (True)
