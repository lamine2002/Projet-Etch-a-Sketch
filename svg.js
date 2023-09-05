// Sélection des éléments du DOM
const container = document.querySelector('.container');
const sizeInput = document.querySelector('.size');
const sizeView = document.querySelector('.sizeView');
const colorInput = document.querySelector('#color');
const clearButton = document.querySelector('#clear');
const rainbowButton = document.querySelector('#rainbow');

// Initialisation des variables
let hoverEnabled = false;
let size = 16;
let color = 'black';
let activeRainbow = false;

// Met à jour l'affichage de la taille
function updateSizeView() {
    sizeView.textContent = `${size} x ${size}`;
}

// Crée la grille en fonction de la taille spécifiée
function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const line = document.createElement('div');
        line.style.display = 'flex';

        for (let j = 0; j < size; j++) {
            const element = document.createElement('div');
            element.style.display = 'inline-block';
            element.style.border = '0.002rem solid black';
            element.style.flex = '1';
            element.style.aspectRatio = '1/1';

            element.addEventListener('click', function () {
                hoverEnabled = !hoverEnabled;
                if (hoverEnabled) {
                    if (activeRainbow) {
                        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                        element.style.backgroundColor = randomColor;
                    } else {
                        element.style.backgroundColor = color;
                    }
                }
            });

            element.addEventListener('mouseenter', function () {
                if (hoverEnabled) {
                    if (activeRainbow) {
                        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                        element.style.backgroundColor = randomColor;
                    } else {
                        element.style.backgroundColor = color;
                    }
                }
            });

            line.appendChild(element);
        }
        container.appendChild(line);
    }
}

// Met à jour la couleur en fonction de la sélection
colorInput.addEventListener('input', function (e) {
    color = e.target.value;
});

// Réinitialise la grille
clearButton.addEventListener('click', function () {
    createGrid(size);
    activeRainbow = false;
    rainbowButton.style.backgroundColor = "";
    rainbowButton.style.color = "";
});

// Active/désactive le mode "rainbow"
rainbowButton.addEventListener('click', function () {
    activeRainbow = !activeRainbow;
    if (activeRainbow) {
        rainbowButton.style.backgroundColor = "rgb(72, 188, 246)";
        rainbowButton.style.color = "#fff";
    }else{
        rainbowButton.style.backgroundColor = "";
        rainbowButton.style.color = "";
    }
});

// Met à jour l'affichage initial de la taille
updateSizeView();

// Crée la grille initiale
createGrid(size);
