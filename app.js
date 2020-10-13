
import { rawPokemonData } from './pokemon-data.js';

const picture = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const moreButton = document.querySelector('button');



let capturedPokemon = 0;
let encounteredPokemon = 0;





function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}



function renderPokemon() {

    let firstPokemon = getRandomPokemon(rawPokemonData);
    let secondPokemon = getRandomPokemon(rawPokemonData);
    let thirdPokemon = getRandomPokemon(rawPokemonData);
    
    while (firstPokemon.id === secondPokemon.id) {
        firstPokemon = getRandomPokemon(rawPokemonData);
    }
    while (secondPokemon.id === thirdPokemon.id) {
        secondPokemon = getRandomPokemon(rawPokemonData);
    }
    while (thirdPokemon.id === firstPokemon.id) {
        thirdPokemon = getRandomPokemon(rawPokemonData);
    }
    
    radios[0].value = firstPokemon.id;
    picture[0].src = firstPokemon.url_image;
    
    radios[1].value = secondPokemon.id;
    picture[1].src = secondPokemon.url_image;
    
    radios[2].value = thirdPokemon.id;
    picture[2].src = thirdPokemon.url_image;


}

renderPokemon();

// set event listeners to update state and DOM

moreButton.addEventListener('click', () => {
    capturedPokemon++;

    encounteredPokemon++;
  
    encounteredPokemon++;

    encounteredPokemon++;
   
    renderPokemon();
});
  
 


