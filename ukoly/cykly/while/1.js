/*
Zadání:

Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti nezadá číslo odlišné od 0.

Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od 0.

Po úspěšném zadání čísla, číslo vypiš.
*/

// Je potřeba poprvé načíst číslo, ať se máme čím řídit pro první iteraci cyklu
let cislo = Number(prompt("Zadej číslo odlišné od 0:"));

while (cislo == 0) {
  console.log("Prosím zadejte jiné číslo než je nula.");
   // znovu načteme nové číslo
   cislo = Number(prompt("Zadej:"));
}

console.log("Vaše zadané číslo je" )