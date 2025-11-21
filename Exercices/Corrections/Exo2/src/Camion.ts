import { Vehicule } from "./Vehicule"

export class Camion extends Vehicule {
    constructor(
        marque: string,
        modele: string,
        annee: number,
        kilometrage: number,
        private capaciteCharge: number, // tonnes
        private nombreEssieux: number
    ) {
        super(marque, modele, annee, kilometrage)
    }

    charger(): void {
        console.log(`Le camion charge ${this.capaciteCharge} tonnes.`)
    }

    afficherDetails(): void {
        super.afficherDetails()
        console.log(` - Capacité de charge : ${ this.capaciteCharge } t\n - Essieux: ${this.nombreEssieux}`)
    }
}