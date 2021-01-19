// # Exo 1
// -  Créer une class Personne qui a comme propriétés: nom, prénom, age et taille.
// -  Créer trois personnages avec des caractéristiques differentes.
// -  Afficher une phrase pour chaque personnage qui affiche toutes ses caracteristiques.

// class Personne {
//     constructor(a,b,c,d) {
//         this.nom = a;
//         this.prenom = b;
//         this.age = c;
//         this.taille = d;
//         this.carac = () => {
//             for (const key in this) {
//                 console.log(this[key]);
//             }
//         }
//     }
// }

// let alex = new Personne("gaspar","alex",23,"1m75");
// alex.carac();

// let jeff = new Personne("el", "jefe", "immortel", "oui");
// jeff.carac();

// let steve = new Personne("stevenson", "steve", 16, "2");
// steve.carac();


// # Exo 1.1
// -  Créer une methode dans la class Personne qui affiche toutes ses caracteristiques du personnage dans une phrase

// # Exo 2
// -  Créer une class Personnage avec comme propriétés : 
// age , nom , ville
// Faire 2 instances de cette class.

// class Personne {
//     constructor(a,b,c) {
//         this.nom = a;
//         this.age = b;
//         this.ville = c;
//         this.sePresenter = () => {
//             console.log(`Bonjour, je m'appelle ${this.nom}!`);
//         }
//     }
// }

// let jeff = new Personne('Jeff','13 ans','Seoul');
// jeff.sePresenter();

// let jack = new Personne('Jack','21 ans', 'Tokyo');
// jack.sePresenter();
// # Exo 2.1
// - Rajouter la method sePresenter à la class Personnage qui console.log "Bonjour, je m'appelle [nom-de-la-personne] !"
// Lancer cette méthode sur les deux instances de l'exo2

// # Exo3
// - Traduire le code suivant en class et en instances

// - lieux
// let maison = {
//   nom: "maison",
//   contenu: [],
// };
// let epicerie = {
//   nom: "epicerie",
//   contenu: [],
//   ingredients: [],
// };
// let cuisine = {
//   nom: "cuisine",
//   contenu: [],
//   ingredients: [],
// };

class Lieux {
    constructor(a,b,c) {
        this.nom = a;
        this.contenu = []
        this.ingredients = [];
    }
}

let maison = new Lieux("maison");
console.log(maison);
let epicerie = new Lieux("epicerie");
let cuisine = new Lieux("cuisine");

// - ingredients
// let poivron = {
//   nom: 'poivron',
//   etat: 'entier',
//   prix:  1 ,
//  };
//  let oignon = {
//   nom: 'oignon',
//   etat: 'entier',
//   prix:  2 ,
//  };
//  let oeuf = {
//   nom: 'oeuf',
//   etat: 'entier',
//   prix:  4 ,
//  };
//  let epice = {
//   nom: 'epice',
//   etat: 'moulu',
//   prix:  3.25 ,
//  };
//  let paprika = {
//   nom: 'paprika',
//   etat: 'moulu',
//   prix:  1.5 ,
//  };
//  let fromage = {
//   nom: 'fromage',
//   etat: 'coupé',
//   prix:  1.6 ,
//  };

class Ingredients {
    constructor(a,b,c) {
        this.nom = a;
        this.etat = b;
        this.prix = c;
    }
}

let poivron = new Ingredients('poivron','entier',1);
let oignon = new Ingredients('oignon','entier',2);
let oeuf = new Ingredients('oeuf','entier',4);
let epice = new Ingredients('epice','moulu',3.25);
let parpika = new Ingredients('paprika','moulu',1.5);
let fromage = new Ingredients('fromage','coupé',1.6);


// - Personne
// let personnage = {
//  nom: "Maxime",
//  lieu: "néant",
//  argent: 100,
//  panier: [],
//  se_deplacer(x){
//  },

//  payer(x){
//  },
//  couper(x,y){
//  }
// }

class Personne {
    constructor(a,b,c) {
        this.nom = a;
        this.lieu = b;
        this.argent = c;
        this.panier = [];
        this.se_deplacer = (x) => {
        }
        this.couper = (x) => {
        }
        this.payer = (x) => {
        }
    }
}

let maxime = new Personne("maxime","néant",100);
console.log(maxime);

// # Exo4

// - Créer une class Objet
// _Propriétés : nom, prix

class Objet {
    constructor(a,b) {
        this.nom = a;
        this.prix = b;
    }
}

let banane = new Objet("banane",26);
let poire = new Objet("poire",12);


// - Créer deux instances d'objets avec un nom et un prix
// Créer une boite (tableau) et mettre les deux objets dedans.

let boite = [banane,poire];
console.log(boite);

// - Créer une class Personnage
// _Propriétés : nom(string), sac(tableau), argent(number)
// _Méthode : prendre(objet)
// _Méthode : acheter(vendeur, objet)

class Personnage {
    constructor(a,b,c) {
        this.nom = a;
        this.sac = [b];
        this.argent = c;
        this.prendre = (x) => {
            this.sac.push(x.nom)
            this.argent - x.prix
        }           
    }
}

let jeff = new Personnage("Jeff","telephone",30);
jeff.prendre(boite[1]);

console.log(jeff);

// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// Ensuite faites acheter à l'un des deux, l'objet de l'autre.