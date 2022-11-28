// Ecrivez une fonction qui prendra en paramètre deux nombres et un opérateur (+, -, *,/). 
// Votre fonction retournera le résultat de l'opération sous forme de nombre.

function calculSimple(nombre1:number, nombre2:number, operateur:string) : number {

    return eval(`${nombre1} ${operateur} ${nombre2}`);
}