// import functions and grab DOM elements
import pokemon from './pokemon.js';

const submitButton = document.getElementById('submit-button');
const resultsButton = document.getElementById('results-button');

let totalCaughtSpan = document.getElementById('total-caught-number');

let pokemonP1 = document.getElementById('pokemon-1-p');
let pokemonP2 = document.getElementById('pokemon-2-p');
let pokemonP3 = document.getElementById('pokemon-3-p');

let randomPokemon1 = document.getElementById('random-pokemon-1');
let randomPokemon2 = document.getElementById('random-pokemon-2');
let randomPokemon3 = document.getElementById('random-pokemon-3');

// let checkedInput = document.querySelector('input:checked');

// initialize state
let totalCaught = 0;
totalCaughtSpan.textContent = totalCaught;

let randomNum1 = Math.floor(Math.random() * 19);
let randomNum2 = Math.floor(Math.random() * 19);
let randomNum3 = Math.floor(Math.random() * 19);

while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
    randomNum1 = Math.floor(Math.random() * 19);
    randomNum2 = Math.floor(Math.random() * 19);
    randomNum3 = Math.floor(Math.random() * 19);
}

pokemonP1.textContent = pokemon[randomNum1].name;
pokemonP2.textContent = pokemon[randomNum2].name;
pokemonP3.textContent = pokemon[randomNum3].name;

randomPokemon1.src = pokemon[randomNum1].image;
randomPokemon2.src = pokemon[randomNum2].image;
randomPokemon3.src = pokemon[randomNum3].image;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    totalCaught++;
    totalCaughtSpan.textContent = totalCaught;

    randomNum1 = Math.floor(Math.random() * 19);
    randomNum2 = Math.floor(Math.random() * 19);
    randomNum3 = Math.floor(Math.random() * 19);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * 19);
        randomNum2 = Math.floor(Math.random() * 19);
        randomNum3 = Math.floor(Math.random() * 19);
    }

    pokemonP1.textContent = pokemon[randomNum1].name;
    pokemonP2.textContent = pokemon[randomNum2].name;
    pokemonP3.textContent = pokemon[randomNum3].name;

    randomPokemon1.src = pokemon[randomNum1].image;
    randomPokemon2.src = pokemon[randomNum2].image;
    randomPokemon3.src = pokemon[randomNum3].image;

    if (totalCaught === 10) {
        submitButton.style.display = 'none';
        resultsButton.style.display = 'inline-block';
        resultsButton.style.textAlign = 'center';
    }
});

resultsButton.addEventListener('click', () => {
    totalCaught = 0;
    totalCaughtSpan.textContent = totalCaught;

    randomNum1 = Math.floor(Math.random() * 19);
    randomNum2 = Math.floor(Math.random() * 19);
    randomNum3 = Math.floor(Math.random() * 19);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * 19);
        randomNum2 = Math.floor(Math.random() * 19);
        randomNum3 = Math.floor(Math.random() * 19);
    }

    pokemonP1.textContent = pokemon[randomNum1].name;
    pokemonP2.textContent = pokemon[randomNum2].name;
    pokemonP3.textContent = pokemon[randomNum3].name;

    randomPokemon1.src = pokemon[randomNum1].image;
    randomPokemon2.src = pokemon[randomNum2].image;
    randomPokemon3.src = pokemon[randomNum3].image;

    resultsButton.style.display = 'none';
    submitButton.style.display = '';
});