import { getResults, findById } from './utils.js';

const caughtSpan = document.getElementById('pokemon-caught-span');
const pokemonDiv = document.getElementById('pokemon-div');
const buttonDiv = document.getElementById('button-div');
let caughtNumber = document.getElementById('total-caught-number');
caughtNumber.textContent = Number(0);

let checkedInput = document.querySelector('input:checked');
let caughtPokemon = checkedInput;

console.log(caughtPokemon);

export function renderPokemon(pokemon1, pokemon2, pokemon3) {
    const li1 = document.createElement('li');
    li1.style.border = 'solid white 5px';
    li1.style.width = '250px';
    li1.style.height = '250px';
    li1.style.display = 'inline-block';

    const label1 = document.createElement('label');
    li1.appendChild(label1);

    const input1 = document.createElement('input');
    input1.type = 'radio';
    input1.name = 'pokemon';
    input1.value = pokemon1.name;
    label1.appendChild(input1);

    const img1 = document.createElement('img');
    img1.src = pokemon1.image;
    label1.appendChild(img1);

    const p1 = document.createElement('p');
    p1.textContent = pokemon1.name;
    p1.id = 'pokemon-1-p';
    label1.appendChild(p1);

    const li2 = document.createElement('li');
    li2.style.border = 'solid white 5px';
    li2.style.width = '250px';
    li2.style.height = '250px';
    li2.style.display = 'inline-block';

    const label2 = document.createElement('label');
    li2.appendChild(label2);

    const input2 = document.createElement('input');
    input2.type = 'radio';
    input2.name = 'pokemon';
    input2.value = pokemon2.name;
    label2.appendChild(input2);

    const img2 = document.createElement('img');
    img2.src = pokemon2.image;
    label2.appendChild(img2);

    const p2 = document.createElement('p');
    p2.textContent = pokemon2.name;
    p2.id = 'pokemon-2-p';
    label2.appendChild(p2);

    const li3 = document.createElement('li');
    li3.style.border = 'solid white 5px';
    li3.style.width = '250px';
    li3.style.height = '250px';
    li3.style.display = 'inline-block';

    const label3 = document.createElement('label');
    li3.appendChild(label3);

    const input3 = document.createElement('input');
    input3.type = 'radio';
    input3.name = 'pokemon';
    input3.value = pokemon3.name;
    label3.appendChild(input3);

    const img3 = document.createElement('img');
    img3.src = pokemon3.image;
    label3.appendChild(img3);

    const p3 = document.createElement('p');
    p3.textContent = pokemon3.name;
    p3.id = 'pokemon-3-p';
    label3.appendChild(p3);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '20px';
    submitButton.addEventListener('click', () => {
        caughtNumber.textContent++;
        
        const results = getResults();
        console.log(results);

        const pokemonCaught = findById(results, caughtPokemon);
        console.log(pokemonCaught);
        // pokemonCaught.quantity = 0;

        if (pokemonCaught) {
            pokemonCaught.quantity++;

            caughtSpan.style.display = 'block';
            caughtSpan.textContent = `${caughtPokemon} has been caught! You now have ${pokemonCaught.quantity} ${caughtPokemon}.`;

        } else {
            pokemonCaught.quantity++;
            const newPokemon = {
                id: caughtPokemon,
                quantity: pokemonCaught.quantity
            };
            results.push(newPokemon);
            caughtSpan.style.display = 'block';
            caughtSpan.textContent = `${caughtPokemon} has been caught!`;
        }

        const stringyResults = JSON.stringify(results);
        localStorage.setItem('results', stringyResults);

        if (caughtNumber.textContent === 10) {
            submitButton.style.display = 'none';
        }
    });

    pokemonDiv.appendChild(li1);
    pokemonDiv.appendChild(li2);
    pokemonDiv.appendChild(li3);
    buttonDiv.appendChild(submitButton);
}