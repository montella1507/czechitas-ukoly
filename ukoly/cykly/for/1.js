/*
ZADANI

Nechte uzivatele zadat 2 cisla, ktere znaci dolni a horni mez na ciselne ose celych cisel - vcetne, pokud tedy zada 3 a 7, uvazujme cisla 3, 4, 5, 6, 7. Vypište pomocí FOR cyklu.


*/

// Načteme dolní a horní mez
let dolni = Number(prompt('Dolni mez:'));
let horni = Number(prompt('Horni mez:'));

// projíždíme čísla
for (let i = dolni; i <= horni; i++) {
  console.log(i);
}
