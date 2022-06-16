const people = [
  { name: 'wes', cool: true, country: 'canada' },
  { name: 'Scott', cool: true, country: 'merica' },
  { name: 'snickers', cool: true, country: 'Dog Country' },
];

// console method
people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE!!');
  console.groupEnd(`${person.name}`);
});

people.forEach((person, index) => {
  if (person.name === 'wes') {
    console.error('Dumb name');
    // console.warn(person.name);
  }

  // console.log(person.name);
  // console.info(person.name);
  // console.error(person.name);
});
console.table(people);

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}

// call stack , stack trace

function greet(name) {
  return `Hello ${name}`;
}

function go() {
  const name = dectorize(greet('wes'));
  console.log(name);
}

function bootstrap() {
  console.log('starting the app!');
  go();
}

// Grabbing Elements

// Breakpoints
people.forEach((person, index) => {
  debugger; // One to one run
  console.log(person.name);
});

// Network Requests
// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

// Break on attribute
// Some setup code
