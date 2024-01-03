// Au survol du titre
document.querySelector('#title').addEventListener(
    'mouseenter',
    function () {
        // this.style = 'font-weight:bold';
        this.style.fontWeight = 'bold';
        this.textContent = 'Application form';
    }
);

// En sortant du titre (avec fonctions fléchées)
document.querySelector('#title').addEventListener(
    'mouseleave',
    (e) => {
        e.target.style.fontWeight = '';
        e.target.textContent = 'Formulaire de candidature';
    }
);

// Changement de salaire
document.querySelector('#salary').addEventListener(
    'input',
    function (e) {
        document.querySelector('#salary_val').textContent = e.target.value + '€';
    }
);

/**
 * Fonction getAge()
 * @param {string} date1 
 * @param {string} date2 (par défaut aujourd'hui)
 * @returns {int}
 */
function getAge(date1, date2 = new Date()) {
    return Math.floor((new Date(date2).getTime() - new Date(date1).getTime()) / 1000 / 60 / 60 / 24 / 365.25);
}

// Après chargement de la page
document.addEventListener(
    'DOMContentLoaded',
    function () {
        // Requête AJAX
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'https://geo.api.gouv.fr/departements');
        xhr.send();
        xhr.addEventListener(
            'readystatechange',
            function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    let option;
                    console.log(data);
                    data.forEach(
                        function (elt) {
                            option = document.createElement('option');
                            option.value = elt.code;
                            option.textContent = elt.nom;
                            document.querySelector('#dept').appendChild(option);
                        }
                    );
                }
            }
        );
    }
);