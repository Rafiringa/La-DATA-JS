// Rappel des types de donnees
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["JavaScript", "React", "NodeJS"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["JavaScript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "NodeJS"],
    admin: true,
  },
];
// console.log(data[2].pseudo);

//---------------------------
// Les structures de controle
//---------------------------
if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus age que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While
let w = 0;

while (w < 10) {
  w++;
  //console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles For
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li>`;
}

// on declare
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

// Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//-----------------
// Méthodes String
//-----------------
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//-----------------
// Méthodes Number
//-----------------
