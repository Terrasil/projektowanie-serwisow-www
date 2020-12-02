"use strict"

console.log(json);
console.log("json = "+JSON.stringify(json, null, 4));

// Zadanie 1 funkcja zwrotna (callback)
// 		przykłady tworzenia funkcji zwrotnych: tutaj i tutaj,
// 		utwórz obiekt JSON, zawierający w środku co najmniej podwójnie zagnieżdżone obiekty JSON;
// 		ww. obiekty powinny zawierać w tablicach i wartościach obiektów liczby i łańcuch znakowe,
// task 1: 	wykorzystaj funkcję zwrotną do pobrania dwóch różnych wartości liczbowych (z różnych poziomów zagnieżdżenia) 
// 			z ww. obiektu JSON i wykonaj wybrane działanie na tych liczbach,
// task 2: 	wykorzystaj funkcję zwrotną do pobrania dwóch różnych łańcuchów znakowych (z różnych poziomów zagnieżdżenia) 
// 			z ww. obiektu JSON i za pomocą template strings stwórz łańcuch znakowy z użyciem obu wcześniej wyekstrahowanych 
// 			łańcuchów znakowych.

console.log("Zadanie 1");
console.log("TASK 1");

//funkcja zwracająca róznicę poiędzy liczbami (wartość bezwzględna)
function roznica(a, b){
	if(a > b){
		return a - b;
	}else{
		return b - a;
	}
}

let dataZalozeniaKsiegarni = json.ksiegarnia.data;
console.log("Data założenia księgarni: " + dataZalozeniaKsiegarni);
let dataWydaniaHobbita = json.ksiegarnia.fantasy[0].rok;
console.log("Data wydania Hobbita: " + dataWydaniaHobbita);

function ileLatTemu(funkcja){
	funkcja(dataZalozeniaKsiegarni,dataWydaniaHobbita)
}

ileLatTemu(function(a,b){
	console.log("Mineło: " + roznica(a,b))
})

console.log("TASK 2");

let nazwaKsięgarni = json.ksiegarnia.nazwa;
console.log("Nazwa księgarni: " + nazwaKsięgarni);
let nazwaDrugiejKsiazkiFantasy = json.ksiegarnia.fantasy[1].nazwa;
console.log("Nazwa drugiej książki fantasy: " + nazwaDrugiejKsiazkiFantasy);

function okazja(funkcja){
	funkcja(nazwaKsięgarni,nazwaDrugiejKsiazkiFantasy)
}

okazja(function(a,b){
	const text = `W księgarni ${a} jest przecena na ${b} -50%.`;
	console.log(text)
})


// Zdanie 2 obiekt Promise (resolve, reject) z metodami then(), catch() i finally() + axios (lub fetch)
// task 1: 	wykorzystaj obiekt Promise do pobrania dwóch różnych zasobów liczbowych i napisz funkcję wykonującą 
// 			wybrane działanie na tych liczbach,
// task 2: 	wykorzystaj obiekt Promise do pobrania dwóch różnych dowolnych zasobów i napisz funkcję tworzącą 
// 			z nich nowy obiekt,
// 	należy pamiętać o obsłudze wszystkich pięciu metod obiektu Promise,
// 	do pobierania zasobów należy wykorzystać metodę fetch lub bibliotekę axios.


let postId, userId, postTitle, postBody;

fetch('https://jsonplaceholder.typicode.com/posts/17')
.then(response => response.json())
.then(postData => {
	postId = postData.id;
	userId = postData.userId;
	postTitle = postData.title;
	postBody = postData.body;
})
.catch(function(error){console.error(error)})
.finally(function(){
	console.log("Załadowano Post")
	console.log("ID: " + postId)
	console.log("UserID: " + userId)
	console.log("Title: " + postTitle)
	console.log("Body: " + postBody)
})

console.log("TASK 1");

function power(base, exponent) {
	var result = 1;
	if(exponent == undefined){
		exponent = 2;
	}
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}

