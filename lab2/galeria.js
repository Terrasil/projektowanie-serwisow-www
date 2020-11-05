
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
}

function randomImage(){
    var obrazy = ["zdjecia/ferrari.png","zdjecia/audi.png","zdjecia/tesla.png","zdjecia/mercedes.png","zdjecia/lamborgini.png","zdjecia/1.jpg","zdjecia/2.jpg","zdjecia/3.jpg","zdjecia/4.jpeg"];

    var num = Math.floor(Math.random() * (obrazy.length));
    return obrazy[num];
}
