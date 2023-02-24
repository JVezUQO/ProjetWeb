class CarnetDAdresse extends HTMLElement {
    connectedCallback() {
        this.setAttribute('data', 'carnetAdresse.html');
        this.setAttribute('type', 'text/html');
        this.innerHTML = '<object type="text/html" data="carnetAdresse.html" class="carnetAdresseloader"></object>'
        
    }
}
  
customElements.define("carnet-d-adresse", CarnetDAdresse);