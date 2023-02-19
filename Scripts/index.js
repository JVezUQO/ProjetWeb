function moduleload(){
    fetch("ListeEmail.html")
    .then(responsehtml => responsehtml.text())
    .then(html => {
        const contenthtml = html;
        console.log(contenthtml);
        const importeurhtml=document.getElementById("liste-email").innerHTML = contenthtml;
    })

    fetch("ListeEmailCSS.css")
    .then(responsecss => responsecss.text())
    .then(css => {
        const contentcss = css;
        console.log(contentcss);
        const stylelisteemail = document.getElementById("liste-email").style = contentcss;
    })
    
    
    fetch("listeEmail.js")
    .then(responsejs => responsejs.text())
    .then(js => {
        const contentjs = document.createElement("listejs");
        console.log(contentjs);
        const jslistemail = document.createElement("scripts")
        contentjs.innerHTML = js;
        document.body.appendChild(jslistemail);
        eval(contentjs);
    })
    
    }

