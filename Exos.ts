// Exercice 1
// Créez une fonction qui prendra un prénom en paramètre. Votre fonction affichera :
// "Bonjour " suivi du prénom dans un console.log.

/**
 * Cette fonction retourne "Bonjour" + le prenom passé en paramètre
 * Type de paramètre => String
 * Type retour de la fonction => void car elle ne retourne rien
 */
 function appel(prenom:string) :void  {
    console.log("Bonjour " + prenom);
}
appel("Nathan");


// Exercice 2
// Créez une fonction qui prendra deux nombres en paramètre.
// Votre fonction affichera la somme de ces deux nombres dans un console.log
/**
 * Cette fonction retourne la somme de deux nombres en paramètre
 * @param number1 => number
 * @param number2 => number
 */
 function double(number1:number, number2:number) :void{
    console.log(number1 + number2);
}
double(5,3);
