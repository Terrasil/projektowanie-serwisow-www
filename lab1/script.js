function addSection(url, description){
    var sekcja = document.createElement("section");
    sekcja.setAttribute("class", "technologia");

    var image = document.createElement("img");
    image.setAttribute("class", "ikona");
    image.setAttribute("src", url);

    var dsc = document.createElement("span");
    dsc.setAttribute("class", "opis");
    dsc.innerHTML=description;
    
    sekcja.appendChild(image);
    sekcja.appendChild(dsc);
    
    document.getElementById("tresc").appendChild(sekcja);
}