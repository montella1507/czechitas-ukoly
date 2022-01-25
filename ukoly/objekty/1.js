/*
Zadání
Nechte uživatele zadat postupně 2 osoby – jejich jméno, rok narození a měsíc.​
Vypište která z osob je starší a o kolik měsíců.


- jde o modifikaci jednoho z prvich ukolu


*/


// vytvoříme prázdné objekty
let prvni = {};
let druha = {};

​
// Zadáme první osobu
prvni.rok = Number(prompt("Prvni - rok"));
prvni.mesic = Number(prompt("Prvni - mesic"));
prvni.jmeno = prompt("Prvni - jmeno");
​
// Zadáme druhou osobu
druha.rok = Number(prompt("Druha - rok"));
druha.mesic = Number(prompt("Druha - mesic"));
druha.jmeno = prompt("Druha - jmeno");

// spocteme pocet mesicu
let pocetMesicuPrvni = prvni.rok * 12 + prvni.mesic;​
let pocetMesicuDruha = druha.rok * 12 + druha.mesic;​
​
// vysledek
let vysledek = Math.abs(pocetMesicuPrvni  - pocetMesicuDruha);


// KDO MA MENSI SOUCET je starsi
if (pocetMesicuPrvni < pocetMesicuDruha) {
 console.log(prvni.jmeno + " je starsi o " + vysledek + " mesicu");
} else {
 console.log(druha.jmeno + " je starsi o " + vysledek + " mesicu");
}
