import { rawPokemonData } from './pokemon-data.js';



export function randomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}



// Find Captured Pokemon By ID function to push into capturedPokemonArray for results
export function findById(pokemonResults, pokemonName) {

    for (let i = 0; i < pokemonResults.length; i++) {
        const capturedPokemon = pokemonResults[i];

    
        if (capturedPokemon.pokeName === pokemonName) {
            return capturedPokemon;
        }
    }
}
///////////////new pokemon

export function getNewEncounter(someArray, pokeName) {

    let pokeData = findById(rawPokemonData, pokeName);
    const encounteredPokemon = {
        pokemon: pokeData.pokemon,
        pokeImg: pokeData.url_image,

        encountered: 0, 
        captured: 0
    };
    someArray.push(encounteredPokemon);
}
///////////////add the captures
export function addingCaptures(someArray, pokemoneName) {
    let pokeData = findById(someArray, pokemoneName);
    if (!pokeData) {
        getNewEncounter(someArray, pokemoneName);
        pokeData = findById(someArray, pokemoneName);
    }
    pokeData.captured++;
}
///////////////adding encounters
export function addingEncounters(someArray, pokemoneName) {
    let pokeData = findById(someArray, pokemoneName);
    if (pokeData === undefined) {
        getNewEncounter(someArray, pokemoneName);
        pokeData = findById(someArray, pokemoneName);
    }
    pokeData.encountered++;
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
/////////////////////////////////////////// adding data to table
export function tableData(arr, item) {
    let returnArray = [];
    arr.forEach(pokemon => {
        let returnItem = null;
        if (item === 'encountered' || item === 'captured') returnItem = pokemon[item];
        else returnItem = findById(arr, item)[item];
        returnArray.push(returnItem);
    });
    return returnArray;
}
///////////////////////////




/////////////////////////////building tables
export function buildTable(resultsArray) {
    const capturedTable = document.getElementById('captured');
    const encounteredTable = document.getElementById('encountered');
    resultsArray.forEach(pokemon => {
        const url = pokemon.pokeImg;
        const timesCaptured = pokemon.captured;
        const timesEncountered = pokemon.encountered;
        const rowEl = document.createElement('tr');
        const pokemonBoxEl = document.createElement('td');
    
        const imgEl = document.createElement('img');
        const encounteredEl = document.createElement('td');
        
        imgEl.src = url;
        imgEl.alt = `Picture of ${name}`;
        imgEl.style.width = '50px';
        encounteredEl.textContent = timesEncountered;
        pokemonBoxEl.textContent = pokemon.pokeName;
        console.log(pokemon);
        rowEl.append(pokemonBoxEl, encounteredEl, imgEl);
        if (timesCaptured > 0) {
            const caughtEl = document.createElement('td');
            caughtEl.textContent = timesCaptured;
            rowEl.append(caughtEl);
            capturedTable.append(rowEl);
        } else {
            encounteredTable.append(rowEl);
        }
    });
}

