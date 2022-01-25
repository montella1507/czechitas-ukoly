/*

ZADANI
Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
- prvočíslo - dělitelné pouze 1 a samo sebou​
 zbytek po dělení: % - modulo​
- v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.


*/


function jePrvocislo(cislo) {
  // predpokladame ze je
  let jePrvocislo = true;
  // meze nastavime tak, aby to nebyla 1 a zaroven MENSI nez zadane cislo
  for (let i = 2; i < cislo; i++) {
     // pokud je cislo delitelne daným "I" - tak neni prvocislo
     if (cislo % i == 0) {
        jePrvocislo = false;
        break;
     }
    }
  return jePrvocislo;
  }
  
  let cislo = Number(prompt("zadejte cislo"));
  
  if (jePrvocislo(cislo)) {
    console.log("Číslo je prvočíslo");
  } else {
    console.log("Číslo NENÍ prvočíslo");
  }