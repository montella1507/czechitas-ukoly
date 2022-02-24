/*
 Zadání

 Nechte uživatele zadávat čísla do pole, dokud nezadá číslo 0. 


Poté po uživateli nechte zadat hledané číslo.

Najděte v poli hledané číslo, pokud je nalezebno, vypište jeho pozici (INDEX) v poli, pokud v poli není, vypište informaci, že se ho nepovedlo nalézt.

Tipy:
- použijte základ z předchozího cvičení
- pro průchod pole budete potřebovat FOR cyklus a pak případně break
- uložte si i informaci, zda bylo číslo nalezeno, či ne, pro případnou hlášku na konci. 
*/

// Načteme první číslo
let cislo = Number(prompt('Zadej:'));

// Vytvoříme si prázdné pole
let arr = [];

// Dokud nezadá 0
while (cislo != 0) {
  // přidáme zadané číslo do pole
  arr.push(cislo);
  // Načteme nové
  cislo = Number(prompt('Zadej:'));
}
// pro debug ucely
console.log(arr);
let hledane = Number(prompt('Hledané číslo:'));
let nalezeno = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === hledane) {
    nalezeno = true;
    console.log('Hledane cislo ' + hledane + ' je na pozici: ' + i);
    break;
  }
}

if (!nalezeno) {
  console.log('Hledané číslo tam není...');
}
