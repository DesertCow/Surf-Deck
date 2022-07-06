

const table = new simpleDatatables.DataTable("#surfboardtableid")
const table2 = new simpleDatatables.DataTable("#usertableid")
const table3 = new simpleDatatables.DataTable("#locationtableid")
//--------------------------SURFBOARD ADMIN CONTROLS-----------------------------//

//---------------------------ADD SURFBOARD-------------------------------------//
const addboardFormHandler = async (event) => {
  event.preventDefault();

  const board_num = document.querySelector('#addboardNumber').value.trim();
  const brand = document.querySelector('#addboardBrand').value.trim();
  const board_model = document.querySelector('#addboardModel').value.trim();
  const length_inch = document.querySelector('#addboardLength').value.trim();
  const fin_setup = document.querySelector('#addboardFinsetup').value.trim();
  const fin_count = document.querySelector('#addboardFincount').value.trim();
  const location_id = document.querySelector('#addboardLocation').value.trim();
  const img = document.querySelector('#addboardImg').value.trim();
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

//---------------------------DELETE SURFBOARD-------------------------------------//
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

//---------------------------MODIFY SURFBOARD-------------------------------------//
const modifyboardFormHandler = async (event) => {
  event.preventDefault();

  let id = document.querySelector('#modifyboardId').value;
  let board_num = document.querySelector('#modifyboardNumber').value.trim().length > 0 ? document.querySelector('#modifyboardNumber').value.trim() : null;
  let brand = document.querySelector('#modifyboardBrand').value.trim().length > 0 ? document.querySelector('#modifyboardBrand').value.trim() : null;
  let board_model = document.querySelector('#modifyboardModel').value.trim().length > 0 ? document.querySelector('#modifyboardModel').value.trim() : null;
  let length_inch = document.querySelector('#modifyboardLength').value.trim().length > 0 ? document.querySelector('#modifyboardLength').value.trim() : null;
  let fin_setup = document.querySelector('#modifyboardFinsetup').value.trim().length > 0 ? document.querySelector('#modifyboardFinsetup').value.trim() : null;
  let fin_count = document.querySelector('#modifyboardFincount').value.trim().length > 0 ? document.querySelector('#modifyboardFincount').value.trim() : null;
  let location_id = document.querySelector('#modifyboardLocation').value.trim().length > 0 ? document.querySelector('#modifyboardLocation').value.trim() : null;
  let img = document.querySelector('#modifyboardImg').value.trim().length > 0 ? document.querySelector('#modifyboardImg').value.trim() : null;
  let checked_out = document.getElementById('modifyboardCheckedout').checked;
  let damaged = document.getElementById('modifyboardDamaged').checked;

  // if (board_num.length > 0 || brand.length > 0 || board_model || length_inch || fin_setup || fin_count || location_id || checked_out || damaged) {

  const bodyReq = {
    checked_out: checked_out,
    damaged: damaged,
  }

  if (board_num) { bodyReq.board_num = parseInt(board_num) }
  if (brand) { bodyReq.brand = brand }
  if (board_model) { bodyReq.board_model = board_model }
  if (length_inch) { bodyReq.length_inch = parseInt(length_inch) }
  if (fin_setup) { bodyReq.fin_setup = fin_setup }
  if (fin_count) { bodyReq.fin_count = parseInt(fin_count) }
  if (img) { bodyReq.img = img }
  if (location_id) { bodyReq.location_id = parseInt(location_id) }

  console.log(bodyReq)


  const response = await fetch(`/api/surfboards/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(bodyReq),
    headers: { 'Content-Type': 'application/json' },
  });

  window.alert("🏗️ Board Update Complete! 🏗️\n A Surfboard has been updated!\n ")

  if (1) {
    document.location.replace('/admin');
  } else {
    alert('Failed to update surfboard.');
  }
  console.log('Surfboard Update Exit')
};

//--------------------------USER ADMIN CONTROLS-----------------------------//

//--------------------------- ADD USER -------------------------------------//
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
//--------------------------- DELETE USER -------------------------------------//
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

//--------------------------LOCATION ADMIN CONTROLS-----------------------------//

//--------------------------- ADD LOCATION -------------------------------------//
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

//--------------------------- DELETE LOCATION -------------------------------------//
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

//------------------------ SUBMIT BUTTON QUERY SELECTORS ----------------------------------//
document.querySelector('#addboardForm').addEventListener('submit', addboardFormHandler)
document.querySelector('#deleteboardForm').addEventListener('submit', deleteboardFormHandler)
document.querySelector('#modifyboardForm').addEventListener('submit', modifyboardFormHandler)
document.querySelector('#adduserForm').addEventListener('submit', adduserFormHandler)
document.querySelector('#deleteuserForm').addEventListener('submit', deleteuserFormHandler)
document.querySelector('#addlocationForm').addEventListener('submit', addlocationFormHandler)
document.querySelector('#deletelocationForm').addEventListener('submit', deletelocationFormHandler)


