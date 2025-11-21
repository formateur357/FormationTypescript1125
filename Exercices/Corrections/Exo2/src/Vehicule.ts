export class Vehicule {
    constructor(
        protected marque: string,
        protected modele: string,
        protected annee: number,
        protected kilometrage: number
    ) {}

    // marque: string
    // modele: string
    // annee: number
    // kilometrage: number

    // constructor(
    //     marque: string,
    //     modele: string,
    //     annee: number,
    //     kilometrage: number
    // ) {
    //     this.marque = marque
    //     this.modele = modele
    //     this.annee = annee
    //     this.kilometrage = kilometrage
    // }

    demarrer(): void {
        console.log(`${ this.marque } ${ this.modele } demarre.`)
    }

    arreter(): void {
        console.log(`${ this.marque } ${ this.modele } s'arrete.`)
    }

    afficherDetails(): void {
        console.log(`${ this.marque } ${ this.modele } (${this.annee} - ${this.kilometrage} km)`)
    }
}