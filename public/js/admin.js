//--------------------------SURFBOARD ADMIN CONTROLS-----------------------------
const addboardFormHandler = async (event) => {
  event.preventDefault();

  const board_num = document.querySelector('#addboardNumber').value.trim();
  const brand = document.querySelector('#addboardBrand').value.trim();
  const board_model = document.querySelector('#addboardModel').value.trim();
  const length_inch = document.querySelector('#addboardLength').value.trim();
  const fin_setup = document.querySelector('#addboardFinsetup').value.trim();
  const fin_count = document.querySelector('#addboardFincount').value.trim();
  const location_id = document.querySelector('#addboardLocation').value.trim();
  var checked_out = document.getElementById('addboardCheckedout');
  var damaged = document.getElementById('addboardDamaged');

  if (board_num && brand && board_model && length_inch && fin_setup && fin_count && location_id && checked_out && damaged) {
    if (checked_out.checked == true) { var checked_out = true } else { checked_out = false }
    if (damaged.checked == true) { var damaged = true } else { damaged = false }

    const response = await fetch('/api/surfboards/add', {
      method: 'POST',
      body: JSON.stringify({ board_num, brand, board_model, length_inch, fin_setup, fin_count, location_id, checked_out, damaged }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ Board Documentation Complete! 🏗️\n A new Surfboard has been saved!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to save surfboard.');
    }
  }
  console.log('Surfboard Addition Exit')
};


const deleteboardFormHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#deleteboard').value.trim();
  if (id) {
    const response = await fetch(`/api/surfboards/delete/id/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ Board Removal Complete! 🏗️\n Target Surfboard Has Been Deleted!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to delete surfboard.');
    }

  }
  console.log('Surfboard Deletion Exit')
};

const modifyboardFormHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#modifyboardId').value.trim();
  const board_num = document.querySelector('#modifyboardNumber').value.trim();
  const brand = document.querySelector('#modifyboardBrand').value.trim();
  const board_model = document.querySelector('#modifyboardModel').value.trim();
  const length_inch = document.querySelector('#modifyboardLength').value.trim();
  const fin_setup = document.querySelector('#modifyboardFinsetup').value.trim();
  const fin_count = document.querySelector('#modifyboardFincount').value.trim();
  const location_id = document.querySelector('#modifyboardLocation').value.trim();
  var checked_out = document.getElementById('modifyboardCheckedout');
  var damaged = document.getElementById('modifyboardDamaged');

  if (id || board_num || brand || board_model || length_inch || fin_setup || fin_count || location_id || checked_out || damaged) {
    if (checked_out.checked == true) { var checked_out = true } else { checked_out = false }
    if (damaged.checked == true) { var damaged = true } else { damaged = false }
    console.log(`/api/surfboards/update/${id}`)
    const response = await fetch(`/api/surfboards/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ board_num, brand, board_model, length_inch, fin_setup, fin_count, location_id, checked_out, damaged }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ Board Update Complete! 🏗️\n A Surfboard has been updated!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to update surfboard.');
    }
  }
  console.log('Surfboard Update Exit')
};

//--------------------------USER ADMIN CONTROLS-----------------------------

const adduserFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#adduserName').value.trim();
  const email = document.querySelector('#adduserEmail').value.trim();
  const password = document.querySelector('#adduserPassword').value.trim();


  if (name && email && password) {


    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ User Documentation Complete! 🏗️\n A new User has been saved!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to save user.');
    }
  }
  console.log('User Addition Exit')
};

const deleteuserFormHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#deleteuser').value.trim();
  if (id) {
    const response = await fetch(`/api/users/delete/id/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ User Removal Complete! 🏗️\n Target User Has Been Deleted!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to delete User.');
    }

  }
  console.log('User Deletion Exit')
};

//--------------------------LOCATION ADMIN CONTROLS-----------------------------
const addlocationFormHandler = async (event) => {
  event.preventDefault();

  const city = document.querySelector('#addlocationCity').value.trim();
  const address = document.querySelector('#addlocationAddress').value.trim();
  const phonenumber = document.querySelector('#addlocationPhonenumber').value.trim();
  const hours = document.querySelector('#addlocationHours').value.trim();
  const img = document.querySelector('#addlocationImg').value.trim();


  if (city && address && hours && phonenumber && img) {


    const response = await fetch('/api/locations/add', {
      method: 'POST',
      body: JSON.stringify({ city, address, phonenumber, hours, img }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ Location Documentation Complete! 🏗️\n A new Location has been saved!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to save Location.');
    }
  }
  console.log('User Location Exit')
};

const deletelocationFormHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#deletelocation').value.trim();
  if (id) {
    const response = await fetch(`/api/locations/delete/id/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    window.alert("🏗️ Location Removal Complete! 🏗️\n Target Location Has Been Deleted!\n ")

    if (1) {
      document.location.replace('/admin');
    } else {
      alert('Failed to delete Location.');
    }

  }
  console.log('Locaiton Deletion Exit')
}
document.querySelector('#addboardForm').addEventListener('submit', addboardFormHandler)
document.querySelector('#deleteboardForm').addEventListener('submit', deleteboardFormHandler)
document.querySelector('#modifyboardForm').addEventListener('submit', modifyboardFormHandler)
document.querySelector('#adduserForm').addEventListener('submit', adduserFormHandler)
document.querySelector('#deleteuserForm').addEventListener('submit', deleteuserFormHandler)
document.querySelector('#addlocationForm').addEventListener('submit', addlocationFormHandler)
document.querySelector('#deletelocationForm').addEventListener('submit', deletelocationFormHandler)