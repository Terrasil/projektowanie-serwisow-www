"use strict"

// FUNKCJONALNOŚCI ŁADOWANIA OBRAZKA

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#zobacz').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
}
  
$("#wybor").change(function() {
    readURL(this);
})

// DODAWANIA ELEMENTÓW

/*
<div class="col-md-4">
    <div class="card mb-4 box-shadow">
        <img class="card-img-top img-responsive" src="zdjecia/mercedes.png" alt="mercedes">
        <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in quam vel sem consectetur varius in sit amet purus. Ut gravida purus nec sapien condimentum, et mollis turpis tempus. </p>
        </div>
    </div>
</div>
*/

function randomImage(){
    var obrazy = ["zdjecia/ferrari.png","zdjecia/audi.png","zdjecia/tesla.png","zdjecia/mercedes.png","zdjecia/lamborgini.png","zdjecia/1.jpg","zdjecia/2.jpg","zdjecia/3.jpg","zdjecia/4.jpeg"];

    var num = Math.floor(Math.random() * (obrazy.length));
    return obrazy[num];
}

function addElement(){
    var div_level1 = document.createElement("div");
    div_level1.setAttribute("class", "col-md-4");
    
    var div_level2 = document.createElement("div");
    div_level2.setAttribute("class", "card mb-4 box-shadow");

    div_level1.appendChild(div_level2);

    var img = document.createElement("img");
    img.setAttribute("src", randomImage());
    img.setAttribute("class", "card-img-top img-responsive");

    div_level2.appendChild(img);

    var div_level3 = document.createElement("div");
    div_level3.setAttribute("class", "card-body");

    div_level2.appendChild(div_level3);

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in quam vel sem consectetur varius in sit amet purus. Ut gravida purus nec sapien condimentum, et mollis turpis tempus.";

    div_level3.appendChild(p);
    

    var temp = document.getElementById("add").appendChild(div_level1);
}

// dodawanie usuwanie elementów - przyciski

function deleteElement(){
    $('.row').contents().last().remove();
}

$("article").click(function(){
    let kolor = '#'+Math.random().toString(16).substr(2,6);
    $("body").css("background-color", kolor );
    $("article").css("background-color",kolor );
    $(".album").css("background-color", kolor );
});


$("nav").click(function(){
    let kolor = '#'+Math.random().toString(16).substr(2,6);
    $(this).css("background-color", kolor );
    $(this).css("font-family", "Fixedsys" );
    $(this).css("font-style", "italic" );
});


$("footer").click(function(){
    let kolor = '#'+Math.random().toString(16).substr(2,6);
    $(this).css("background-color", kolor );
    $(this).css("font-family", "Fixedsys" );
    $(this).css("text-decoration", "line-through underline overline" );
});

$("p").click(function(){
    var text = prompt("Podaj nowy opis", "");
    this.innerText = text;
});

$("img").click(function(){
    alert(this.src)
});

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = " \t   "+hour + " : " + min + " : " + sec;
      var t = setTimeout(currentTime, 1000);
  }
  
  function updateTime(k) { //pilnowanie aby były dwa znaki
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();