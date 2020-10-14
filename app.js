
import { pokemonResults, rawPokemonData } from './pokemon-data.js';

const picture = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');




let capturedPokemon = 0;
let encounteredPokemon = 0;

renderPokemon();



function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    alert('getRandomPokemon');
    return someArray[index];
}

 

function renderPokemon() {
    alert('renderPokemon');
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

    /*for (let i = 0; i < radios.length; i++) {
        alert(i);
     
        const newPokemon = {
            id: radios.id[i],
            picture: picture[i],
            encountered: 1,
            captured: 0,
          
        
        };
    alert(newPokemon);
        //addNewPokemon(newPokemon);
    }*/

}
//////call function///localstorage
///////we need to add to our data model which is encountered and caught
///////need pokemon name, encountered+1, captured=0
/////////check if row exists, if exists then add on to encountered



//////////////
export function addNewPokemon(newRow) {
   
    const localStorageItems = getLocalStorageItems();
   
    localStorageItems.push(newRow);
  
    const stringyLocalItems = JSON.stringify(localStorageItems);
   //alert('stringyLocalItems' + stringyLocalItems);
    localStorage.setItem(pokemonResults, stringyLocalItems);
      
}



//////////////////////////////////////
export function getLocalStorageItems() {
    let localStorageItems = JSON.parse(localStorage.getItem(pokemonResults));

  
  /*  if (!localStorageItems) {
        
        const stringyItems = JSON.stringify(rawPokemonData);

        localStorage.setItem(PRODUCTS, stringyItems);
        localStorageItems = hardCodedHair;
    }*/

    return localStorageItems;
}
// set event listeners to update state and DOM
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', () => {
        alert('**************');
        alert('radios[i].value. ' + radios[i].value);

//////call function////localStorage
////loop threw data model untill you find the right one and add one to captured 
        capturedPokemon++;

        encounteredPokemon++;
  
        encounteredPokemon++;

        encounteredPokemon++;
   
        renderPokemon();
    });
  
}



