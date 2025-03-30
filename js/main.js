// SNACK 1
// creo un array con oggetti di biciclette con key nome e peso e
// stampo in console la bici con minor peso

const bikesArray = [];

// creo un array di nomi di biciclette
const bikeNames = [
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

// funzione per generare un oggetto contenente come chiavi il nome dell'array bikesArray e il peso randomico

/**
*   function to create some objects by a given array
*
*   @param {array} array - array with bike values 
*   @return {object} object build with name and weight keys
*
*/
const getBikesObj = (array) => {

    for (i = 0; i < array.length; i++) {
        let randomNumber = getRandomNumber(7000, 10000);
        bikesArray.push({ name: array[i], weight: randomNumber });
    }

}
getBikesObj(bikeNames);
// console.log(bikesArray);

// definisco le variabili per contenere i valori di pesi delle biciclette
let minWeight = bikesArray[0].weight;
let lightestBike;

for (i = 0; i < bikesArray.length; i++) {
    if (minWeight > bikesArray[i].weight) {
        lightestBike = bikesArray[i];
        minWeight = bikesArray[i].weight;
    }
    // console.log(minWeight);
}

//stampo la bicicletta che pesa di meno
console.log(lightestBike);



//SNACK 2

// creo array di squadre di calcio con le chiavi 'nome', 'punti', 'falli subiti'.

const teamNames = [
    "Atalanta",
    "Bologna",
    "Cagliari",
    "Como",
    "Empoli",
    "Fiorentina",
    "Genoa",
    "Inter",
    "Juventus",
    "Lazio",
    "Lecce",
    "Milan",
    "Monza",
    "Napoli",
    "Parma",
    "Roma",
    "Torino",
    "Udinese",
    "Venezia",
    "Verona"
];

console.log(teamNames);

// creo la funzione per generare un array di oggetti con le squadre aggiungendo
// le chiavi 'punti' e 'falli subiti'

const teamsArray = [];
const getTeamsObj = (array) => {

    for (i = 0; i < array.length; i++) {
        // non creo una variabile con il numero random perchè le squadre possono
        // avere valori uguali
        teamsArray.push({ nome: array[i], punti: getRandomNumber(25, 90), falliSubiti: getRandomNumber(5, 25) });
    }

}
getTeamsObj(teamNames);
console.log(teamsArray);