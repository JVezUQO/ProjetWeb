/* custom tag CarnetDAdresse */
class CarnetDAdresse extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object type="text/html" data="carnetAdresse.html" class="carnetAdresseloader"></object>';
  }
}

/* custom tag Reception */
class Reception extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object type="text/html" data="Reception.html" class="carnetAdresseloader"></object>';
  }
}

/* custom tag Reception */
class ModCarnetAdresse extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<object type="text/html" data="modCarnetAdresse.html" class="ajouter-modifier-carnet-addresse"></object>';
  }
}

customElements.define("carnet-d-adresse", CarnetDAdresse);
customElements.define("courriel-envoyer", Reception);
customElements.define("mod-carnet-d-adresse", ModCarnetAdresse);
