function moduleload(){
    fetch("ListeEmail.html")
    .then(response => response.text())
    .then(html => {
        const contenthtml = html;
        const importeur=document.getElementById("liste-email").innerHTML = contenthtml;
    })

    fetch("listeEmail.js")
    .then(response => response.text())
    .then(js => {
        const contentjs = document.createElement("listejs");
        console.log(contentjs);
        listejs.innerHTML = js;
        document.getElementById("liste-email").appendChild(listejs);
    })
    


    }

