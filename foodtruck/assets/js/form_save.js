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
            document.cookie = document.querySelector('#fname').value + '=' + getJSON(false) + '; expires=' + today + '; Secure; HttpOnly';
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
            } else {
                alert('Stockage local non supporté.');
            }
        } else {
            alert('Il manque le prénom !');
        }
    }
);