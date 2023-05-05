const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('a');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  if (username === '' || password === '') {
    alert('Please enter a username and password.');
  } else {
    // Perform login logic here...
    console.log('Logged in!');
  }
});
