const boardRental = async (event) => {
  event.stopPropagation();


  const id = document.querySelector('#surfboardrentalSelect').value
  bodyReq = { checked_out: true }
  console.log(id)
  const response = await fetch(`/api/surfboards/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(bodyReq),
    headers: { 'Content-Type': 'application/json' },
  });

  if (1) {
    console.log("Board Rented!" + JSON.stringify(event));
    document.location.replace('/rentals');
  } else {
    alert('Failed to rent surfboard.');
  }
  window.alert("🏗️ User Documentation Complete! 🏗️\n A new User has been saved!\n ")
  console.log('User Addition Exit')

}

document.querySelector('#surfboardrentalForm').addEventListener('submit', boardRental)