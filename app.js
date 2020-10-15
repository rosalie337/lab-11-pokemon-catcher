// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';
import { randomPokemon, findById, putInLocalStorage, addingCaptures, addingEncounters } from './pokemon-utils.js';
// import { images, radios, caughtDiv, moreButton } from './pokemon-const.js';

export const images = document.querySelectorAll('label > img');
export const radios = document.querySelectorAll('input');
export const caughtDiv = document.querySelector('#caught-div');
export const moreButton = document.querySelector('button');
//Add back it if you get a chance to render pokemon neam on UX


// initialize state
let captures = 10;
let pokemonResults = [];
let encounters = 0;
// RenderPokemon Fuction 
export function renderPokemon() {

    let firstPokemon = randomPokemon(rawPokemonData);
    let secondPokemon = randomPokemon(rawPokemonData);
    let thirdPokemon = randomPokemon(rawPokemonData);
    
    while (firstPokemon.id === secondPokemon.id || secondPokemon.id === thirdPokemon.id || thirdPokemon.id === firstPokemon.id) {
        firstPokemon = randomPokemon(rawPokemonData);
        secondPokemon = randomPokemon(rawPokemonData);
        thirdPokemon = randomPokemon(rawPokemonData);
    }
   
    
    radios[0].value = firstPokemon.pokemon;
    images[0].src = firstPokemon.url_image;
    radios[0].checked = false;

    radios[1].value = secondPokemon.pokemon;
    images[1].src = secondPokemon.url_image;
    radios[1].checked = false;

    radios[2].value = thirdPokemon.pokemon;
    images[2].src = thirdPokemon.url_image;
    radios[2].checked = false;
}
renderPokemon();

// set event listeners to update state and DOM
///////encountered
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {	
        

        caughtDiv.classList.remove('hidden');

        radios.forEach((radio) => {
            let encounteredPokemon = findById(pokemonResults, radio.value);
            if (!encounteredPokemon) {
                encounteredPokemon = {
                    pokeName: radio.value,
                    encountered: 1, 
                    captured: 0 
                },
                pokemonResults.push(encounteredPokemon);
            } else {
                encounteredPokemon.encountered++;
            }
           
        });
/////////captured
        for (let i = 0; i < radios.length; i++) {
            addingEncounters(pokemonResults, radios[0].value);
            addingEncounters(pokemonResults, radios[1].value);
            addingEncounters(pokemonResults, radios[2].value);

            caughtDiv.classList.remove('hidden');
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }
        addingCaptures(pokemonResults, e.target.value);
        addingCaptures.captured++;
        putInLocalStorage('RESULTS', pokemonResults);
    });
}
/////////////

/////////////////more button event listener
moreButton.addEventListener('click', () => {
    captures--;
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        images[i].style.opacity = 100;
    }
    if (captures === 0) { 
        window.location.href = './results/index.html';
    }
    renderPokemon();
    alert(captures);
   
});