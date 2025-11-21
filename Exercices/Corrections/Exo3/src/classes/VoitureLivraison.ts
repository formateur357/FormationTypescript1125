import { Vehicule } from "./Vehicule";
import { ILivraison } from "../interfaces/ILivraison";

export class VoitureLivraison extends Vehicule implements ILivraison {
    constructor (
        id: string,
        marque: string,
        modele: string,
        annee: number,
        private _capaciteCharge: number,
        private _chargeActuelle: number = 0
    ) {
        super(id, marque, modele, annee)
    }

    public get capaciteCharge(): number {
        return this._capaciteCharge
    }

    public set capaciteCharge(nouvelleCapacite: number) {
        if (nouvelleCapacite < 0) {
            throw new Error("La capacite de charge ne peut pas etre negative.")
        }
        this._capaciteCharge = nouvelleCapacite
    }

    public charger(masse: number): void {
        if (masse <= 0) {
            throw new Error("La masse a charger doit etre positive.")
        }
        if (this._chargeActuelle + masse > this._capaciteCharge) {
            throw new Error("Capacite de charge depassee..")
        }
        this._chargeActuelle += masse
        console.log(
            `Camion charge avec ${masse} kg. Charge actuelle: ${this._chargeActuelle} kg`
        )
    }

    
    public decharger(): void {
        if (this._chargeActuelle === 0) {
            console.log("Le camion n'est pas charge.")
        } else {
            console.log(`Camion decharge de ${this._chargeActuelle}`)
            this._chargeActuelle = 0
        }
    }

    public entretien(): void {
        console.log(`Entretien de la voiture de livraison ${this.marque} ${this.modele} effectue.`)
    }
}