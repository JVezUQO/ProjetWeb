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
        const stylelisteemail = document.createElement("style");
        contentcss.innerHTML = css;
        document.body.appendChild(contentcss);
    })
    
    
    fetch("listeEmail.js")
    .then(responsejs => responsejs.text())
    .then(js => {
        const contentjs = document.createElement("listejs");
        console.log(contentjs);
        contentjs.innerHTML = js;
        //document.getElementById("liste-email").appendChild(contentjs);
        eval(contentjs);
    })
    
    }

