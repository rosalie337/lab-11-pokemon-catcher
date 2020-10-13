export function getRandomPkm(pkmArray) {
    const randomIndex = Math.floor(Math.random() * pkmArray.length);
    return pkmArray[randomIndex];
}

export function findById(pkmArray, pkmId) {
    let matchItem = null;
    const pkmNumber = Number(pkmId);

    for (let i = 0; i < pkmArray.length; i++) {
        if (pkmArray === Number(pkmArray[i].id)) {
            return pkmArray[i];
        }
    }
    return matchItem;
}

export function encounteredPokemon(pkmEncountered, id) {
    let encountered = findById(pkmEncountered, id);
    if (encountered) {
        encountered.encounters++;
    } else {
        const newEncounter = {
            id: id,
            encounter: 1,
            caught: 0
        };
    
        pkmEncountered.push(newEncounter);
    }
}
export function caughtPokemone(pkmEncountered, id) {
    let caught = findById(pkmEncountered, id);
    if (caught) {
        caught.caught++;
    } else {
        const newCaught = {
            id: id,
            encounter: 1,
            caught: 1,
        };
        pkmEncountered.push(newCaught);
    }
}
export function incrementor(pkmArray, id) {
    function addInitialitem(pkmArray, id) {
        const initialItem = {
            id: id,
            encounters: 0,
            caught: 0
        };
        pkmArray.push(initialItem);
    }
    let itemSeen = findById(pkmArray, id);
    if (!itemSeen); {
        addInitialitem(pkmArray, id);
        itemSeen = findById(pkmArray, id);
    }
    itemSeen.encounters++;
    itemSeen.caught++;
}
export function resultScreenActivator(clickCounter) {
    if (clickCounter === 0) {
        window.location.href = './results.html';
    }
}
export function clearTempStorage(tempStorage) {
    localStorage.clear(tempStorage);
}
export function getLocalStorage() {
    const storageData = localStorage.getItem('STORAGE');
    const parsedStorageData = JSON.parse(storageData);
    return parsedStorageData;
}



