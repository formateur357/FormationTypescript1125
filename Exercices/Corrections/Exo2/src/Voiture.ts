import { Vehicule } from "./Vehicule"

export class Voiture extends Vehicule {
    constructor(
        marque: string,
        modele: string,
        annee: number,
        kilometrage: number,
        private nombrePortes: number,
        private typeCarburant: string
    ) {
        super(marque, modele, annee, kilometrage)
    }

    ouvrirCoffre(): void {
        console.log(`Le coffre de la voiture s'ouvre.`)
    }

    afficherDetails(): void {
        super.afficherDetails()
        console.log(` - Portes : ${ this.nombrePortes }\n - Carburant: ${this.typeCarburant}`)
    }
}