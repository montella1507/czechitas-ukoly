/*
Zadání

Nechte uživatele zadat 3 čísla - strany trojúhelníku a zjistěte, zda jde trojúhelník sestrojit 
- trojuhelnik jde sestrojit, pokud soucet 2 nejmensich stran je > nez treti strana
- principialne jde POUZE o podminku navic do prikladu 2... 

*/

let a = Number(prompt("Zadjete stranu A:"));
let b = Number(prompt("Zadjete stranu B:"));
let c = Number(prompt("Zadjete stranu C:"));




//  trojuhelnik jde sestrojit, pokud soucet 2 nejmensich stran je > nez treti  = je potreba najit nejdelsi stranu
if (a > b) {
  // nutne porovnat jeste A s C 
  if (a > c) {
     // nejdelsi stana je A - takze soucet B+C musi byt vetsi nez A..
    if (b+c > a){
      console.log(`Trojuhelnik lze sestrojit, nejdelsi strana je A: ${a} a součet B + C je ${b+c}`);
    } else {
      console.log(`Trojuhelnik NELZE sestrojit, nejdelsi strana je A: ${a} a součet B + C je ${b+c}`);
    }
  } else {
    if (a+b > c) {
      console.log(`Trojuhelnik lze sestrojit, nejdelsi strana je C: ${a} a součet A + B je ${a+b}`);
    } else {
      console.log(`Trojuhelnik NELZE sestrojit, nejdelsi strana je C: ${a} a součet A + B je ${a+b}`);
    }
  }
 } else {
    if (b > c) {
  if (a+c > b) {
    console.log(`Trojuhelnik lze sestrojit, nejdelsi strana je B: ${b} a součet A + C je ${a+c}`);
  } else {
    console.log(`Trojuhelnik NELZE sestrojit, nejdelsi strana je B: ${b} a součet A + C je ${a+c}`);
  }
  } else {
    if (a+b > c) {
      console.log(`Trojuhelnik lze sestrojit, nejdelsi strana je B: ${C} a součet A + B je ${a+b}`);
    } else {
      console.log(`Trojuhelnik NELZE sestrojit, nejdelsi strana je B: ${C} a součet A + B je ${a+b}`);
    }
  }
 }
 