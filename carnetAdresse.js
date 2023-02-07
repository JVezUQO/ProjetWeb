function updateList(selected){
    myElement = document.getElementsByClassName("list-addresse")[0];
    
    for (const child of myElement.children) {
        if (child === selected){
            child.className = "selected";
        }
        else{
            child.className = "";
        }
        
    }
    
    
}