// Exercice 4
// Creer un village qui aura les attributs :
// nbvillageois | 1
// nbbois | 100
// nbpierre | 100
// nbor | 0
// Batiments | [HDV]

class Village {
    constructor (nbvillageois, nbbois, nbpierre, nbor, Batiments) {
        this.nbvillageois = nbvillageois;
        this.nbbois = nbbois;
        this.nbpierre = nbpierre;
        this.nbor = nbor;
        this.Batiments = Batiments;
    }
}

let village = new Village (1, 100, 100, 0, ["HDV"]);
console.log(village);