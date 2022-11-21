// Exercice 1: Créer une fonction qui permet de dire bonjour au bout de 1,5 seconde

// function wait_and_display(sec) {
//     setTimeout(()=>console.log("Bonjour"), sec*1000);
// }

// wait_and_display(2);

// Exercice 2: Creer une fonction qui a pour prototype
// functionaumoins3(array, verifcallback) {}
// qui permet de verifier si un tableau contient au moins 3 elements qui verifient la condition de la fonction de callback
// elle retourne true ou false

// let a = [1, 2];
// let b = [2, 2, 2, 2, 2, 2];

// function aumoins3(array, verifcallback) {
//     let trueX = 0;
//     for (let i = 0; i < array.length; i++) {
//         let verif = verifcallback(array[i]);
//         if (verif = true) {
//             trueX ++;
//             // console.log(trueX);
//         }
//     }
//     return trueX >= 3;
// }

// console.log(a);
// console.log(aumoins3(a, (elem) => elem > 3));
// console.log(b);
// console.log(aumoins3(b, (elem) => elem > 3));

// Exercice 3: Créer une fonction qui a pour prototype
// functionfilter(array, verifcallback) {}
// qui permet de renvoyer un tableau contenant tous les elements qui verifient la condition de la fonction de callback

function filter(array, verifcallback) {
    let tab = [];
    for (let i = 0; i < array.length; i++) {
        if (verifcallback(array[i])) {
            tab.push(array[i]);
        }
    };
    return tab;
}

let tab1 = [1, 2];
let tab2 = [1, 1, 1, 2, 2, 2];

console.log(tab1);
console.log(filter (tab1, (elem) => elem == 1 ));

console.log(tab2);
console.log(filter (tab2, (elem) => elem > 1 ));