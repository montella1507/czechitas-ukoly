/*
ZADANI

Nechte uživatele zadat horní mez – číslo. Vypište všechny čísla od nuly do této horní meze VČETNĚ, které jsou sudá.
Vstup: 8
Výstup: 
2
4
6
8 
Poznamky:
- delitelnost = modulo 2 - zbytek po dělení musí být 0
*/

// Načteme dolní a horní mez
let horni = Number(prompt('Horni mez:'));

// projíždíme čísla
for (let i = 1; i <= horni; i++) {
  // Pokud je číslo dělitelné beze zbytku 2 = je sudé
  if (i % 2 == 0) {
    console.log(i);
  }
}
