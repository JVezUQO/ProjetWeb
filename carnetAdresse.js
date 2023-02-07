function updateList(){
    myElement = document.getElementsByClassName("list-addresse")[0];
    console.log(myElement.getClass())
    for (const child of myElement.children) {
        console.log(child.getName())
    }
    
    
}