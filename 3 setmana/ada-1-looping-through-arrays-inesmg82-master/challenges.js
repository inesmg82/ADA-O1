/*------------------
1)
El següent codi imprimeix l'índex de l'array "person".
Modifica'l per què imprimeixi els valors de l'array.
------------------*/
/*
const person = ["Sofia", 30, "Barcelona", true];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
  //el que apareix a l'exercic inicialmente ---- console.log(i);
}

/*------------------
2)
Escriu un loop que imprimeixi tots els valors de "pet".
------------------*/
/*
const pet = ["Spot", 2, "dog", "spotted"];

for (let i = 0; i < pet.length; i++) {
  console.log(pet[i]);
}

/*------------------
3)
Crea un array anomenat "features" i afegeix-hi
un mínim de quatre elements.

Després, imprimeix totes les 'features' en UN sol
string en comptes de cadascun per separat.
Fes servir un loop que afegeixi cada valor a
l'string "carFeatures".

Bonus: afegeix una coma entre cadascuna de les
'features' per què quan s'imprimeixi sembli una
frase real.
------------------*/

// el teu array aquí

const features = ["motor", "embrague","caja de cambios", "volante"];

for (let i = 0; i < features.length; i++) {
  console.log(features[i]);
}

const carFeatures = "The features of the car are: ";

// el teu loop aquí

// console.log(carFeatures);

/*------------------
4)
Escriu un loop que imprimeixi tots els elements
de l'array "nums" en ordre invers. És a dir,
començant pel 10 i acabant amb el 0.
------------------*/

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*------------------
5)
Crea un 'nested loop' que imprimeixi els números
de "gridNum" per ordre.
------------------*/

let gridNum = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

/*------------------
6)
Escriu un loop que imprimeixi els noms dels
següents Pokémons.
------------------*/
const pokemon = [
  {
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 4,
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    types: ["fire"],
  },
];

/*------------------
7)
Ara, crea un 'nested loop' que imprimeixi tots
els "types" de l'array de Pokémons.
------------------*/

/*------------------
8)
Crea un loop que imprimeixi les següents lletres en
ordre alfabètic (necessitaràs tres 'nested loops').

Intenta fer l'exercici SENSE mirar les slides.
------------------*/

let letters = [
  [["A"], ["B"], ["C"]],
  [["D"], ["E"], ["F"]],
  [["G"], ["H"], ["I"]],
];

/*------------------
9)
Crea un 'nested loop' que afegeixi cada adreça
a l'array "allAdress". En comptes d'afegir-les
com a objectes però, recorre cadascun dels objectes
per concatenar els seus valors en un string.

El teu resultats hauria de ser com aquest:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech 200 Madrid Spain", "Carrer de JSON Seville Spain"]

Pista: intenta crear una variable entre els loops
per emmagatzemar cada adreça com a string abans
d'introduir-la a l'array "allAdress".
------------------*/

let allAddress = [];

const addressList = [
  {
    line1: "Carrer de CodeOp",
    line2: 42,
    city: "Barcelona",
    country: "Spain",
  },
  {
    line1: "Carrer de Tech",
    line2: 200,
    city: "Madrid",
    country: "Spain",
  },
  {
    line1: "Carrer de JSON",
    line2: 22,
    city: "Seville",
    country: "Spain",
  },
];

// el teu codi aquí

// console.log(allAddress);

/*------------------
10)
Crea una 'to do list' per cada dia de la setmana.

El teu resultat hauria de ser un array d'strings
com aquest:

["Sunday's chores are: nothing.", "Monday's chores are: tidying, vacuuming, dishes.", "Tuesday's chores are: nothing.", (etcetera)]

Pista: per aconseguir aquest resultat hauràs de
combinar moltes de les coses que hem après a les
activitats anteriors. Revisa-les si ho necessites!
------------------*/

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let chores = {
  monday: ["tidying", "vacuuming", "dishes"],
  wednesday: ["laundry", "bills"],
  friday: ["dusting", "lawncare"],
};
