function moduleload(){
    fetch("ListeEmailCSS.css")
    .then(responsecss => responsecss.text())
    .then(css => {
        const contentcss = css;
        //console.log(contentcss);
        const stylelisteemail = document.getElementById("liste-email").style = contentcss;
    })

    fetch("ListeEmail.html")
    .then(responsehtml => responsehtml.text())
    .then(html => {
        const contenthtml = html;
        //console.log(contenthtml);
        const importeurhtml=document.getElementById("liste-email").innerHTML = contenthtml;
    })
    
    
    fetch("listeEmail.js")
    .then(responsejs => responsejs.text())
    .then(js => {
        const contentjs = js;
        console.log(contentjs);
        
        const selection = document.getElementById("liste-email");
        const JSimporter =  document.createElement("script");
        JSimporter.src = "listeEmail.js";

        selection.appendChild(JSimporter);
    
    })
    
    }

