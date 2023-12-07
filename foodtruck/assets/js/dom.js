
// Déclenchement à la fin du chargement de la page
document.DOMContentLoaded = generateDoc();

function generateDoc() {
    // Variables
    let aPdts = new Array('Churros', 'Hamburger', 'Hot-dog', 'Frites', 'Tacos', 'Crêpes', 'Wombats farcis');
    let aEmps = ['Riyad', 'Mehdi', 'Singa', 'Walid', 'Salwa'];

    // Génère le document HTML via DOM
    let h1, h2, ul, li, text, attr;

    // H1
    h1 = document.createElement('h1'); // element
    h1.setAttribute('style', 'color:#00f;text-shadow:0 0 10px #999'); // attribute
    h1.style.fontFamily = 'Verdana, Arial, sans-serif';
    text = document.createTextNode('Riyad Foodtruck !'); //text
    h1.appendChild(text);
    document.body.appendChild(h1);

    // H2 : factorisation
    document.body.appendChild(document.createElement('h2').appendChild(document.createTextNode('Nos vendeurs')));

    // UL
    ul = document.createElement('ul');
    aEmps.forEach(
        function (elt) {
            ul.appendChild(document.createElement('li')).appendChild(document.createTextNode(elt));
        }
    );
    document.body.appendChild(ul);
}