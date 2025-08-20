const modalDiv = document.getElementById("modal");

function handleOpenModal(event) {
  console.log("click event");
  modalDiv.style = `display: block;`;
}

const modalButton = document.getElementById("modalBtn");
modalButton.addEventListener("click", handleOpenModal);

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  modalDiv.style = `display: none;`;
});
