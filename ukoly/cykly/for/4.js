// Nechte od uživatele zadat horní mez.

// Vypiště všechny čísla od 0 do této meze včetně, která jsou prvočísla.

let horniMez = Number(prompt('Zadejte horní mez'));

for (let i = 0; i <= horniMez; i++) {
  let jePrvocislo = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      jePrvocislo = false;
    }
  }
  if (jePrvocislo) {
    console.log(i);
  }
}
