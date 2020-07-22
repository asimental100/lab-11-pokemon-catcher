export function randomID() {
    let randomNum1 = Math.floor(Math.random() * 19);
    let randomNum2 = Math.floor(Math.random() * 19);
    let randomNum3 = Math.floor(Math.random() * 19);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * 19);
        randomNum2 = Math.floor(Math.random() * 19);
        randomNum3 = Math.floor(Math.random() * 19);
    }

    return [randomNum1, randomNum2, randomNum3];
}

export function getResults() {
    const rawResults = localStorage.getItem('results');
    let results = JSON.parse(rawResults) || [];

    return results;
}

export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.name === idName) {
            return item;
        }
    }
    return null;
}

/* randomNum1 = Math.floor(Math.random() * 19);
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
    randomPokemon3.src = pokemon[randomNum3].image; */