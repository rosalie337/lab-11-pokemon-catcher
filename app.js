// import functions and grab DOM elements
import { pokemonData } from './pokemon.js';
import { 
    getRandomPkm, 
    encounteredPokemon,  
    incrementor, 
    resultScreenActivator
} from './utils.js';
// initialize state


const submitButton = document.getElementById('submit-button');

const answerDiv = document.getElementById('#answer');

const radio1 = document.getElementById('input1');
const radio2 = document.getElementById('input2');
const radio3 = document.getElementById('input3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
// set event listeners to update state and DOM

let remainingPkm = pokemonData.slice(0,);
let correctAnswer = null;
let clickCounter = 10;

let pkmEncountered = [];
let caughtPokemon = [];
let allTimeResults;

//////////////////////////set-page
function setPage() {
    if (remainingPkm.length === 1) {
        alert('show results');  
    }
    const randomPkm1 = getRandomPkm(remainingPkm);
    let randomPkm2 = getRandomPkm(remainingPkm);
    let randomPkm3 = getRandomPkm(remainingPkm);

    while (randomPkm1.id === randomPkm2.id || randomPkm1.id === randomPkm3.id || randomPkm2.id === randomPkm3.id) {
        randomPkm2 = getRandomPkm(remainingPkm);
        randomPkm3 = getRandomPkm(remainingPkm);
    }

    const randomZero = Math.random(Math.random());
    const randomOne = Math.random(Math.random(randomZero));
    if (randomZero === 0) {
        correctAnswer = randomPkm1;
    } else if (randomOne === 1) {
        correctAnswer = randomPkm2;
    } else {
        correctAnswer = randomPkm3;
    }
    answerDiv.textContent = correctAnswer.name;

    encounteredPokemon(pkmEncountered, randomPkm1.id);
    encounteredPokemon(pkmEncountered, randomPkm2.id);
    encounteredPokemon(pkmEncountered, randomPkm3.id);


/////////////////grabbed images
    image1.src = randomPkm1.url_image;
    image2.src = randomPkm2.url_image;
    image3.src = randomPkm3.url_image;

//////radio1
    radio1.value = randomPkm1.id;
    radio1.textContent = randomPkm1.pokemon;

///////radio2
    radio2.value = randomPkm2.id;
    radio2.textContent = randomPkm2.pokemon;

///////radio3
    radio3.value = randomPkm3.id;
    radio3.textContent = randomPkm3.pokemon;



////////////////////
    const choiceDiv = document.getElementById('pokemon-choice-container');
    choiceDiv.classList.remove('disabled');


    let allTimeResultsStorage = localStorage.getItem('PKM-STATS');
    if (allTimeResultsStorage) {
        let parsedAllTimesResultsStorage = JSON.parse(allTimeResultsStorage);

        allTimeResults = parsedAllTimesResultsStorage;
    } else {
        allTimeResults = [];
    }


}  


////////////////
submitButton.addEventListener('click', () => {
    const playersChoice = document.querySelector('input[type = radio]:checked');
    const chosenPkm = playersChoice.value;
    
    incrementor(caughtPokemon, chosenPkm);
    incrementor(pkmEncountered, chosenPkm);
    incrementor(allTimeResults, chosenPkm);

    saveToLocalStorage(caughtPokemon);
    saveToLocalStorage(pkmEncountered);
    savePermaInformation(allTimeResults);

    setPage();

    clickCounter--;

    resultScreenActivator(clickCounter);
});

setPage();

export function saveToLocalStorage(dataStorage) {
    const newStoredPkm = JSON.stringify(dataStorage);

    localStorage.setItem('STORAGE', newStoredPkm);
}

export function savePermaInformation(permaInfo) {
    const permaStorage = JSON.stringify(permaInfo);

    localStorage.setItem('PKM-STATS', permaStorage);
}