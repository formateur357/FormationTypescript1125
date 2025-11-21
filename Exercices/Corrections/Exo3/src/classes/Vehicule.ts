import { IVehicule } from "../interfaces/IVehicule";

export abstract class Vehicule implements IVehicule {
    private _marque: string
    private _modele: string
    protected _annee: number

    constructor(
        readonly id: string,
        marque: string,
        modele: string,
        annee: number
    ) {
        this._marque = marque
        this._modele = modele
        if (annee < 1886 || annee > new Date().getFullYear()) {
            throw new Error("Annee invalide")
        }
        this._annee = annee
    }

    public get marque(): string {
        return this._marque
    }

    public get modele(): string {
        return this._modele
    }

    public get annee(): number {
        return this._annee
    }

    public set marque(nouvelleMarque: string) {
        if (nouvelleMarque.trim().length === 0) {
            throw new Error("La marque ne peut pas etre vide.")
        }
        this._marque = nouvelleMarque
    }

    public set modele(nouveauModele: string) {
        if (nouveauModele.trim().length === 0) {
            throw new Error("Le modele ne peut pas etre vide.")
        }
        this._modele = nouveauModele
    }

    public set annee(nouvelleAnnee: number) {
        const anneeMin = 1886;
        const anneeActuelle = new Date().getFullYear()
        if (nouvelleAnnee < anneeMin || nouvelleAnnee > anneeActuelle) {
            throw new Error("Annee invalide")
        }
        this._annee = nouvelleAnnee
    }

    public demarrer(): void {
        console.log(`${this.marque} ${this.modele} demarre`)
    }

    public arreter(): void {
        console.log(`${this.marque} ${this.modele} s'arrete`)
    }

    public abstract entretien(): void 
}