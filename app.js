// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { renderPokemon } from './utils.js';

const submitButton = document.getElementById('submit-button');
const resultsButton = document.getElementById('results-button');

let totalCaughtSpan = document.getElementById('total-caught-number');

const pokemonSection = document.getElementById('pokemon-selection-section');
// initialize state
let totalCaught = 0;

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

for (let i = 0; i < pokemon.length; i++) {
    const poke = pokemon[i];
    const el = renderPokemon(poke);
    pokemonSection.appendChild(el);
}