// Déclenchement à la fin du chargement de la page
// document.DOMContentLoaded = generateDoc();
document.addEventListener(
    'DOMContentLoaded',
    function () {
        // Construit le doc
        generateDoc();

        // Branche CLICK sur IMG
        document.getElementById('logo').addEventListener(
            'click',
            function (evt) {
                alert(evt.target.src);
            }
        )
    }
);

function generateDoc() {
    // Variables
    let aPdts = new Array('Churros', 'Hamburger', 'Hot-dog', 'Frites', 'Tacos', 'Crêpes', 'Wombats farcis');
    let aEmps = ['Riyad', 'Mehdi', 'Singa', 'Walid', 'Salwa'];

    // Génère le document HTML via DOM
    let h1, h2, ul, li, text, attr, div, img;

    // H1
    h1 = document.createElement('h1'); // element
    h1.setAttribute('style', 'color:#00f;text-shadow:0 0 10px #999'); // attribute
    h1.style.fontFamily = 'Verdana, Arial, sans-serif';
    text = document.createTextNode('Riyad Foodtruck !'); //text
    h1.appendChild(text);
    document.body.appendChild(h1);

    // IMG
    img = document.createElement('img');
    img.src = 'https://osny.fr/sites/osny/files/styles/galerie_colorbox/public/image/foodtruck.jpeg';
    img.alt = 'La camion à Riyad';
    img.style.height = '10rem';
    img.id = 'logo';
    document.body.appendChild(img);

    // H2 : factorisation
    document.body.appendChild(document.createElement('h2')).appendChild(document.createTextNode('Nos vendeurs'));

    // UL
    ul = document.createElement('ul');
    aEmps.forEach(
        function (elt) {
            ul.appendChild(document.createElement('li')).appendChild(document.createTextNode(elt));
        }
    );
    document.body.appendChild(ul);

    // H2 : factorisation
    document.body.appendChild(document.createElement('h2')).appendChild(document.createTextNode('Nos produits'));

    // DIV
    aPdts.forEach(function (elt) {
        div = document.createElement('div');
        div.setAttribute('style', 'border:solid #000 3px;margin:3px 0');
        div.textContent = elt;
        document.body.appendChild(div);
    });
}