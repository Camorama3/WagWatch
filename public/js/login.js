const loginFormHandler = async (event) => {
  event.preventDefault();

  const userEmail = document.querySelector('#user-email-login').value.trim();
  const userPassword = document.querySelector('#user-password-login').value.trim();
  // const sitterEmail = document.querySelector('#sitter-email-login').value.trim();
  // const sitterPassword = document.querySelector('#sitter-password-login').value.trim();

  if (userEmail && userPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to log in');
    }
  }
};

// if (sitterEmail && sitterPassword) {
//   const response = await fetch('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ sitterEmail, sitterPassword }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert('Failed to log in');
//   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-name-signup').value.trim();
  const userEmail = document.querySelector('#user-email-signup').value.trim();
  const userPassword = document.querySelector('#user-password-signup').value.trim();


  if (userName && userEmail && userPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to sign up');
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('.signup-form')
  .addEventListener('submit', loginFormHandler);
