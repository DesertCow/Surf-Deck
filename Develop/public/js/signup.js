const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#FullName').value.trim();
  const email = document.querySelector('#userEmail').value.trim();
  const password = document.querySelector('#userPassword').value.trim();
  const doublePassword = document.querySelector('#doubleUserPassword').value.trim();

  window.alert("Name:" + username + "\n Email:" + email + "\n Password:" + password + "\n Password 2:" + doublePassword)

  if (username && email && password && doublePassword) {

    // const response = await fetch('/api/users', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, email, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    if (1) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

//!========================= EOF =========================