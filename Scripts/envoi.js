


function send(){
    
    
    var titre_txt =document.getElementById("titreid").value;
    var receiver_txt =document.getElementById("receiverid").value;
    var content_txt =document.getElementById("contentid").value;
    //alert(titre_txt+receiver_txt+content_txt);

    if(titre_txt.length == 0){alert("Veiller rajouter un titre")}
    if(receiver_txt.length == 0){alert("Veiller rajouter un destinataire")}
    if(content_txt.length == 0){alert("Veiller rajouter un message")}
    
    if(titre_txt.length && receiver_txt.length && content_txt.length != 0){

        document.getElementById("titreid").value = "";
        document.getElementById("receiverid").value = "";
        document.getElementById("contentid").value ="";
        alert("Message envoyé avec succès");
        

        let email = {titre:titre_txt, destinataire:receiver_txt, contenu:content_txt};
        //console.log(email)
        let value = localStorage.nombre;
        //console.log(value)
        localStorage.setItem(value,JSON.stringify(email))
        value++
        localStorage.nombre=value
        console.log(localStorage.getItem(1))
        let displaytest = Object.entries(localStorage.getItem(1))
        let strtest = JSON.stringify(displaytest)
        let parsedtest = JSON.parse(Object.entries(strtest))
        console.log(parsedtest.keys);
        //console.log(Object.values(localStorage.getItem(1)))
        //console.log(Object.values(localStorage.getItem(displaytest)))
    
    }

}

function load(){
    
}


