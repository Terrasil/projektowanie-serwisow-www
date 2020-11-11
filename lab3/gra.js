let context, controller, player, loop, ticks = 0, enemy = 0, points = 0;


context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 720;
context.canvas.width = 720;

player = {
  height:32,
  jumping:true,
  width:32,
  x:360,
  x_velocity:0,
  y:0,
  y_velocity:0
};

controller = {
    left:false,
    right:false,
    up:false,
    keyListener:function(event) {
        let key_state = (event.type == "keydown")?true:false;
        switch(event.keyCode) {

        case 37:
            controller.left = key_state;
        break;
        case 38:
            controller.up = key_state;
        break;
        case 39:
            controller.right = key_state;
        break;
        case 65:
            controller.left = key_state;
        break;
        case 32:
            controller.up = key_state;
        break;
        case 68:
            controller.right = key_state;
        break;
        case 87:
            controller.up = key_state;
        break;
        }
    }
};

loop = function() {
    ticks++;
    enemy = Math.round(ticks / 500);
    if (controller.up && player.jumping == false) {
        player.y_velocity -= 20;
        player.jumping = true;

    }
    if (controller.left) {
        player.x_velocity -= 0.5;
    }

    if (controller.right) {
        player.x_velocity += 0.5;
    }

    player.y_velocity += 0.9;
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    // if player is falling below floor line
    if (player.y > 720 - 32) {

        player.jumping = false;
        player.y = 720 - 32;
        player.y_velocity = 0;

    }

    // if player is going off the left of the screen
    if (player.x < -32) {

        player.x = 720;

    } else if (player.x > 720) {// if player goes past right boundary

        player.x = -32;
    }

    context.fillStyle = "#ffeedd";
    context.fillRect(0, 0, 720, 1080);
    context.fillStyle = "#DEB220";
    context.beginPath();
    context.rect(player.x, player.y, player.width, player.height);
    context.fill();
    context.fillStyle = "#654321";
    context.font = "30px Arial";
    context.fillText("WYNIK: "+points, 25, 50);
    context.font = "20px Arial";
    context.fillText("STEROWANIE ", 25, 90);
    context.font = "15px Arial";
    context.fillText("LEWO          [A] [🡠] ", 25, 115);
    context.fillText("PRAWO       [D] [🡢]", 25, 140);
    context.fillText("SKOK          [W] [🡡]  ", 25, 165);
    context.fillText("                  [SPAJCA] ", 25, 186);

    window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
