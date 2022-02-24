/*
Rozšiř předešlý úkol tak, že nebude vypisovat pouze součet, ale rozepíše i, jak k němu přišel:

*/

// Je potřeba poprvé načíst číslo, ať se máme čím řídit pro první iteraci cyklu
let cislo = Number(prompt('Zadej:'));

// Akumulační součet - do něj budeme přičítat
let soucet = 0;
let vypocet = '0';

// Dokud platí podmínka že uživatel nezadal 0, tak opakujeme cyklus
while (cislo != 0) {
  console.log('Vstup:' + cislo);
  // přičteme zadané číslo do součku
  soucet += cislo;
  vypocet = vypocet + '+' + cislo;
  // vypíšeme rovnici
  console.log(vypocet + '=' + soucet);
  // znovu načteme nové číslo
  cislo = Number(prompt('Zadej:'));

  // jedeme odznovu while cyklus - další iteraci
}
