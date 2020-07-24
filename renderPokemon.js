import { findById, makeUser } from './utils.js';
import pokemon from './pokemon.js';

let caughtNumber = document.getElementById('total-caught-number');
caughtNumber.textContent = Number(0);

export function renderPokemon(pokemon1, pokemon2, pokemon3) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const form = document.createElement('form');

    const label1 = document.createElement('label');
    const labelDiv1 = document.createElement('div');
    labelDiv1.textContent = pokemon1.name;
    const input1 = document.createElement('input');
    input1.type = 'radio';
    input1.value = pokemon1.id;
    input1.name = 'pokemon';
    const img1 = document.createElement('img');
    img1.src = pokemon1.image;
    label1.append(img1, labelDiv1, input1);
    form.append(label1);

    const label2 = document.createElement('label');
    const labelDiv2 = document.createElement('div');
    labelDiv2.textContent = pokemon2.name;
    const input2 = document.createElement('input');
    input2.type = 'radio';
    input2.value = pokemon2.id;
    input2.name = 'pokemon';
    const img2 = document.createElement('img');
    img2.src = pokemon2.image;
    label2.append(img2, labelDiv2, input2);
    form.append(label2);

    const label3 = document.createElement('label');
    const labelDiv3 = document.createElement('div');
    labelDiv3.textContent = pokemon3.name;
    const input3 = document.createElement('input');
    input3.type = 'radio';
    input3.value = pokemon3.id;
    input3.name = 'pokemon';
    const img3 = document.createElement('img');
    img3.src = pokemon3.image;
    label3.append(img3, labelDiv3, input3);
    form.append(label3);

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.style.marginBottom = '20px';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        caughtNumber.textContent++;

        const formData = new FormData(form);

        const caughtID = formData.get('pokemon');
        console.log(formData);

        const results = findById(pokemon, caughtID);
        const results2 = JSON.stringify(results.id);
        console.log('results = ' + results2);

        const user = makeUser();
        user.caught[results2] += 1;
        const stringyUser = JSON.stringify(user);
        console.log('user = ' + stringyUser);

        stringyUser.caught[results2] += true;
        console.log('user = ' + stringyUser);

        const resultDiv = document.querySelector('#results');
        resultDiv.textContent = results.result;

    });

    form.append(button);
    section.append(div, form);
    
    return section;
}