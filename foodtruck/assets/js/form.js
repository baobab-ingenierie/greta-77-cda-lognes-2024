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