
import { grabFromLocalStorage, buildTable } from '../pokemon-utils.js';

const resultsArray = grabFromLocalStorage('RESULTS');

const resetButton = document.getElementById('new-button');
resetButton.addEventListener('click', ()=> {
    window.location = '../index.html';
});
////////////////grabbing results from local storage to show in a graph


buildTable(resultsArray);



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
////////////Adding encountered to graph


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: '# of Captured Pokemon',
            data: caught,
            backgroundColor: [
                'rgba(258, 99, 132, 0.50)',
                'rgba(74, 221, 221, 0.50)',
                'rgba(255, 206, 86, 0.50)',
                'rgba(75, 192, 192, 0.50)',
                'rgba(147, 74, 221, 0.50)',
                'rgba(255, 159, 64, 0.50)',
                'rgba(258, 99, 132, 0.50)',
                'rgba(74, 221, 221, 0.50)',
                'rgba(255, 206, 86, 0.50)',
                'rgba(75, 192, 192, 0.50)',
                'rgba(147, 74, 221, 0.50)',
                'rgba(258, 159, 64, 0.50)',
                'rgba(255, 99, 132, 0.50)',
                'rgba(74, 221, 221, 0.50)',
            ],
            borderColor: [
                'rgba(205, 29, 29), 0.70)',
                'rgba(74, 221, 221, 0.70)',
                'rgba(205, 29, 29, 0.70)',
                'rgba(75, 192, 192, 0.70)',
                'rgba(221, 102, 255, 0.70)',
                'rgba(205, 29, 29, 0.70)',
                'rgba(205, 29, 29), 0.70)',
                'rgba(74, 221, 221, 0.70)',
                'rgb(205, 29, 29, 0.70)',
                'rgba(75, 192, 192, 0.70)',
                'rgba(221, 102, 255, 0.70)',
                'rgba(205, 29, 29, 0.70)',
                'rgba(205, 29, 29, 0.70)',
                'rgba(74, 221, 221, 0.70)',
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

