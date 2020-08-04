let nameArray = [];
let numberArray = [];

const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const enterButton = document.getElementById('button');
let ctx = document.getElementById('chart')

enterButton.addEventListener('click' , function (e) {
e.preventDefault();
nameArray.push(nameInput.value);
numberArray.push(numberInput.value);
nameInput.value = '';
numberInput.value = 0;
if (nameArray.length >= 5 && numberArray.length >= 5){

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameArray,
            datasets: [{
                label: '# of Votes',
                data: numberArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
}

});

