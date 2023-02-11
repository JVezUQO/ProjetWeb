let nb_courriel = 5;
function addButton() {
  var buttonList = document.getElementById("button-list");
  var newButton = document.createElement("li");
  newButton.innerHTML = ` <div class="email" onclick="addButton()">
  <ul id="email-titre" class="email-titre">
    <li class="liste-Titre">Titre</li>
    <li class="liste-Contact">Contact</li>
    <li class="liste-ligneCourriel">premiere ligne du courriel...</li>
  </ul>
</div>`;
  buttonList.appendChild(newButton);
}
