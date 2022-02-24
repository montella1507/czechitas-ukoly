/*
 Zadání
 vytvořte staticky pomoci = [1,2,3, 4543, 4, 34]
 pole a najděte v něm nejmenší a největší číslo

 TIP:
 - využijte for cyklus
 - budete si potřebovat ukládat největší a nejmenší číslo
 - predpokladejte na zacatku ze nejmensi i nejvetsi je prvni cislo v poli (pole[0])
*/

// Načteme první číslo
let pole = [3, 4, 787, 233, -26];
let nejmensi = pole[0];
let nejvetsi = pole[0];

for (let i = 0; i < pole.length; i++) {
  if (nejmensi > pole[i]) {
    nejmensi = pole[i];
  }
}

console.log('Nejmenší číslo je: ' + nejmensi);
console.log('Největší číslo je: ' + nejvetsi);
