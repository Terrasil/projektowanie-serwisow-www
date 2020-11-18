(function() {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };

        var canvas = document.getElementById('oknoGry');
        var context = canvas.getContext('2d');
        var looping = false;
		var debugging = true;
		var score = 0
        var totalSeconds = 0;
		var mouse = {
			x: 0,
			y: 0,
		}

        var img = new Image();
        img.onload = imageLoaded;
        img.src = './img/kosmos.png';

		var player = {
			hitbox:32,
			x:0,
			y:0,
			goto_x:0,
			goto_y:0,
		}

		document.addEventListener('keydown', function(event){
			//alert(event.keyCode);
			if (event.keyCode){ //spacja
                startStop();
			}
		} );

		function findObjectCoords(mouseEvent)
		{
			var obj = canvas
			var obj_left = 0;
			var obj_top = 0;
			var xpos;
			var ypos;
			while (obj.offsetParent)
			{
				obj_left += obj.offsetLeft;
				obj_top += obj.offsetTop;
				obj = obj.offsetParent;
			}
			if (mouseEvent)
			{
				xpos = mouseEvent.pageX;
				ypos = mouseEvent.pageY;
			}
			else
			{
				xpos = window.event.x + document.body.scrollLeft - 2;
				ypos = window.event.y + document.body.scrollTop - 2;
			}
			xpos -= obj_left;
			ypos -= obj_top;
			mouse.x = xpos;
			mouse.y = ypos;
		}
		document.getElementById("oknoGry").onmousemove = findObjectCoords;

        function imageLoaded() {
            draw(0);
        }

        var lastFrameTime = 0;

        function startStop() {
            looping = !looping;

            if (looping) {
                lastFrameTime = Date.now();
                requestAnimationFrame(loop);
            }
        }

        function loop() {
            if (!looping) {
                return;
            }

            requestAnimationFrame(loop);

            var now = Date.now();
            var deltaSeconds = (now - lastFrameTime) / 1000;
            lastFrameTime = now;
            draw(deltaSeconds);
        }

		function drawScore() {
			context.font = "32px Arial";
			context.fillStyle = "#0095DD";
			context.shadowColor = "#0095DD";
			context.shadowOffsetX = 0;
			context.shadowOffsetY = 0;
			context.shadowBlur = 10;
			context.fillText(score, (canvas.width/2) - (context.measureText(score).width / 2), 80);
			context.shadowOffsetX = 0;
			context.shadowOffsetY = 0;
			context.shadowBlur = 0;
		}

		function drawDebugText() {
			context.font = "16px Arial";
			context.fillStyle = "#FFFFFF";
			context.fillText("Mouse X:"+mouse.x+" Y:"+mouse.y, 24, 36);
		}
		
		function drawHitboxes(){
			context.beginPath();
			context.strokeStyle = "#FFFFFF";
			context.lineWidth   = 8;
			context.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
			context.stroke();
		}

        function draw(delta) {
            totalSeconds += delta;

            var speed = 100;
            var offset = totalSeconds * speed % img.height;

            context.drawImage(img, 0, offset-img.height);
            context.drawImage(img, 0, offset);
			
			drawScore();
			drawDebugText();
			drawHitboxes();
        }
    }());