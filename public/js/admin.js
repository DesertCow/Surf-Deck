
const addboardFormHandler = async (event) => {

  event.preventDefault();




  const board_num = document.querySelector('#addboardNumber').value.trim();
  const brand = document.querySelector('#addboardBrand').value.trim();
  const board_model = document.querySelector('#addboardModel').value.trim();
  const length_inch = document.querySelector('#addboardLength').value.trim();
  const fin_setup = document.querySelector('#addboardFinsetup').value.trim();
  const fin_count = document.querySelector('#addboardFincount').value.trim();
  const location_id = document.querySelector('#addboardLocation').value.trim();
  var checked_out = Boolean.valueOf(document.getElementById('addboardCheckedout'));
  var damaged = Boolean.valueOf(document.getElementById('addboardDamaged'));
  console.log("sample" + checked_out)
  console.log("sample" + damaged)

  // if (checked_out.checked) { var checked_out = true } else { checked_out = false }
  // if (damaged.checked) { var damaged = true } else { damaged = false }





  if (board_num && brand && board_model && length_inch && fin_setup && fin_count && location_id && checked_out && damaged) {

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

// if (window.location.pathname === '/admin') {
//   document.querySelector('#addboardBtn').addEventListener('submit', addboardFormHandler);
// }
document.querySelector('#addboardForm').addEventListener('submit', addboardFormHandler)
document.querySelector('#deleteboardForm').addEventListener('submit', deleteboardFormHandler)
