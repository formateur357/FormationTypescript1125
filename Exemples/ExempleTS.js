"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 12;
// x = "Bonjour" // invalide 
let y = "bonjour";
let prenom = "John";
let nom = "Doe";
let phrase = "Bonjour " + prenom + nom + " !\n";
let phrase2 = `Bonjour ${prenom}${nom} !\n`;
console.log(phrase, phrase2);
let tab = [-5, 10, 45];
tab.push(5.5); // valide
// tab.push("bonjour") // invalide
const o = { a: "foo", b: 12, c: "bar" };
const { a, b, c: k } = o; // valide
// type Item {
//     title: string,
//     price: number
//     // category: Category
// }
//# sourceMappingURL=ExempleTS.js.map