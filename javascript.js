const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  submitButton.disabled = true; // Disables the button after submission
  e.preventDefault(); // Prevents the form from being submitted the usual way
  // window.location.href = window.location.origin + '/success.html'; // Redirect to success page
  console.log("Form Submitted")
});