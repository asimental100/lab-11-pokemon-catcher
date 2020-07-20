// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { randomID } from './utils.js';

const pokemonButton1 = document.getElementById('random-pokemon-1');
const pokemonButton2 = document.getElementById('random-pokemon-2');
const pokemonButton3 = document.getElementById('random-pokemon-3');

const submitButton = document.getElementById('submit-button');
const resultsButton = document.getElementById('results-button');

let totalCaughtSpan = document.getElementById('total-caught-number');
// initialize state
let totalCaught = 0;

let catchCounter = 0;
let encounterCounter = 0;

totalCaughtSpan.textContent = totalCaught;
// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    totalCaught++;
    totalCaughtSpan.textContent = totalCaught;

    if (totalCaught === 10) {
        submitButton.style.display = 'none';
        resultsButton.style.display = 'inline-block';
        resultsButton.style.textAlign = 'center';
    }
});

resultsButton.addEventListener('click', () => {
    totalCaught = 0;
    totalCaughtSpan.textContent = totalCaught;

    resultsButton.style.display = 'none';
    submitButton.style.display = '';
});