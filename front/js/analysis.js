const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, '#5cff')
gradient.addColorStop(1, '#66ff')

dados = []
for (n = 1; n < 10; n++) {
    dados.push(n*10)
}
console.log(dados)
const labels = ['teste', 'af', '15', 'f', 'kasdijas']

const data = {
    labels,
    datasets: [{
        data: dados,
        label: "Teste",
        fill: false
    }]
}

const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
        radius: 4
    }
}

const myChart = new Chart(ctx, config)