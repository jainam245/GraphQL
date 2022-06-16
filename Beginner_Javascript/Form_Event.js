const wes = document.querySelector('.wes');
wes.addEventListener('click', (event) => {
  console.log(event);
});

wes.addEventListener('click', (event) => {
  console.log('YOU CLICKED IT');
  event.preventDefault();
});

wes.addEventListener('click', (event) => {
  event.preventDefault();
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);
});

wes.addEventListener('click', (event) => {
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelectorAll('[name="signup"]');
signupForm.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
});
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.currentTarget.name);
  console.log(event.currentTarget.email);
});
