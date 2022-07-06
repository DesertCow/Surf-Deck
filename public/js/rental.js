const boardRental = async (event) => {
  event.stopPropagation();

  console.log("Board Rented!" + JSON.stringify(event));


}

document.querySelector('.rentBtnEl').addEventListener('click', boardRental)