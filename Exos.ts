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
function vente(coutFabrication:number, prixVente:number) :string {
    let profit:number = prixVente - coutFabrication;
    let perte:number = coutFabrication - prixVente;
    if (prixVente <= coutFabrication) {
       return `Perte de ${perte}`;
    } else {
        return `Gain de ${profit}`;
    };
}
console.log(vente(15,15));













// function exemple(param:type) :type {
//     let nomVariable:type = ;
//     return "";
// }
//
// si "else" pas besoin de mettre le "return "" " 
// si "else if" besoin de mettre le "return "" " 
