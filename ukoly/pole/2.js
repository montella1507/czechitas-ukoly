/*

Zadani

Vylepsete predchozi algoritmus tak, aby nebyl druhy for cyklus 
a ani samotne pole nebylo potreba..

*/



// nemusime prvky do pole vubec ukladat, staci si nam pamatovat poslední nejmenší číslo
let cislo = Number(prompt("Zadej:"));
let nejmensi = cislo;
while (cislo != 0) {
   if (nejmensi > cislo) {
    nejmensi = cislo;
   }
   cislo = Number(prompt("Zadej:"));
}