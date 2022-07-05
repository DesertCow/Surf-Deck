
console.log("!@!!!InventoryFormHandler");

const table = new simpleDatatables.DataTable("table")

// const dataTable = new DataTable("#boardTable", {
//   searchable: false,
//   fixedHeight: true,
// });

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

  console.log("API!!!!!! = " + JSON.stringify(response.body));

  if (response.ok) {
    // document.location.replace('/');
  } else {
    alert('Failed to log in.');
  }

};

const displaySurfboards = async (event) => {
  // event.preventDefault();

  console.log("DISPLAY SURFBOARDS!!!");

  // const board_num = document.querySelector('#board_num').value.trim();
  // const brand = document.querySelector('#brand').value.trim();

  const response = await fetch('/api/surfboards', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const surfboards = await response.json();

    console.log("Board Brand: " + surfboards[1].brand + " || " + "Length (in): " + surfboards[1].length_inch);



    console.log("Model = " + surfboards[3].board_model);
  } else {
    alert('Failed to get list of boards!');
  }

};




//document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// document.querySelector('.inventory-form').addEventListener('submit', inventoryFormHandler);



//displaySurfboards();