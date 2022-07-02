const signupFormHandler = async (event) => {
  event.preventDefault();



  const name = document.querySelector('#FullName').value.trim();
  const email = document.querySelector('#userEmail').value.trim();
  const password = document.querySelector('#userPassword').value.trim();
  const doublePassword = document.querySelector('#doubleUserPassword').value.trim();

  if (name && email && password && doublePassword) {

    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // window.alert("Sign Up Complete, A new Account has been created!\nName:" + name + "\n Email:" + email + "\n Password:" + password + "\n Password 2:" + doublePassword)
    window.alert("🏗️ Sign Up Complete! 🏗️\n A new Account has been created!\n 👨‍🏭: " + name + "\n 📧: " + email)

    if (1) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }

  }
  console.log('signUp Exit')
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

//!========================= EOF =========================