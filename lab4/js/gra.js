(function() {
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };

	var canvas = document.getElementById('oknoGry');
	var context = canvas.getContext('2d');
	var lastFrameTime = 0;
	var looping = false;
	var lose = false;
	var debugging = false;
	var stops = -1;
	var time_point;
	var score = 0;
	var totalSeconds = 0;
	var mouse = {
		x: 0,
		y: 0,
	}

	var ply = new Image();
	ply.src = './img/ship.png';
	var engBlue = new Image();
	engBlue.src = './img/engine_jet.png';
	var bltBlue = new Image();
	bltBlue.src = './img/laser.png';
	var enm = new Image();
	enm.src = './img/enemy.png';
	var engRed = new Image();
	engRed.src = './img/engine_bad.png';
	var bltRed = new Image();
	bltRed.src = './img/bullet.png';
	var img = new Image();
	img.onload = imageLoaded;
	img.src = './img/kosmos.png';

	var player = {
		hitbox:24,
		x:250,
		y:700,
	}
	
	var playerBullets = [];
	var enemies = [];
	var enemiesBullets = [];
	

	document.addEventListener('keydown', function(event){ //obsługa klawiatury
		//alert(event.keyCode);
		if (event.keyCode == 32){ //spacja
			if(lose){
				window.location.reload(false); 
			}
			startStop();
		}if (event.keyCode == 81){ //Q
			debugging = !debugging;
		}if (event.keyCode == 88){ //X
			playerShot();
			score--;
		}
	} );

	function mouseCoords(mouseEvent)  //obliczanie współżędnych kursora względem canvasu
	{
		var obj = canvas
		var obj_left = 0;
		var obj_top = 0;
		var xpos;
		var ypos;
		while (obj.offsetParent) //pobiera <body>
		{
			obj_left += obj.offsetLeft;
			obj_top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		if (mouseEvent) 
		{	//pozycja względem strony
			xpos = mouseEvent.pageX;
			ypos = mouseEvent.pageY;
		}
		else
		{	//pozycja pozycja z uwzględnienie scroll (nadmiarowo)
			xpos = window.event.x + document.body.scrollLeft - 2;
			ypos = window.event.y + document.body.scrollTop - 2;
		}
		//końcowe obliczanie pozycji myski względem górnego lewego rogu canvas
		xpos -= obj_left;
		ypos -= obj_top;
		mouse.x = xpos;
		mouse.y = ypos;
	}
	document.getElementById("oknoGry").onmousemove = mouseCoords;

	function imageLoaded() {
		draw(0);
	}
	
	function startStop() {
		looping = !looping;
		if (looping) {
			lastFrameTime = Date.now();
			requestAnimationFrame(loop);
		}
		stops++;
	}

	function loop() {
		if(score < -time_point){ // nie pozwala wynikowi zejść poniżej zera
			score = -time_point;
		}
		if (!looping) {
			stopScreen();
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
		time_point = Math.round(totalSeconds)
		context.fillText(time_point+score, (canvas.width/2) - (context.measureText(time_point+score).width / 2), 80);
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 0;
	}
	
	function distance(x1, y1, x2, y2){
		return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
	}

	function drawDebugText() {
		if (debugging){
			context.fillStyle = "#000000";
			context.globalAlpha = 0.9;
			context.fillRect(0,0,500, 64);
			context.globalAlpha = 1.0;
			context.font = "16px Arial";
			context.fillStyle = "#FFFFFF";
			context.fillText("Mouse X:"+mouse.x+" Y:"+mouse.y, 24, 36);
		}
	}
	
	function playerShot(){
		var bullet = {
			x: player.x,
			y: player.y,
			hitbox: 5,
			v: 10,
		}
		playerBullets.unshift(bullet);
	}
	function enemyShot(e){
		var bullet = {
			x: e.x,
			y: e.y,
			hitbox: 5,
			v: 7,
		}
		enemiesBullets.unshift(bullet);
	}
	
	function enemiesShot(){
		for(let e in enemies){
			enemyShot(enemies[e])
		}
	}
	function playerShots(){
		for(let b in playerBullets){
			playerBullets[b].y -= playerBullets[b].v;
			context.drawImage(bltBlue, playerBullets[b].x - bltBlue.width/8, playerBullets[b].y, bltBlue.width/4, bltBlue.height/4);
			if (debugging){
				//hitboxes
				context.beginPath();
				context.globalAlpha = 0.5;
				context.fillStyle = "#00ff00";
				context.arc(playerBullets[b].x, playerBullets[b].y, playerBullets[b].hitbox, 0, 2 * Math.PI);
				context.fill();
				context.globalAlpha = 1.0;
				for(let e in enemies){
					//distance
					context.beginPath();
					context.lineWidth = "1";
					context.strokeStyle = "#00ff00";
					context.moveTo(playerBullets[b].x,playerBullets[b].y);
					context.lineTo(enemies[e].x, enemies[e].y);  
					context.stroke();
				}
			}
			if(playerBullets[b].y < 0){
				playerBullets.splice (playerBullets.indexOf(b), 1);
			}
			for(let e in enemies){ //kolicja pocisków gracza z przeciwnikami
				if(distance(playerBullets[b].x,playerBullets[b].y,enemies[e].x, enemies[e].y)<playerBullets[b].hitbox+enemies[e].hitbox){
					enemies.splice(enemies.indexOf(e), 1);
					score+=100;
				}
			}
		}
	}
	function enemiesShots(){
		for(let eb in enemiesBullets){
			enemiesBullets[eb].y += enemiesBullets[eb].v;
			context.drawImage(bltRed, enemiesBullets[eb].x - bltRed.width/8, enemiesBullets[eb].y-bltRed.height/4, bltRed.width/4, bltRed.height/4);
			if (debugging){
				//hitboxes
				context.beginPath();
				context.globalAlpha = 0.5;
				context.fillStyle = "#ff00ff";
				context.arc(enemiesBullets[eb].x, enemiesBullets[eb].y, enemiesBullets[eb].hitbox, 0, 2 * Math.PI);
				context.fill();
				context.globalAlpha = 1.0;
				//distance
				context.beginPath();
				context.lineWidth = "1";
				context.strokeStyle = "#ff00ff";
				context.moveTo(player.x,player.y);
				context.lineTo(enemiesBullets[eb].x, enemiesBullets[eb].y);  
				context.stroke();
			}
			if(enemiesBullets[eb].y > 2800){
				enemiesBullets.splice (enemiesBullets.indexOf(eb), 1);
			}
			//kolicja pocisków przeciwników z graczem
			if(distance(enemiesBullets[eb].x,enemiesBullets[eb].y,player.x, player.y)<enemiesBullets[eb].hitbox+player.hitbox){
				lose = true;
				startStop();
			}
		}
	}
	
	function drawPlayer(){
		context.drawImage(engBlue, player.x- engBlue.width/6, player.y + engBlue.height/4, engBlue.width/8, engBlue.height/6 * (Math.sin(totalSeconds*45)+1.75));
		context.drawImage(engBlue, player.x+ engBlue.width/24, player.y + engBlue.height/4, engBlue.width/8, engBlue.height/6 * (Math.sin(totalSeconds*45)+1.75));
		context.drawImage(ply, player.x- ply.width/4, player.y - ply.height/4, ply.width/2, ply.height/2);
		if (debugging){
			context.beginPath();
			context.globalAlpha = 0.5;
			context.fillStyle = "#00ff00";
			context.arc(player.x, player.y, player.hitbox, 0, 2 * Math.PI);
			context.fill();
			context.globalAlpha = 1.0;
		}
		player.x = mouse.x;
		player.y = mouse.y;
	}
	function drawEnemy(e){
		context.drawImage(engRed, e.x - engRed.width/16, e.y - engRed.height/6 - engRed.height/4-engRed.height/6 * (Math.sin(totalSeconds*45)+1.75), engRed.width/8, engRed.height/6 * (Math.sin(totalSeconds*45)+1.75));
		context.drawImage(enm, e.x- enm.width/4, e.y - enm.height/4, enm.width/2, enm.height/2);
		if (debugging){
			context.beginPath();
			context.globalAlpha = 0.5;
			context.fillStyle = "#ff00ff";
			context.arc(e.x, e.y, player.hitbox, 0, 2 * Math.PI);
			context.fill();
			context.globalAlpha = 1.0;
		}
	}
	function drawEnemies(){
		for(let e in enemies){
			drawEnemy(enemies[e])
			enemies[e].y += enemies[e].v;
			
			if(enemies[e].y > 1000){
				enemies.splice (enemies.indexOf(e), 1);
			}
		}
	}
	function spawnEnemies(){
		if(looping){
			var enemy = {
				x: Math.floor(Math.random() * (500 - 0)) + 0,
				y: -1000,
				hitbox: 24,
				v: 3,
			}
			enemies.unshift(enemy);
		}
	}

	function stopScreen(){
		if(!looping){
			if(lose){
				context.fillStyle = "#000000";
				context.globalAlpha = 0.9;
				context.fillRect(0,0,500, 800);
				context.globalAlpha = 1.0;
				context.font = "64px Arial";
				context.fillStyle = "#FFFFFF";
				context.fillText("PRZEGRANA", 58, 416);
				context.font = "16px Arial";
				context.fillText("Wciśnij [SPACJA]", 186, 442);
			}else{
				if(stops<0){
					context.fillStyle = "#000000";
					context.globalAlpha = 0.9;
					context.fillRect(0,0,500, 800);
					context.globalAlpha = 1.0;
					context.font = "64px Arial";
					context.fillStyle = "#FFFFFF";
					context.fillText("START", 150, 416);
					context.font = "16px Arial";
					context.fillText("Wciśnij [SPACJA]", 186, 442);
				}else{
					context.fillStyle = "#000000";
					context.globalAlpha = 0.9;
					context.fillRect(0,0,500, 800);
					context.globalAlpha = 1.0;
					context.font = "64px Arial";
					context.fillStyle = "#FFFFFF";
					context.fillText("PAUZA", 150, 416);
				}
			}
		}
	}

	function draw(delta) {
		totalSeconds += delta;

		var speed = 100;
		var offset = totalSeconds * speed % img.height;

		context.drawImage(img, 0, offset-img.height);
		context.drawImage(img, 0, offset);
		
		playerShots();
		enemiesShots()
	
		drawEnemies();
		drawPlayer();
		
		drawScore();
		drawDebugText();
		
		stopScreen();
	}
	
	setInterval(spawnEnemies, 1000);
	setInterval(enemiesShot, 750);
}());