/*
Zadání

Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy vypiš NAAKUMULOVANÝ součet těchto čísel ​
*/

// Je potřeba poprvé načíst číslo, ať se máme čím řídit pro první iteraci cyklu
let cislo = Number(prompt('Zadej:'));

// Akumulační součet - do něj budeme přičítat
let soucet = 0;

// Dokud platí podmínka že uživatel nezadal 0, tak opakujeme cyklus
while (cislo != 0) {
  console.log('Vstup:' + cislo);
  // přičteme zadané číslo do součku
  soucet += cislo;
  // vypíšeme součet
  console.log('Naakumulovany soucet:' + soucet);
  // znovu načteme nové číslo
  cislo = Number(prompt('Zadej:'));

  // jedeme odznovu while cyklus - další iteraci
}

console.log('Finalni soucet:' + soucet);
