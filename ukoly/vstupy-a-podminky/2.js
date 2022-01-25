/*
Zadání

Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".​

*/


// Nejdříve si všechny 3 čísla načtu od uživatele - nezapomenu na přetypování na číslo
let a = Number(prompt("Zadjete A:"));
let b = Number(prompt("Zadjete B:"));
let c = Number(prompt("Zadjete C:"));


// porovnávání - nejdříve 2 libovolné čísla, pak to větší s tím třetím
if (a > b) {
 // nutne porovnat jeste A s C
 if (a > c) {
   console.log("Největší číslo je A:" + a);
 } else {
  console.log("Největší číslo je C:" + c);
 }
} else {
 // nutne porovnat jeste B s C
if (b > c) {
  console.log("Největší číslo je B:" + b);
 } else {
  console.log("Největší číslo je C:" + c);
 }
}
