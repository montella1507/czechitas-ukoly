/*
Zadání

Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru:
 a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
 b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.

 */


 // Nejdříve vyzjistím jméno od uživatele a uložím ho do proměnné
let jmeno = prompt("Jake je vase jmeno?");

// Vyzjistím věk od uživatele, pro jistotu ho přetypuje na číslo a uložím do proměnné
let vek = Number(prompt("jaky je vas vek"));


// Podmínka a výpis
if (vek < 18) {
  // pokud je mladší 18 let
 console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let a tak musíte počkat ještě ${ 18 - vek } let, než budete moci řídit auto`);
} else {
  // pokud je mu 18 a víc
 console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let a tak máte právo řídit auto`);
}