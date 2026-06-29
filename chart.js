const ctx = document.getElementById('weeklyChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
            data: [82, 84, 80, 88, 86, 91, 89],
            borderColor: '#5F32E1',
            borderWidth: 3,
            tension: 0.4,
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: '#5F32E1'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    }
});