/*
 Zadání

 Nechte uživatele zadávat čísla do pole, dokud nezadá číslo 0. Po dokončení zadávání, nalezněte v poli nejmenší zadané číslo
- prompt ve whileu.. lze vyuzit predchozi udelany kod.. 
- po dozadavani pomoci FOR cyklu projedte cele pole a najdete nejmensi...
- pri hledani nejmensiho si predpokladejte ze hned prvni prvek je nejmensi
*/


// Načteme první číslo
let cislo = Number(prompt("Zadej:"));

// Vytvoříme si prázdné pole
let arr = [];


// Dokud nezadá 0
while (cislo != 0) {
  // přidáme zadané číslo do pole
   arr.push(cislo);
   // Načteme nové
   cislo = Number(prompt("Zadej:"));
}

// předpokládáme, že nejmenší číslo je to první
let nejmensi = arr[0];

// projíždíme celé pole
for (let i = 0; i < arr.length; i++) {

  // pokud je "aktuální číslo v poli" menší než prozatimní "nejmenší" tak nejmenší přenastavíme
 if (nejmensi > arr[i]) {
    nejmensi = arr[i];
 }
}

console.log("Nejmenší číslo je: " + nejmensi );