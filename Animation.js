// implémenter en JavaScript Natif  
// Créer un module Animation.js qui contiendra la classe Animation qui aura les méthodes suivantes:
// - constructor(element)
// - deplacer(x, y)
// - agrandir(largeur, hauteur)
// - changerCouleur(couleur)
// - pivoter(degrees)
// - disparaitre()
// - apparaitre()

class Animation {
    constructor(element) {
        this.element = element;
    }

    deplacer(x, y) {
        this.element.style.position = "absolute";
        this.element.style.right = x;
        this.element.style.top = y;
    }

    agrandir(largeur, hauteur) {
        this.element.style.height = hauteur;
        this.element.style.width = largeur;
    }

    changerCouleur(couleur) {
        this.element.style.backgroundColor = couleur;  
    }

    pivoter(degrees) {
        this.element.style.transform = "rotate(" + degrees + "deg)";
    }

    disparaitre() {
        this.element.style.visibility =  "hidden"; 
    }

    apparaitre() {
        this.element.style.visibility =  "visible"; 
    }

}


// alert("coucou");