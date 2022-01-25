/* 
ZADANI
Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazjte jako absolutni hodnotu
- Math.abs()

*/



// Definice funkce - název Foo a dva argumenty - a a b
function Foo(a,b) {

  // soucet
  console.log(a + b);

  // rozdíl v absoluntí hodnotě
  console.log(Math.abs(a - b));

  // násobění
  console.log(a * b);

  // dělení
  console.log(a / b);
}


// provolání funkce - pošlu 5 "do áčka" a 44 "do béčka"
Foo(5,44);