# Projet-Etch-a-Sketch

## Table des matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Conclusion](#conclusion)

## Introduction

Etch-a-Sketch est un projet de codage qui permet de créer des dessins à l'aide d'une grille de pixels. Le projet est écrit en JavaScript et utilise la bibliothèque HTML5 Canvas.

## Installation

Pour installer Etch-a-Sketch, vous devez disposer d'un éditeur de texte et d'un navigateur Web. Une fois que vous avez ces deux éléments, vous pouvez suivre les étapes suivantes :

1. Créez un nouveau fichier et enregistrez-le sous le nom `index.html`.
2. Copiez et collez le code HTML suivant dans le fichier `index.html` :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1> Etch-a-Sketch</h1>
    <div class="global">
        <div class="options">
            <div class="sizeParameter">
                <input name="size" class="size" type="range" min="1" max="60" value="16" />
                <div class="sizeView"></div>
            </div>
            <div class="otherOptions">
                <div class="color">
                    <br>
                    <label for="">Color</label><br>
                    <input id="color" type="color">
                </div>
                <button class="btn" id="rainbow">Rainbow</button>
                <button class="btn" id="clear">Clear</button>

            </div>
        </div>
        <div class="container">

        </div>
    </div>
    <script src="app.js"></script>

</body>
</html>
```

3. Créez un nouveau fichier et enregistrez-le sous le nom `app.js`.
4. Copiez et collez