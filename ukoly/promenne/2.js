/*
Zadání

Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
- Jméno muže a ženy ​
- Rok a měsíc narození muže i ženy​
Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu z Math.abs())

*/


// vytvořím si proměnné  a nastavím je
let jmenoMuz = 'Petr';​
let jmenoZena = 'Jitka';​

let rokMuz = 1990;​
let rokZena = 2000;​

​let mesicMuz = 12;​
let mesicZena = 10;​
​

// spočtu si celkový počet měsíců pro ženu a pro muže
let pocetMesicuMuz = rokMuz * 12 + mesicMuz;​
let pocetMesicuZena = rokZena * 12 + mesicZena;​
​
// odečtu
let vysledek = pocetMesicuZena - pocetMesicuMuz;​

// Vypíšu výsledek
console.log(`${jmenoMuz} a ${jmenoZena} jsou od sebe věkově vzdáleni ${vysledek} měsíců​`);