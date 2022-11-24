// Exercice 1
// Créez une fonction qui prendra un prénom en paramètre. Votre fonction affichera :
// "Bonjour " suivi du prénom dans un console.log.

// /**
//  * Cette fonction retourne "Bonjour" + le prenom passé en paramètre
//  * @param prenom
//  * Type retour de la fonction => void car elle ne retourne rien
//  */
//  function appel(prenom:string) :void  {
//     console.log("Bonjour " + prenom);
// }
// appel("Nathan");

// Exercice 2
// // Créez une fonction qui prendra deux nombres en paramètre.
// // Votre fonction affichera la somme de ces deux nombres dans un console.log
// /**
//  * Cette fonction retourne la somme de deux nombres en paramètre
//  * @param number1 => premier nombre passé en paramètre
//  * @param number2 => deuxieme nombre passé en paramètre
//  */
//  function double(number1:number, number2:number) :void{
//     console.log(number1 + number2);
// }
// double(5,3);

// Exercice 3
// Créez une fonction qui prendra en paramètre deux nombres :
// le cout de faabrication d'un objet, et son prix de vente.
// Votre fonction retournera le bénéfice de la vente de cet objet.

/**
 * Cette fonction (vente) permet de calculer le cout de fabrication d'un objet et son prix de vente en fonction des nombres passés en paramètres
 * @param coutFabrication => String
 * @param prixVente => String
 * @returns => Chaine de caractère
 */
function vente(coutFabrication: number, prixVente: number): string {
  let profit: number = prixVente - coutFabrication;
  let perte: number = coutFabrication - prixVente;
  if (prixVente <= coutFabrication) {
    return `Perte de ${perte}`;
  } else {
    return `Gain de ${profit}`;
  }
}
console.log(vente(15, 15));

// Exercice 3 (CORRECTION)
/**
 * Calcul le bénéfice ou la perte d'une transaction en fonction de son cout et de son prix de vente
 * @param coutFabrication prix de vente du produit
 * @param prixVente prix d'achat du produit
 * @returns phrase qui indique le bénéfice/perte
 */
function calculerBenefice(coutFabrication: number, prixVente: number): string {
  const benefice: number = prixVente - coutFabrication;
  if (benefice < 0) {
    return `Perte de ${-benefice}`;
  } else if (benefice > 0) {
    return `Gain de ${+benefice}`;
  } else {
    return "Vive le bénévolat";
  }
}
console.log(calculerBenefice(10, 20));
console.log(calculerBenefice(20, 10));
console.log(calculerBenefice(10, 10));

// function exemple(param:type) :type {
//     let nomVariable:type = ;
//     return "";
// }
//
// si "else" pas besoin de mettre le "return "" "
// si "else if" besoin de mettre le "return "" "
