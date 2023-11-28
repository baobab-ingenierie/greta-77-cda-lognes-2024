// https://jsdoc.app/

/**
 * Fonction qui convertit un montant HT non négatif
 * en montant TTC (Taux supportés : 2,1%, 5,5%, 10% et 20%)
 * @author Lesly Lodin <lesly@lodin.org>
 * @version 1.0
 * @param {float} montant - Montant HT et non négatif
 * @param {float} taux - Taux de TVA valant 0.021, 0.055, 0.1 ou 0.2
 * @returns {float} - Montant TTC résultant du calcul
 */
function getTTC(montant, taux = .2) {
    // Teste si les arguments ont le bon type
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != 'number') throw 'L\'un des arguments n\'a pas le bon type.';
    }

    // Teste si le montant est positif
    if (montant < 0) throw 'Le montant doit être positif.';

    // Teste si le taux est correct
    if (taux != .2 && taux != .1 && taux != .021 && taux != .055) throw 'Le taux de TVA est incorrect.';

    // Renvoie le résultat
    return montant * (1 + taux);
}