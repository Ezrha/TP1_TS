// fonction qui prendra en paramètre un nombre indéfini de températures.
// Votre fonction retournera la valeur la plus proche de 0 La phrase à afficher sera : 
// "La température la plus proche de 0 est de X degrés", 
// et ne devra pas être gérée par la fonction mais par le console.log

// Math.abs() ==> retourne la valeur absolue d'un nombre

/**
 * Retourne la température la plus proche de zéro
 * @param temperatures liste de temperatures
 * @returns temperature
 */
function temperaturePlusProcheDeZero(...temperatures:number[]) : number {
    let plusProcheDeZero = temperatures[0];
    for (let temperature of temperatures) {
        if (Math.abs(temperature) < Math.abs(plusProcheDeZero)) {
            plusProcheDeZero = temperature
        }
    }
    return plusProcheDeZero;
}
console.log(temperaturePlusProcheDeZero(11, 82, 1, -1, 6, -8, -9, 18, -30));