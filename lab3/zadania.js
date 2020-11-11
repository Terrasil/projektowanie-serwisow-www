"use strict"
//Zadanie 1
//Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.
//Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą console.info()

function zad1(tekst) 
{
    let liczbaLiter = tekst.length;
    let liczbaLiterTekstu = tekst.split(' ').join('').length;
    return "Liczba liter: " + liczbaLiter + " gdzie " + liczbaLiterTekstu + " to liczba liter tekstu.";
}

//Wynik zad1

console.log("Zadanie 1");
console.log('zad1("Ala ma kota")');
console.info(zad1('Ala ma kota'));

//Zadanie 2
//Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę. Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

function zad2(tablica){
    let suma = 0;
    tablica.forEach(element => {
        suma += element;
    });
    return suma;
}

//Wynik zad2

let wartosci = [5, 7, -1, 4, 2, 1.1, Math.PI];

console.log("Zadanie 2");
console.log("wartosci[" + wartosci +"]");
console.log('zad2(wartosci)');
console.info(zad2(wartosci));

//Zadanie 3
//Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
//   input -> Ala ma kota
//   output -> AlA Ma kOtA
//Dla ułatwienia spacje liczmy jako literę.


function zad3(input){
    let output = "";
    for (let i=0; i < input.length; i++) {
        output += i % 2 == 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
    }
    return output;  
}

//Wynik zad3

console.log("Zadanie 3");
console.info('zad3("Ala ma kota")');
console.info(zad3("Ala ma kota"));

//Zadanie 4
//Napisz funkcje, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami. Funkcja ma zwracać iloczyn (*) obu liczb. Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

function zad4(x , y){
    if(Number.isInteger(x) & Number.isInteger(y)){
        return x * y;
    }else{
        return false;
    }
}

//Wynik zad4

console.log("Zadanie 4");
console.log("zad4(2, -5)");
console.info(zad4(2, -5));
console.log("zad4('cztery', 2)");
console.info(zad4('cztery', 2));

//Zadanie 5
//Napisz funkcje, która przyjmuje 2 parametry:
//imię - np: Ala
//miesiac - np: styczen
//Funkcja ma zwracac:
//jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
//jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
//jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
//jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"
//Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.
//Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"

function zad5(imie, miesiac){
    let wynik = imie + " uczy się JS";
    miesiac = miesiac.toLowerCase()
    if(miesiac == "grudzien" | miesiac == "styczen" | miesiac == "luty"){
        wynik = imie + " jezdzi na sankach";
    }else if(miesiac == "marzec" | miesiac == "kwiecien" | miesiac == "maj"){
        wynik = imie + " jezdzi chodzi po kaluzach";
    }else if(miesiac == "czerwiec" | miesiac == "lipiec" | miesiac == "sierpien"){
        wynik = imie + " sie opala";
    }else if(miesiac == "wrzesien" | miesiac == "pazdziernik" | miesiac == "listopad"){
        wynik = imie + " zbiera liscie";
    }
    return wynik;
}

//Wynik zad5

console.log("Zadanie 5");
console.log('zad5("Ala", "styczen")');
console.info(zad5("Ala", "styczen"));
console.log('zad5("Ala", "mArZEc")');
console.info(zad5("Ala", "mArZEc"));
console.log('zad5("Ala", "april")');
console.info(zad5("Ala", "april"));

//Zadanie 6
//Mamy przykładowy tekst:
//const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
//Napisz funkcję, która przyjmie 2 atrybuty:
//tekst
//znak rozdziału (np. |)
//Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.
//input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin"
//Wywołaj tę funkcję przekazując do niej str z początku zadania

function zad6(str,znak){
    let podzielonyTekst = str.split(znak);
    podzielonyTekst.sort((a, b) => a.localeCompare(b));
    return podzielonyTekst.join(znak);
}

//Wynik zad6

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

console.log("Zadanie 6");
console.log('const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka"');
console.log('zad6(str,"|")');
console.info(zad6(str,"|"));

//Zadanie 7
//Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.
//Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.
//input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
//output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
//output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]

function zad7a(input){
    let temp = [];
    input.forEach(element => {
        temp.push(element.toUpperCase());
    });
    return temp
}

function zad7b(input){
    let temp = [];
    input.forEach(element => {
        temp.push(zad3(element)); //skorzystałem z funkcji w zaadaniu 3
    });
    return temp
}

//Wynik zad7

console.log("Zadanie 7");
console.log('zad7a(["Ania" , "Marcin" , "Bartek" , "Piotr"])');
console.info(zad7a(["Ania" , "Marcin" , "Bartek" , "Piotr"]));
console.log('zad7b(["Ania" , "Marcin" , "Bartek" , "Piotr"])');
console.info(zad7b(["Ania" , "Marcin" , "Bartek" , "Piotr"]));


//Zadanie 8
//Napisz funkcję checkFemale, która sprawdza przekazane do niej imię. Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie. Przykładowo:
//checkFemale("Ania") === true
//checkFemale("Marcin") === false

function checkFemale(imie){
    if(imie[imie.length - 1] == 'a'){
        return true;
    }else{
        return false;
    }
}

//Wynik zad8

console.log("Zadanie 8");
console.log('checkFemale("Ania")');
console.info(checkFemale("Ania"));
console.log('checkFemale("Marcin")');
console.info(checkFemale("Marcin"));

//Zadanie 9
//Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej. Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet. Wykorzystaj tutaj funkcję z poprzedniego zadania. Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody split(). Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko

function countWomanInTable(arr){
    let ileKobiet = 0;
    arr.forEach(element => {
        let temp = element.split(' ');
        if(checkFemale(temp[0])){
            ileKobiet++;
        }
    });
    return ileKobiet;
}

//Wynik zad9

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

console.log("Zadanie 9");
console.log(users);
console.log('countWomanInTable(users)');
console.info(countWomanInTable(users));

