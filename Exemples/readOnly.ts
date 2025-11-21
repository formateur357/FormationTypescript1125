class Personne {
  readonly nom: string = "Jean";

  constructor(nom: string) {
    this.nom = nom; // ✔ autorisé dans le constructeur
  }
}

const p = new Personne("Alice");

p.nom = "Bob"; // Erreur : Impossible d’assigner à 'nom' car c'est une propriété en lecture seule.
