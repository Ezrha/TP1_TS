
// Exercice 5
// Ecrivez une fonction qui prend un paramètre un nombre indéfini de nombres. 
// Votre fonction déterminera le nombre le plus grand.
/**
 * Fonction qui retourne le plus grand nombre parmis une liste de nombres
 * @param nombres 
 * @returns 
 */
function indefini(...nombres: number[]) : number {
   let max: number = 0;
   for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] > max) {
        max = nombres[index];
    }
   }
   return max;
}
console.log(`${indefini(1,4,55822,55)}`);