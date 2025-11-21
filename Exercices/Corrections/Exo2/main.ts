import { Voiture } from "./src/Voiture"
import { Camion } from "./src/Camion"
import { Moto } from "./src/Moto"

const voiture = new Voiture("Peugeot", "208", 2020, 45000, 5, "essence")
const camion = new Camion("Renault", "Magnum", 2018, 120000, 18, 4)
const moto = new Moto("Yamaha", "MT-07", 2022, 8000, "4 temps", false)

voiture.demarrer()
voiture.ouvrirCoffre()
voiture.afficherDetails()
voiture.arreter()

console.log("-----------------")

camion.demarrer()
camion.charger()
camion.afficherDetails()
camion.arreter()

console.log("-----------------")


moto.demarrer()
moto.faireWheelie()
moto.afficherDetails()
moto.arreter()
