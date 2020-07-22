import pokemon from './pokemon.js';
import { randomID } from './utils.js';
import { renderPokemon } from './renderPokemon.js';

const pokemonList = document.getElementById('pokemon-list');

let randomNumberArray = randomID();

let num1 = randomNumberArray[0];
let num2 = randomNumberArray[1];
let num3 = randomNumberArray[2];

let pokemon1 = pokemon[num1];
let pokemon2 = pokemon[num2];
let pokemon3 = pokemon[num3];

renderPokemon(pokemon1, pokemon2, pokemon3);