function getPost(getId){
	return new Promise((resolve, reject) => {
		if (getId == userId){
			resolve(power(userId, postId))
		}else{
			reject('Nie znaleziono postu od podanego uzytkownika!')
		}
	});
}
//oczekiwanie na odebranie danych 0.5s
setTimeout(() => {
	console.log("Zadanie 2 task1")

	getPost(userId).then(data => console.log('ID Użytkownika do potęgi ID Postu to: ', data));
	getPost(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
	getPost(userId).finally(() => console.log('Koniec'));	  
}, 500);

console.log("TASK 2");

function newObject(title, body) {
	var object = { 
		nazwa: title, 
		opis: body 
	};
	return object;
}   

function getPostWithCreateNewObject(getId) {
	return new Promise((resolve, reject) => {
		if (getId == userId) {
			resolve(newObject(postTitle, postBody));
		} else {
			reject('Nie znaleziono postu od podanego uzytkownika! Nie można stworzyć nowego objektu!')
		}
	});
}

//oczekiwanie na odebranie danych 1s
setTimeout(() => {
	console.log("Zadanie 2 task2");
	
	getPostWithCreateNewObject(userId).then(data => console.log('Tworzenie nowego objektu z pobranych danych postu użytkownika: ', data));
	getPostWithCreateNewObject(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
	getPostWithCreateNewObject(userId).finally(() => console.log('Koniec'));	  
}, 1000);


// Zdanie 3 async/await + fetch (lub axios)
// task 1: jak wyżej, [? z Promise - nie było wspomniane na laboratoriach ?]
// task 2: jak wyżej, [? z Promise - nie było wspomniane na laboratoriach ?]
// 	należy stworzyć funkcje wykorzystujące składnię async/await,
// 	do pobierania zasobów należy wykorzystać metodę fetch lub bibliotekę axios.


var url = 'https://jsonplaceholder.typicode.com/posts/13';

async function asyncAndAwait(url) {
	let response = await fetch(url);
	if (response.ok) {
		var objectJSON = await response.json();
		postId = objectJSON.id;
		userId = objectJSON.userId;
		postTitle = objectJSON.title;
		postBody = objectJSON.body;
		
		console.log("TASK 1");
		getPost(userId).then(data => console.log('ID Użytkownika do potęgi ID Postu to: ', data));
		getPost(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPost(userId).finally(() => console.log('Koniec asyncAndAwait Task 1'));
		
		console.log("TASK 2");
		getPostWithCreateNewObject(userId).then(data => console.log('Tworzenie nowego objektu z pobranych danych postu użytkownika: ', data));
		getPostWithCreateNewObject(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPostWithCreateNewObject(userId).finally(() => console.log('Koniec asyncAndAwait Task 2'));	  
	}
}

//oczekiwanie na odebranie danych 1.5s
setTimeout(() => {
	console.log("Zadanie 3");

	asyncAndAwait(url);
}, 1500);    


// Zdanie 4 Zapytania AJAX
// task 1: jak w pkt. 2 i 3,
// task 2: jak w pkt. 2 i 3.
// należy obsłużyć sukces zapytania (właściwość ‘onload’ obiektu XHR),
// należy obsłużyć błąd zapytania (właściwość ‘onerror’ obiektu XHR).

let newUrl = 'https://jsonplaceholder.typicode.com/posts/25';

let xmlhttprequest = new XMLHttpRequest();

//oczekiwanie na odebranie danych 2s
setTimeout(() => {
	console.log("Zadanie 4");
	
	xmlhttprequest.open('GET', newUrl);

	xmlhttprequest.responseType = 'json';
	xmlhttprequest.send();

	xmlhttprequest.onload = function() {
		let objectJSON = xmlhttprequest.response;
		postId = objectJSON.id;
		userId = objectJSON.userId;
		postTitle = objectJSON.title;
		postBody = objectJSON.body;	
		
		console.log("TASK 1");
		getPost(userId).then(data => console.log('ID Użytkownika do potęgi ID Postu to: ', data));
		getPost(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPost(userId).finally(() => console.log('Koniec XMLHttpReques Task 1'));
		
		console.log("TASK 2");
		getPostWithCreateNewObject(userId).then(data => console.log('Tworzenie nowego objektu z pobranych danych postu użytkownika: ', data));
		getPostWithCreateNewObject(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPostWithCreateNewObject(userId).finally(() => console.log('Koniec XMLHttpReques Task 2'));	
	};
	xmlhttprequest.onerror = function() {
	  console.log("Error XMLHttpReques!"); 
	};
}, 2000);    


// Zdanie 5 metoda fetch
// task 1: jak w pkt. 2 i 3,
// task 2: jak w pkt. 2 i ,
// nie używamy async/await.

//oczekiwanie na odebranie danych 2.5s
setTimeout(() => {
	console.log("Zadanie 5");
	
	fetch('https://jsonplaceholder.typicode.com/posts/33')
	.then(response => response.json())
	.then(postData => {
		postId = postData.id;
		userId = postData.userId;
		postTitle = postData.title;
		postBody = postData.body;
	})
	.catch(function(error){console.error(error)})
	.finally(function(){
		getPost(userId).then(data => console.log('ID Użytkownika do potęgi ID Postu to: ', data));
		getPost(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPost(userId).finally(() => console.log('Koniec fetch Task 1'));
		
		console.log("TASK 2");
		getPostWithCreateNewObject(userId).then(data => console.log('Tworzenie nowego objektu z pobranych danych postu użytkownika: ', data));
		getPostWithCreateNewObject(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPostWithCreateNewObject(userId).finally(() => console.log('Koniec fetch Task 2'));
	})
}, 2500);


// Zdanie 6 bibliotexa axios
// task 1: jak w pkt. 2 i 3,
// task 2: jak w pkt. 2 i 3,
// obiekt axios dostępny będzie jako response.data (patrz przykłady),
// nie używamy async/await.
// wystarczy użyć plików z CDN, opisanych w linku do biblioteki i umieścić je przed końcem sekcji ‘body’.

let nextUrl = 'https://jsonplaceholder.typicode.com/posts/27';

//oczekiwanie na odebranie danych 3s
setTimeout(() => {
	console.log("Zadanie 6");
	
	axios.get(nextUrl)
	.then(function (response) {
		postId = response.data.id;
		userId = response.data.userId;
		postTitle = response.data.title;
		postBody = response.data.body;	
		console.log("TASK 1");
		getPost(userId).then(data => console.log('ID Użytkownika do potęgi ID Postu to: ', data));
		getPost(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPost(userId).finally(() => console.log('Koniec Axios Task 1'));
		
		console.log("TASK 2");
		getPostWithCreateNewObject(userId).then(data => console.log('Tworzenie nowego objektu z pobranych danych postu użytkownika: ', data));
		getPostWithCreateNewObject(9).catch(data => console.log('Błędne podanie id ID Użytkownika: ', data));
		getPostWithCreateNewObject(userId).finally(() => console.log('Koniec Axios Task 2'));
	})
	.catch(function (error) {
		console.log("Error AXIOS: ", error);
	})
	.then(function () {
		console.log("Koniec AXIOS!");
	});
}, 3000);