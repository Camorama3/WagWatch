const loginFormHandler = async (event) => {
  event.preventDefault();

  const userEmail = document.querySelector('#user-owner-email-login').value.trim();
  const userPassword = document.querySelector('#user-owner-password-login').value.trim();
  const sitterEmail = document.querySelector('#sitter-email-login').value.trim();
  const sitterPassword = document.querySelector('#sitter-password-login').value.trim();

  if (userEmail && userPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};
if (sitterEmail && sitterPassword) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ sitterEmail, sitterPassword }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
