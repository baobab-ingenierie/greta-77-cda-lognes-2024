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
        document.querySelector('#salary_val').textContent = e.target.value + ' €';
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

// Au changement de la DDN
document.querySelector('#dob').addEventListener(
    'change',
    function (e) {
        document.querySelector('#age').textContent = getAge(e.target.value) + (getAge(e.target.value) > 1 ? ' ans' : ' an');
    }
);

// A l'envoi du formulaire
document.querySelector('#form_apply').addEventListener(
    'submit',
    function (e) {
        let controls = document.querySelectorAll('#form_apply input, #form_apply select');
        console.log(controls);
        controls.forEach(control => {
            if (!control.value){
                alert(control.name + ' est vide !');
                e.preventDefault(); // arrête le comportement du submit
            }
        });
    }
);

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

// Au changement de département
document.querySelector('#dept').addEventListener(
    'change',
    function (e) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'https://geo.api.gouv.fr/departements/' + e.target.value + '/communes');
        xhr.send();
        xhr.addEventListener(
            'readystatechange',
            function () {
                if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                    let data = JSON.parse(xhr.responseText), select = document.querySelector('#cities'), option;
                    console.log(data);
                    select.innerHTML = '';
                    data.forEach(city => {
                        option = document.createElement('option');
                        option.value = city.code;
                        option.textContent = city.nom;
                        select.appendChild(option);
                    });
                }
            }
        );
    }
);