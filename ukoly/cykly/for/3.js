/* 
ZADANI
 Prepiste tento for cyklus pomoci While cyklu

 for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) {
  console.log(i);
}


for cyklus syntaxe je:

for (co se ma stat jednou na zacatku;  ridici podminka;  co se ma stat na konci kazde iterace) {

}

*/

// for (let i = 12,...
let i = 12;
let j = 12 ** 3;

//  for (..., j = 12 ** 3; ...) {
while (i < 12 + j) {
  console.log(i);

  // for (...; i = i * 2) {
  i = i * 2;
}
