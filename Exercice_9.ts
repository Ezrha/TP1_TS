// Ecrivez une fonction qui prend en paramètre un nombre décimal.
// Votre fonction retournera le nombre de billets et de pièces nécessaires pour obtenir ce nombre.


function monnaie(nombre:number): void {
    const monnaies: number[] = [500, 200, 20, 10, 5, 2, 1, .50, .20, .10, .05, .02, .01];

    for (let monnaie of monnaies) {
        let nombreMonnaie = Math.floor(nombre / monnaie);
        if (nombreMonnaie !== 0) {
            if (monnaie >= 5) {
                console.log(`Billet de ${monnaie} : ${nombreMonnaie}`)
            } else {
                console.log(`Pièce(s) de ${monnaie}€ : ${nombreMonnaie}`)
            }
            nombre -= nombreMonnaie * monnaie;
        }
    }
}

monnaie(888.89);