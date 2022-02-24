/*
Nechte uživatele zadat postupně 2 osoby – jejich jméno, příjmení, věk.

Vypište která z osob je starší a o kolik let
*/


// vytvoříme prázdné objekty
let prvni = {};
let druha = {};

​
// Zadáme první osobu
prvni.jmeno = prompt("Prvni - jmeno");
prvni.vek = Number(prompt("Prvni - věk"));


// Zadáme druhou osobu
druha.jmeno =prompt("Druha - jmeno");
druha.vek = Number(prompt("Druha - vek"));


// spocteme rozdil let
let vysledek = Math.abs(prvni.vek -  druha.vek);​


// KDO MA MENSI SOUCET je starsi
if (prvni.vek > druha.vek) {
 console.log(prvni.jmeno + " je starsi o " + vysledek + " let");
} else {
 console.log(druha.jmeno + " je starsi o " + vysledek + " let");
}
