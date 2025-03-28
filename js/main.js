// SNACK 1
// creo un array con oggetti di biciclette con key nome e peso e
// stampo in console la bici con minor peso

const bikesArray = [];

// creo un array di nomi di biciclette
const nomi = [
    "Bianchi Oltre XR4",
    "Cannondale SuperSix Evo",
    "Trek Domane SL6",
    "Specialized Tarmac SL7",
    "Pinarello Dogma F12",
    "Cervelo R5",
    "Scott Addict RC",
    "Giant TCR Advanced SL",
    "Wilier Zero SLR",
    "Colnago V3Rs"
];

// funzione per generare un numero randomico che sarà il peso della bicicletta

/**
*   function to get a random number
*   
*   @param {number} min - the minimum value (inclusive) of the range.
*   @param {number} max - the maximum value (inclusive) of the range.
*   @return {number} random number between min and max
* 
*/
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(getRandomNumber(50, 100));
