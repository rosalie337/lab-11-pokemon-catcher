
alert(randomPokemon);
export function randomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}


alert('**************');
// Find Captured Pokemon By ID function to push into capturedPokemonArray for results
export function findById(pokemonResults, pokemonName) {

    for (let i = 0; i < pokemonResults.length; i++) {
        const capturedPokemon = pokemonResults[i];

    
        if (capturedPokemon.pokeName === pokemonName) {
            return capturedPokemon;
        }
    }
}

// GET localStorage function
export function grabFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// SET localStorage function
export function putInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}