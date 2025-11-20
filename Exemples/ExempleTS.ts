let x = 12
// x = "Bonjour" // invalide 
let y: string = "bonjour"

let prenom: string = "John"
let nom: string = "Doe"

let phrase = "Bonjour " + prenom + nom + " !\n"
let phrase2 = `Bonjour ${ prenom }${ nom } !\n`

console.log(phrase, phrase2)