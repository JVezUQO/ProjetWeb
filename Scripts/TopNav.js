function switchpagecarnet() {
  alert("Test1");
}

function switchpageemail() {
  alert("Test 2");
}
let nb_courriel = 5;
function addButton() {
  var buttonList = document.getElementById("button-list");
  var newButton = document.createElement("li");
  newButton.innerHTML = `<button class='button'>Button ${(nb_courriel += 1)} </button>`;
  buttonList.appendChild(newButton);
}
