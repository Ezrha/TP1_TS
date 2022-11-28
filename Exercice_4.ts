/**
 * Fonction qui retourne le nombre le plus grand
 * @param num1 number1
 * @param num2 number2
 * @param num3 number3
 * @returns le nombre le plus grand
 */
// Exercice 4
// Créer une fonction qui prendra 3 nombres en paramètre.
// Votre fonction retournera le nombre de la plus grande valeur dans une phrase.
function lePlusGrand(num1: number, num2: number, num3: number): string {
  let tab: number[] = [num1, num2, num3];
  let plusGrand: number = tab[0];
  for (let index = 1; index <= tab.length; index++) {
    if (plusGrand < tab[index]) {
      plusGrand = tab[index];
    } 
  }
  return `Le plus grand nombre est ${plusGrand}`;
}
console.log(lePlusGrand(15,78,6));


// Exercice 4 (Correction)
function plusGrandNombre(nombre1: number, nombre2: number, nombre3: number): string {
  let plusGrandNombre: number = nombre1;
  if (nombre2 > plusGrandNombre) {
    plusGrandNombre = nombre2;
  } else if (plusGrandNombre < nombre3) {
    plusGrandNombre = nombre3;
  }
  return `Le plus grand nombre est ${plusGrandNombre}`;
}
console.log(plusGrandNombre(3,8,90));