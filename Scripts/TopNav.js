function switchpagecarnet() {
  carnet = document.getElementsByClassName("carnetAdresseloader")[0];
  reception = document.getElementsByClassName("receptionloader")[0];
  carnet.parentElement.style.display = "block";
  
  reception.parentElement.style.display = "none";
  
}

function switchpageemail() {
  carnet = document.getElementsByClassName("carnetAdresseloader")[0];
  reception = document.getElementsByClassName("receptionloader")[0];
  carnet.parentElement.style.display = "none";
  reception.parentElement.style.display = "block";
  
}
let nb_courriel = 5;
function addButton() {
  var buttonList = document.getElementById("button-list");
  var newButton = document.createElement("li");
  newButton.innerHTML = `<button class='button'>Button ${(nb_courriel += 1)} </button>`;
  buttonList.appendChild(newButton);
}
