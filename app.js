document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var hoverEnabled = false;
    var input = document.querySelector('.size');
    var sizeView = document.querySelector('.sizeView');
    var size = 16;
    sizeView.textContent = `${size} x ${size}`;
    var inputColor = document.querySelector('#color');
    var color = 'black'; // Couleur par défaut
    var rainbow = document.querySelector('#rainbow');
    var activeRainbow = false;
    var clear = document.querySelector('#clear');

    input.addEventListener('input', function (e) {
        size = e.target.value;
        sizeView.textContent = `${size} x ${size}`;
        createGrid(size); // Appeler la fonction pour créer la nouvelle grille
    });

    inputColor.addEventListener('input', function (e) {
        color = e.target.value;
    });

    clear.addEventListener('click', function () {
        createGrid(size); // Réinitialiser la grille
        rainbow.style.backgroundColor = '';
        rainbow.style.color = '';
        activeRainbow = false;
    });

    // Fonction pour créer la grille en fonction de la taille spécifiée
    function createGrid(size) {
        container.innerHTML = ''; // Supprimer le contenu actuel du conteneur

        for (let i = 0; i < size; i++) {
            let line = document.createElement('div');
            line.style.display = 'flex';
            for (let j = 0; j < size; j++) {
                let element = document.createElement('div');
                element.style.display = 'inline-block';
                element.style.border = '0.002rem solid black';
                element.style.flex = '1';
                element.style.aspectRatio = '1/1';

                element.addEventListener('click', function () {
                    hoverEnabled = !hoverEnabled;
                    if (hoverEnabled) {
                        if (activeRainbow) {
                            let random1 = Math.floor(Math.random() * 256);
                            let random2 = Math.floor(Math.random() * 256);
                            let random3 = Math.floor(Math.random() * 256);
                            element.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
                        } else {
                            element.style.backgroundColor = color; // Utiliser la couleur unique si "rainbow" est désactivé
                        }
                    }
                });

                element.addEventListener('mouseenter', function () {
                    if (hoverEnabled) {
                        if (activeRainbow) {
                            let random1 = Math.floor(Math.random() * 256);
                            let random2 = Math.floor(Math.random() * 256);
                            let random3 = Math.floor(Math.random() * 256);
                            element.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
                        } else {
                            element.style.backgroundColor = color; // Utiliser la couleur unique si "rainbow" est désactivé
                        }
                    }
                });
                line.appendChild(element);
            }
            container.appendChild(line);
        }
    }

    rainbow.addEventListener('click', function () {
        activeRainbow = !activeRainbow;
        if (activeRainbow) {
            rainbow.style.backgroundColor = 'rgb(72, 188, 246)';
            rainbow.style.color = '#fff';
        } else {
            rainbow.style.backgroundColor = '';
            rainbow.style.color = '';
        }
        // Ne pas réinitialiser la grille ici, simplement activer ou désactiver le mode "rainbow"
    });

    // Appeler la fonction pour créer la grille initiale
    createGrid(size);
});

