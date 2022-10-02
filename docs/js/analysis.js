const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, '#5cff')
gradient.addColorStop(1, '#66ff')

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

labels = []
for (n = 1; n < 50; n++) {
    labels.push(n)
}
dados = []
for (n = 1; n < 100; n++) {
    dados.push(getRandomArbitrary(0, 35))
}
dados2 = []
for (n = 1; n < 100; n++) {
    dados2.push(getRandomArbitrary(-1, 15))
}
dados3 = []
for (n = 100; n > 1; n--) {
    dados3.push(getRandomArbitrary(25, 45))
}
console.log(dados3)

const data = {
    labels,
    datasets: [{
        data: dados,
        label: "Bx_GSE",
        fill: false,
        borderColor: 'red'
    }, 
    {
        data: dados2,
        label: "By_GSE",
        fill: false,
        borderColor: 'green'
    },
    {
        data: dados3,
        label: "Bz_GSE",
        fill: false,
        borderColor: 'blue'
    },]
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