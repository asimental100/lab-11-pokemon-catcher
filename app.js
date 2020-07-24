import pokemon from './pokemon.js';
import { randomID, makeUser } from './utils.js';
import { renderPokemon } from './renderPokemon.js';

const pokemonSection = document.getElementById('random-pokemon-section');

makeUser();

let randomNumberArray = randomID();

let num1 = randomNumberArray[0];
let num2 = randomNumberArray[1];
let num3 = randomNumberArray[2];

let pokemon1 = pokemon[num1];
let pokemon2 = pokemon[num2];
let pokemon3 = pokemon[num3];

const randomPoke = renderPokemon(pokemon1, pokemon2, pokemon3);

pokemonSection.append(randomPoke);