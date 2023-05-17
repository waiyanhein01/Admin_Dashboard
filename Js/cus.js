// aside
const aside = document.querySelector(".aside")
const asideBtn = document.querySelector(".aside-btn")
const backdrop = document.querySelector(".--backdrop")

asideBtn.addEventListener("click", () => {
    aside.classList.add("show");
    backdrop.classList.add("modal-backdrop")
    backdrop.classList.add("show")
})

backdrop.addEventListener("click", () => {
    aside.classList.remove("show");
    backdrop.classList.remove("modal-backdrop")
    backdrop.classList.remove("show")
})

// chart js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        datasets: [{
            label: 'First month dataset',
            data: [12, 19, 3, 5, 2, 3, 10, 13, 9, 5, 0, 15, 36, 7, 23, 16, 12, 23, 12, 21, 3],
            borderWidth: 1,
            borderRadius: 6,
        },
        
        {
            label: 'Second month dataset',
            data: [12, 19, 3, 5, 2, 3, 10, 13, 9, 5, 0, 15, 36, 7, 23, 16, 12, 23, 12, 21, 3],
            borderWidth: 1,
            borderRadius: 6,
        }],
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                    
                }
            },
            
            y: {
                // beginAtZero: true,

                ticks: {
                    stepSize: 10
                }
            }
        },
        plugins: {
            legend: {
                align: 'start',
                position: 'bottom',
                labels: {
                    usePointStyle: 'true'
                }
            }

        }    
    }
});

// data table
$(document).ready(function () {
    $('#example').DataTable({
        pageLength : 5,
        responsive: true
    });
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
            label: 'First month dataset',
            data: [12, 19, 3, 5, 2, 3, 10, 13, 9, 5],
            borderWidth: 1,
            borderRadius: 6,
        },
        
        {
            label: 'Second month dataset',
            data: [12, 19, 3, 5, 2, 3, 10, 13, 9, 5],
            borderWidth: 1,
            borderRadius: 6,
        }],
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                    
                }
            },
            
            y: {
                // beginAtZero: true,

                ticks: {
                    stepSize: 5
                }
            }
        },
        plugins: {
            legend: {
                align: 'start',
                position: 'bottom',
                labels: {
                    usePointStyle: 'true'
                }
            }

        }    
    }
});