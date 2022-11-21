// Créer un module Personnage qui contiendra les classes:
// Personnage
// Aventurier
// Guerrier
// Paladin
// Mage

class Personnage {
    constructor (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
}

class Guerrier extends Personnage {
    constructor (nom, sante, force, rage) {
        super(nom, sante, force);
        this.rage = rage;
    }
}

class Aventurier extends Personnage {
    constructor (nom, sante, force, xp) {
        super(nom, sante, force);
        this.xp = xp;
    }
}

class Paladin extends Aventurier {
    constructor (nom, sante, force, xp, vertu) {
        super(nom, sante, force, xp);
        this.vertu = vertu;
    }
}

class Mage extends Aventurier {
    constructor (nom, sante, force, xp, mana) {
        super(nom, sante, force, xp);
        this.mana = mana;
    }
}

let personnage = new Personnage("personnage", 4, 5 );
console.log(personnage);
let guerrier = new Guerrier("guerrier", 4, 5, 6);
console.log(guerrier);
let aventurier = new Aventurier("aventurier", 4, 5, 6, 7);
console.log(aventurier);
let paladin = new Paladin("paladin", 4, 5, 6, 7);
console.log(paladin);
let mage = new Mage("mage", 4, 5, 6, 7);
console.log(mage);