
function send(){
    var titre_txt =document.getElementById("titreid").value;
    var receiver_txt =document.getElementById("receiverid").value;
    var content_txt =document.getElementById("contentid").value;
    //alert(titre_txt+receiver_txt+content_txt);
 
    localStorage.setItem("Titre", titre_txt);
    localStorage.setItem("destinataire", receiver_txt);
    localStorage.setItem("Contenu", content_txt);
}


