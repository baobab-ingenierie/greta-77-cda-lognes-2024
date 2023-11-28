function testStructures() {
    // Variables locales primitives
    let sCours = 'JavaScript';
    let iDuree = 3;
    let bTech = true;
    let oProf;

    // Variables locales tableau
    let aCursus = ['Java', 'UML', 'DevOps', 'JS', 10];
    let aStudents = [
        ['Singa', 'Amélie', 'Salwa'],
        ['Walid', 'Teddy', 'Mehdi', 'Cédric', 'Al-Fayed', 'Riyad', 'Nordine']
    ];

    // Variables locales objet
    let oAuj = new Date();
    console.info(oAuj);

    // Structure IF
    // Si jour de la semaine entre lundi et vendredi
    // alors afficher "Semaine" dans la console sous
    // sous forme d'info sinon afficher "Weekend" sous
    // forme de warning
    let iJourSem = oAuj.getDay();
    if (iJourSem > 0 && iJourSem < 6) {
        console.info('Semaine');
    } else {
        console.warn('Weekend');
    }

    // En ternaire
    (oAuj.getDay() > 0 && oAuj.getDay() < 6) ? console.info('Semaine 2') : console.warn('Weekend 2');

    // Structure SWITCH
    // Afficher le jour de la semaine en toutes 
    // lettres
    switch (iJourSem) {
        case 1:
            console.log('Lundi');
            break;
        case 2:
            console.log('Mardi');
            break;
        case 3:
            console.log('Mercredi');
            break;
        case 4:
            console.log('Jeudi');
            break;
        case 5:
            console.log('Vendredi');
            break;
        case 6:
            console.log('Samedi');
            break;
        case 0:
            console.log('Dimanche');
            break;
        default:
            console.log('???');
    }

    // Exploitation arrays
    console.log(aStudents.length);
    console.log(aStudents[1][3]);

    // Génération du document : à l'ancienne !
    document.write('<h1>Liste des clients</h1>');

    document.write('<h2>Les demoiselles</h2>');
    document.write('<ul>');
    let i = 0;
    while (i < aStudents[0].length) {
        document.write('<li>' + aStudents[0][i] + '</li>');
        i++;
    }
    document.write('</ul>');

    document.write('<h2>Les gentlemen</h2>');
    document.write('<ol>');
    for (i = 0; i < aStudents[1].length; i++) {
        document.write('<li>' + aStudents[1][i] + '</li>');
    }
    document.write('</ol>');
}