/**
 * Jeu du "C'est plus, c'est moins"
 */
function bigdil() {
    // Déclare variables
    let nbSecret, nbSaisi, nbEssais, rejouer, msg;

    // Initialise "rejouer" à VRAI
    rejouer = true;

    // Démarre le jeu
    while (rejouer) {
        // Initialise les variables
        nbSecret = Math.floor(Math.random() * 100 + 1);
        nbSaisi = 0;
        nbEssais = 0;

        // Triche : affiche le nb secret
        console.log(nbSecret);

        // Tant que nb saisi diff. nb secret
        while (nbSaisi != nbSecret) {
            // Demande au joueur de saisir un nb
            nbSaisi = prompt('Saisir un nombre entre 1 et 100 :');
            nbEssais++;

            // Lève une erreur et arrête
            // if (isNaN(nbSaisi)) {
            //     throw 'Ce n\'est pas un nombre.';
            // }

            // Compare nb saisi et nb secret
            if (isNaN(nbSaisi)) {
                alert('Ce n\'est pas un nombre.');
            } else {
                if (nbSaisi > nbSecret) {
                    alert('C\'est moins !');
                } else if (nbSaisi < nbSecret) {
                    alert('C\'est plus !');
                } else {
                    alert('Bravo, c\'est gagné en ' + nbEssais + ' essais !');
                }
            }
        }
        // Demande au joueur s'il veut rejouer
        rejouer = confirm('Rejouer ?');
    }
}