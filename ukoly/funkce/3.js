/*

ZADANI
Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo + vypište proč není prvočíslo

*/


function jePrvocislo(cislo) {
  // predpokladame ze je
  let jePrvocislo = true;

  // ulozime si cim je delitelne
  let delitel;

  // meze nastavime tak, aby to nebyla 1 a zaroven MENSI nez zadane cislo
  for (let i = 2; i < cislo; i++) {
     // pokud je cislo delitelne daným "I" - tak neni prvocislo
     if (cislo % i == 0) {
        // je delitelne Ičkem, tak si ičko uložíme
        delitel = i;
        jePrvocislo = false;
        break;
     }
    }
    // pokud číslo není prvočíslo, vrátíme dělitele , pokud prvočíslo je, vrátíme NULL a podle toho se budeme pak řídit
    if (!jePrvocislo) {
       return delitel;
    } else {
       return null;
    }
  }
  
  let cislo = Number(prompt("zadejte cislo"));
  
  // provoláme funkci jePrvocislo a výsledek funkce si uložíme do proměnné
  let vysledek  = jePrvocislo(cislo); 

  // pokud funkce vrátíla null, je prvočíslo, jinak vrátila dělitele
  if (vysledek == null) {
    console.log("Číslo je prvočíslo");
  } else {
    console.log("Číslo NENÍ prvočíslo, protože je dělitelné číslem " + vysledek);
  }