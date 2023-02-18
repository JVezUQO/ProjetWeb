function moduleload(){
    fetch("ListeEmail.html")
    .then(response => response.text())
    .then(html => {
        const contenthtml = html;
        const importeur=document.getElementById("liste-email").innerHTML = contenthtml;
    })

    fetch("ListeEmailCSS.css")
    .then(response => response.text())
    .then(css => {
        const contentcss = document.createElement("listecss");
        console.log(contentcss);
        listecss.innerHTML = css;
        document.body.appendChild(contentcss);
    })
    
    
    fetch("listeEmail.js")
    .then(response => response.text())
    .then(js => {
        const contentjs = document.createElement("listejs");
        console.log(contentjs);
        contentjs.innerHTML = js;
        //document.getElementById("liste-email").appendChild(contentjs);
        eval(contentjs);
    })
    
    }

