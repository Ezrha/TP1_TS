// Fonction qui prendra en paramètre le nom de l'élève, suivi d'un nombre indéterminé de notes
// Votre script calculera la moyenne de l'élève, et retournera le résultat suivi d'une mention.
// Inférieur à 4 : catastrophe
// Inférieur à 10 : Insuffisant
// Inférieur à 14 : Passable
// Inférieur à 18 : Bien
// Inférieur à 20 : Très bien

// Bulletin : nom du gars, note
// Calculer Moyenne


/**
 * Verifier que la note est comprise entre 0 et 20
 * @param note note à vérifier
 * @returns true si ok
 */

 function calculerMoyenne(...notes: number[]) : number {
    let moyenne = 0;
    for (let note of notes) {
        if (verifierNote(note)) {
            moyenne += note;
        } else {
            console.log(`${note}`)
        }
    }
    return moyenne / notes.length;
}

function verifierNote(note: number) : boolean {
    if (note < 0 || note > 20) {
        return false;
        } else {
            return true;
        }
    }



/**
 * Retourne une fonction
 * @param moyenne la moyenne à vérifier
 * @returns une mention
 */
function definirMention(moyenne: number): string {
    if (moyenne < 4) {
        return "Catastrophique";
    } else if (moyenne < 10) {
        return "Insuffisant";
    } else if (moyenne < 14) {
        return "Bine";
    } else if (moyenne < 18) {
        return "Pas mal";
    } else {
        return "Bien joué"
    }
}


/**
 * Retourne le bulletin d'un eleve
 * @param nomEleve nom de l'eleve
 * @param notes notes de l'eleve
 * @returns 
 */
function bulletin(nomEleve: string, ...notes: number[]) : string {
    let moyenne: number = calculerMoyenne(...notes);
    let mention: string = definirMention(moyenne);
 return `${nomEleve} a une moyenne de ${moyenne}, son travail paye donc ${mention}`;
}

const bulletinTheodule: string = bulletin('TheoDule', 4,5,8,5)
console.log(bulletinTheodule);