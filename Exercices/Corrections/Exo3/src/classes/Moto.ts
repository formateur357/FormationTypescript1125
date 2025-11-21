import { Vehicule } from "./Vehicule";

export class Moto extends Vehicule {
    constructor (
        id: string,
        marque: string,
        modele: string,
        annee: number,
    ) {
        super(id, marque, modele, annee)
    }

    public entretien(): void {
        console.log(`Entretien de la moto ${this.marque} ${this.modele} effectue.`)
    }
}