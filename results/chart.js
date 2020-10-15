
import { grabFromLocalStorage, buildTable } from '../pokemon-utils.js';
////////////////////////////////////////////////////////
const resultsArray = grabFromLocalStorage('RESULTS');

////////////////////new game button
const resetButton = document.getElementById('new-button');
resetButton.addEventListener('click', ()=> {
    localStorage.clear();
 
    window.location = '../index.html';

});



buildTable(resultsArray);

////////////////grabbing results from local storage to show in a graph

//////////////////////////////
var ctx = document.getElementById('myChart').getContext('2d');
/////////////adding the names
const pokeName = resultsArray.map((item) => {
    return item.pokeName;

});
////////////////////adding caught to graph
const caught = resultsArray.map((item) => {
    return item.captured;
   
});



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: '# of Captured Pokemon',
            data: caught,
            backgroundColor: [
                'black',
                'yellow',
                'orange',
                'blue',
                'red',
                'green',
                'red',
                'yellow',
                'orange',
                'blue',
                'orange',
                'green',
                'red',
                'yellow',
            ],
            borderColor: [
                'black',
                'yellow',
                'orange',
                'blue',
                'red',
                'green',
                'red',
                'yellow',
                'orange',
                'blue',
                'orange',
                'green',
                'red',
                'yellow',
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

