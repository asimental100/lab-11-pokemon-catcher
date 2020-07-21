export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.id === idName) {
            return item;
        }
    }
    return null;
}

export function getResults() {
    const rawResults = localStorage.getItem('results');
    let result = JSON.parse(rawResults) || [];

    return result;
}

const addSpan = document.getElementById('random-pokemon-1');

export function renderPokemon(pokemon) {
    const li = document.createElement('li');
    li.className = pokemon.category;
    li.title = pokemon.description;
    li.style.border = 'solid white 1px';

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    li.appendChild(h3);

    const span = document.createElement('span');
    span.textContent = pokemon.description;
    li.appendChild(span);

    const img = document.createElement('img');
    img.src = '../images/' + pokemon.image;
    img.alt = pokemon.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + pokemon.price.toFixed(2);

    p.textContent = usd;

    const quantitySelector = document.createElement('input');
    quantitySelector.type = 'number';
    quantitySelector.min = 1;
    quantitySelector.max = 99;
    quantitySelector.value = 1;
    p.appendChild(quantitySelector);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = pokemon.id;
    button.addEventListener('click', () => {
        // console.log('ID: ' + clothingItem.id);
        const result = getResults();

        const pokemonCaught = findById(result, pokemon.id);

        if (pokemonCaught) {
            pokemonCaught.quantity = Number(pokemonCaught.quantity) + Number(quantitySelector.value);

            addSpan.style.display = 'block';
            addSpan.textContent = `${quantitySelector.value} ${pokemon.name} has been caught, you now have ${pokemon.quantity} ${pokemon.name}.`;

        } else {
            const newPokemon = {
                id: pokemon.id,
                quantity: quantitySelector.value
            };
            result.push(newPokemon);
            addSpan.style.display = 'block';
            addSpan.textContent = `${quantitySelector.value} ${pokemon.name} has been caught`;
        }

        const stringyCart = JSON.stringify(result);
        localStorage.setItem('results', stringyCart);

        // console.log(cart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}