// Promise simple
const maPromise = new Promise((resolve, reject) => {
    // ici tu mets ton code asynchrone (timer, api, bdd, etc...)
    setTimeout(() => {
        resolve("Operation terminee !")
    }, 1000)
})

maPromise.then((resultat) => console.log(resultat))

const obtenirNombre = new Promise((resolve, reject) => {
    const random = Math.random()

    if (random > 0.5) {
        resolve(`Succes : ${random}`)
    } else {
        reject(`Erreur : ${random}`)
    }
})

obtenirNombre
.then((val) => console.log(val))
.catch((err) => console.error(err))


// Promise simple en ts
function chargerUtilisateur(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Morgan") // type string
        }, 2000)
    })
}

chargerUtilisateur().then((nom) => {
    console.log("Utilisateur :", nom)
})

//  async/await
async function main() {
    console.log("Chargement...")

    const resultat = await chargerUtilisateur()

    console.log(resultat)
}