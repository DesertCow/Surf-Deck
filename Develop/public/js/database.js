
console.log("!@!!!InventoryFormHandler");


const inventoryFormHandler = async (event) => {
  event.preventDefault();

  console.log("%%%%InventoryFormHandler");

  const board_num = document.querySelector('#board_num').value.trim();
  const brand = document.querySelector('#brand').value.trim();

  console.log("Board Num =" + board_num + " || " + "Brand " + brand);

  const response = await fetch('/api/surfboards', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log("API!!!!!! = " + JSON.stringify(response[2]));

  if (response.ok) {
    // document.location.replace('/');
  } else {
    alert('Failed to log in.');
  }

};


//document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.inventory-form').addEventListener('submit', inventoryFormHandler);