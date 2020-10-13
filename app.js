
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
