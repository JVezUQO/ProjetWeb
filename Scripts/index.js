function moduleload(){
    fetch("ListeEmail.html")
    .then(response => response.text())
    .then(html => {
        const content = html;
        console.log(content);
   
        const importeur=document.getElementsByTagName("liste-email").innerHTML = content;
    })

    }

