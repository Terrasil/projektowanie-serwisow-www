function addFolder(name, description, href, ready){
    var newDir = document.createElement("a");
    newDir.setAttribute("href", href);
    if(ready){
        newDir.setAttribute("class", "laborka gotowa");
    }else{
        newDir.setAttribute("class", "laborka");
    }

    var nameElement = document.createElement("span");
    nameElement.setAttribute("class", "nazwa");
    nameElement.innerHTML=name;

    var sepElement = document.createElement("span");
    sepElement.setAttribute("class", "separator");

    var descriptionElement = document.createElement("span");
    descriptionElement.setAttribute("class", "temat");
    descriptionElement.innerHTML=description;
    
    newDir.appendChild(nameElement);
    newDir.appendChild(sepElement);
    newDir.appendChild(descriptionElement);
    
    document.body.appendChild(newDir);
}