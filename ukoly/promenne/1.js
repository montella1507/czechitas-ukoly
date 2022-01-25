/* 
ZADANI
Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do 
konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".

*/


// Nejdrive si vytvorim promenne 
let jmeno = "Petra";  
let vek = 34;
let vyska = 1.67; 
let vaha = 65;

// Vzorecek pro BMI je:      vaha v kilogramech  / vyska v metrech na druhou.
let bmi = vaha / (1.67 * 1.67);          // lze taky pouzit umocneni - 1.67 ** 2 

// Nyní vypíšu do konzole
console.log("Jmenuji se " + jmeno + ", je mi " + vek + " let, vazim " + vaha + " kg, měřím " + vyska + "m a moje BMI je " + bmi);

// Alternativně bych také mohl vytvořit dočasnou proměnnou a to pak vypsat
let vysledek = "Jmenuji se " + jmeno + ", je mi " + vek + " let, vazim " + vaha + " kg, měřím " + vyska + "m a moje BMI je " + bmi;
console.log(vysledek);


// Pripadne bych mohl použít tuto syntaxi pomocí "ticku"
let vysledek2 = `Jmenuji se ${jmeno}, je mi ${vek} let, vazim ${vaha} kg, měřím ${vyska}m a moje BMI je ${bmi}`;
console.log(vysledek2);