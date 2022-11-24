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
