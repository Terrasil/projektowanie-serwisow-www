window.oncontextmenu = function () { return false; } 
document.onkeydown = function (e) { if (window.event.keyCode == 123 || e.button==2) return false; } 

function addFolder(name, description, href, img, ready){
    var newDir = document.createElement("a");
    newDir.setAttribute("href", href);
    if(ready){
        newDir.setAttribute("class", "laborka gotowa");
    }else{
        newDir.setAttribute("class", "laborka");
    }
    if(img){
        newDir.setAttribute("style", 'background-image:url("'+img+'");');
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