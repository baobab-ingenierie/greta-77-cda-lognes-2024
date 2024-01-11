/**
 * getJSON : récupère toutes les valeurs du formulaire
 * sous la forme JSON
 * @param {bool} isObject - vrai si le renvoi est un objet
 * @return {object|string}
 */
function getJSON(isObject = true) {
    let inputs = document.querySelectorAll('#form_apply *[name]'), obj = {}, jobVals = [], cityVals = [], options;

    inputs.forEach(function (input) {
        switch (input.type) {
            case 'radio':
                if (input.checked) {
                    obj[input.name] = input.value;
                }
                break;
            case 'checkbox':
                if (input.checked) {
                    jobVals.push(input.value);
                }
                obj['jobs'] = jobVals;
                break;
            case 'select-multiple':
                options = input.querySelectorAll(':checked');
                options.forEach(function (option) {
                    cityVals.push(option.textContent);
                });
                obj['cities'] = cityVals;
                break;
            default:
                obj[input.name] = input.value;
        }
    });

    return (isObject ? obj : JSON.stringify(obj));
}

/**
 * Clic sur COOKIE
 */
document.querySelector('#saveCookie').addEventListener(
    'click',
    function () {
        if (document.querySelector('#fname').value.trim()) {
            let today = new Date();
            today.setTime(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            document.cookie = document.querySelector('#fname').value + '=' + getJSON(false) + '; expires=' + today.toUTCString() + '; Secure';
            alert('Sauvegarde Cookie OK !');
        } else {
            alert('Entrer un prénom.')
        }
    }
);

/**
 * Clic sur LOCAL
 */
document.querySelector('#saveLocal').addEventListener(
    'click',
    function () {
        let key = document.querySelector('#fname').value.trim();
        if (key) {
            if (localStorage) {
                localStorage.setItem(key, getJSON(false));
                sessionStorage.setItem(key, getJSON(false));
                alert('Sauvegarde Local/Session OK !');
            } else {
                alert('Stockage local non supporté.');
            }
        } else {
            alert('Il manque le prénom !');
        }
    }
);

/**
 * Clic sur INDEXDB
 */
document.querySelector('#saveIndex').addEventListener(
    'click',
    function () {
        // Teste si IndexDB est supporté
        if (indexedDB) {
            // Crée et ouvre une connexion
            let cnn = indexedDB.open('foodtruck', 1);

            // Crée la DB et les OS
            cnn.addEventListener(
                'upgradeneeded',
                function () {
                    // Crée la DB
                    let db = cnn.result;

                    // Crée l'OS si besoin
                    if (!db.objectStoreNames.contains('candidatures')) {
                        let os = db.createObjectStore(
                            'candidatures',
                            { autoIncrement: true }
                        );
                        let idx = os.createIndex(
                            'idxName',
                            ['fname']
                        );
                    }

                }
            );
            
            // Si connexion OK
            cnn.addEventListener(
                'success',
                function () {
                    // Ouvre l'OS
                    let db = cnn.result;
                    let tx = db.transaction(
                        ['candidatures'],
                        'readwrite'
                    );
                    let store = tx.objectStore('candidatures');

                    // Stocke les data
                    let res = store.put(getJSON());

                    // Si stockage OK
                    res.addEventListener(
                        'success',
                        function () {
                            alert('Sauvegarde IndexDB OK !');
                        }
                    );

                    // Si stockage KO
                    res.addEventListener(
                        'error',
                        function (e) {
                            alert('Stockage KO : ' + e);
                        }
                    );

                    // Quand transaction finie
                    tx.addEventListener(
                        'complete',
                        function () {
                            db.close();
                        }
                    );
                }
            );

            // Si connexion KO
            cnn.addEventListener(
                'error',
                function () {
                    alert('Erreur lors de la connexion !');
                }
            );
        } else {
            alert('IndexDB non supporté !');
        }
    }
);