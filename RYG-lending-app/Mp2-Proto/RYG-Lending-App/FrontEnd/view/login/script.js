// Function to register a user
function registerUser() {
  // Get user input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('register-email').value;
  const mobile = document.getElementById('mobile-number').value;
  const password = document.getElementById('register-password').value;

  // Create a user object
  const user = {
    firstName,
    lastName,
    email,
    mobile,
    password
  };

  // Send a POST request to the backend
  fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      if (data.status === true) {
        // Registration successful, you can redirect or display a success message
        console.log(data.message);
      } else {
        // Registration failed, display an error message
        console.error(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Add an event listener to the registration form submit button
document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  registerUser(); // Call the registration function
});


function loginUser() {
  const email = document.getElementById('floatingInput').value;
  const password = document.getElementById('floatingPassword').value;

  const user = {
    email,
    password,
  };

  fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === true) {
        // Login successful, you can redirect or display a success message
        console.log(data.message);
        window.location.href = 'collectors-portal.html'; // Redirect to the dashboard or any other page
      } else {
        // Login failed, display an error message
        console.error(data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  loginUser(); // Call the login function
});
