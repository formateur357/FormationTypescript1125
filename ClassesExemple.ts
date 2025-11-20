class Animale {
    nom: string;
    constructor(leNom: string) {
        this.nom = leNom;
    }
    deplacer(distance: number = 0) {
        console.log(`${this.nom} bouge de ${distance}m.`);
    }

    toString(): string {
        return `Animale ${ this.nom }`
    }
}

class Chien extends Animale {
    couleurPoil: string

    constructor(name: string, couleurPoil: string) {
        super(name)
        this.couleurPoil = couleurPoil
    }

    toString(): string {
        
        return super.toString() + " est un chien."
    }
}

let billy: Chien = new Chien("Billy", "beige");

billy.deplacer(10)

console.log(billy.toString())

// Animale.deplacer(5) // marche avec les methodes statiques