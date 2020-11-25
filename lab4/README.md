# Projektowanie serwisów WWW
projektowanie-serwisow-www

### Autor: Patryk Morawski, 185ic_b1

Folder **/css** zawiera pliki styli:

- Plik **style.css** odpowiada za styl elementów stron.

Folder **/js** zawiera pliki odpowiedzialne za funcjonowanie gry:

- Plik **gra.js** zawiera skrypt gry.

Folder **/img** zawiera pliki graficzne wykorzystywane w grze:

- Plik **background.png** to tło strony.
- Plik **bullet.png** to obraz pocisku przeciwnika.
- Plik **enemy.png** to obraz statku przeciwnika.
- Plik **engine_bad.png** to obraz efektu silnika przeciwnika.
- Plik **engine_jet.png** to obraz efektu silnika gracza.
- Plik **kosmos.png** to ruchome tło.
- Plik **laser.png** to obraz pocisku gracza.
- Plik **meteor.png** to obraz który aktualnie nie jest wykorzystywany.
- Plik **ship.png** to obraz statku gracza.

Plik **index.html** zawiera stronę z grą.

## Strona po załadowaniu
![Strona po załadowaniu](https://i.imgur.com/R4EKU46.png)

Strona zawiera panel informacyjny po lewej strony zatytułowany "Space Shooter" gdzie opisane jest sterowanie.
Wcentrum strony wyświetlony jest **canvas** z grą i informacją że jeżeli chcemy rozpocząć grę należy wcisnąć spację.

## Strona po rozpoczęciu gry
![Strona po rozpoczęciu gry](https://i.imgur.com/Iar9aYa.png)
 
Gdy rozpoczniemy grę możemy poruszać się statkiem który w równych odstępach 0.5s automatycznie strzela. Statek znajduje się w miejscu naszego kursora. 
Co 1s pojawia się przeciwnik który przemieszcza w dół sceny strzelając co 1.5s. Kolicja gracza z pociskiem lub statkiem przeciwnika powoduje koniec gry. 
U góry sceny wyświetlony wynik który wzrasta o 1 co każdą przetrwaną sekundę. Zniszczenie przeciwnika dodaje nam 100 punktów. 
Przeciwnik jest niszczony gdy trafimy go z pocisku. Posiski nie są niszczone po kontakcie z przeciwnikiem co pozwala na pokonanie więkrzej ilości przeciwników jednym pociskiem.
Grę możemy zatrzymać przy pomocji spacji.

## Tryb debugowania
![Tryb debugowania](https://i.imgur.com/1clcf6D.png)

Po wciśnięciu przycisku **[Q]** uruchamiamy tryb debugowania który pozwala nam na zprawdzenie pozycji kursora względem elementu **<canvas>**.
Dodatkowo jesteśmy wstanie obejrzeć wizualizację detekcji kolicji. 

Zielone sfery to hitbox'y gracza i jego pocisków, za to fioletowe to hitbox'y przeciwników i ich pocisków.
Fioletowe linie to linie wyznaczające odległości między obiektami. Zielone linie to detekcja kolizji pocisków gracza z statkami przeciwników. 
Fioletowe to detekcja kolizji gracza z pociskami przeciwników. Czerwone odpowiadają za wizualizację kolizji statku gracza z statkami przeciwników. 

Kolizja działa na zasadzie obliczania odległości pomiedzy obiektami i jeżeli ich odległości są mniejsze niż suma promieni ich hitboxów to wykrywana jest kolizja.

## Strona po przegranej
![Strona po przegranej](https://i.imgur.com/GU7IN22.png)
Jeżeli wykryta będzie kolizja statku gracza to gra przechodzi w tryb przegranej (tzn. jest zatrzymana + wyświetlana jest odpowiednia informacja).
Wciśnięcie spacji powoduje odświerzenie strony.
