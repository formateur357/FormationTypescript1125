class Animale {
    nom: string;
    constructor(leNom: string) {
        this.nom = leNom;
    }
    deplacer(distance: number = 0) {
        console.log(`${this.nom} bouge de ${distance}m.`);
    }
}

class Chien extends Animale {
    couleurPoil: string

    constructor(name: string, couleurPoil: string) {
        super(name)
        this.couleurPoil = couleurPoil
    }
}