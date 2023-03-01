if (localStorage.nombre==null){
  localStorage.nombre=0;
  let emailist= [];
  localStorage.email=emailist;
}

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
