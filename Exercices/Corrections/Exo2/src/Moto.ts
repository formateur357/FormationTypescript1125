import { Vehicule } from "./Vehicule"

export class Moto extends Vehicule {
    constructor(
        marque: string,
        modele: string,
        annee: number,
        kilometrage: number,
        private typeMoteur: string, // 2 temps / 4 temps
        private hasSideCar: boolean
    ) {
        super(marque, modele, annee, kilometrage)
    }

    faireWheelie(): void {
        console.log(`La moto fait un wheelie !`)
    }

    afficherDetails(): void {
        super.afficherDetails()
        console.log(` - Type de moteur : ${ this.typeMoteur } t\n - Sidecar: ${this.hasSideCar ? "oui" : "non"}`)
    }
}