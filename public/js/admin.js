const addboardFormHandler = async (event) => {
  event.preventDefault();



  const board_num = document.querySelector('#addboardNumber').value.trim();
  const brand = document.querySelector('#addboardBrand').value.trim();
  const board_model = document.querySelector('#addboardModel').value.trim();
  const length_inch = document.querySelector('#addboardLength').value.trim();
  const fin_setup = document.querySelector('#addboardFinsetup').value.trim();
  const fin_count = document.querySelector('#addboardFincount').value.trim();
  const location_id = document.querySelector('#addboardLocation').value.trim();
  const checked_out = document.querySelector('#addboardCheckedout').value.trim();
  const damaged = document.querySelector('#addboardDamaged').value.trim();


  if (board_num && brand && board_model && length_inch && fin_setup && fin_count && location_id && checked_out && damaged) {

    const response = await fetch('/api/surfboards/add', {
      method: 'POST',
      body: JSON.stringify({ board_num, brand, board_model, length_inch, fin_setup, fin_count, location_id, checked_out, damaged }),
      headers: { 'Content-Type': 'application/json' },
    });

    // window.alert("Sign Up Complete, A new Account has been created!\nName:" + name + "\n Email:" + email + "\n Password:" + password + "\n Password 2:" + doublePassword)
    window.alert("🏗️ Board Documentation Complete! 🏗️\n A new Surfboard has been saved!\n ")

    if (1) {
      document.location.replace('/');
    } else {
      alert('Failed to save surfboard.');
    }

  }
  console.log('Surfboard Addition Exit')
};

document.querySelector('#addboardBtn').addEventListener('submit', addboardFormHandler);