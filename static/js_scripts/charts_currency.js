///  Calling API and modeling data for each chart ///

let btcCourse = ''
let ethCourse = ''
let usdtCourse = ''
let bnbCourse = ''
let adaCourse = ''
let xrpCourse = ''


const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  btcCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

const ethData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  ethCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

const usdtData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=USDT&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  usdtCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

const bnbData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BNB&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  bnbCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

const adaData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ADA&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  adaCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

const xrpData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=10&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  xrpCourse = data.slice(-1)[0]['close']
  return {
    times,
    prices
  }
}

/// Charts ///
let createBtcChart
let createEthChart
let createUsdtChart
let createAdaChart
let createXrpChart
let createBnbChart

async function printBnbChart() {
  let { times, prices } = await bnbData()

  let bnbChart = document.getElementById('bnbChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBnbChart = new Chart(bnbChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printXrpChart() {
  let { times, prices } = await xrpData()

  let xrpChart = document.getElementById('xrpChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createXrpChart = new Chart(xrpChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printAdaChart() {
  let { times, prices } = await adaData()

  let adaChart = document.getElementById('adaChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createAdaChart = new Chart(adaChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printEthChart() {
  let { times, prices } = await ethData()

  let ethChart = document.getElementById('ethChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createEthChart = new Chart(ethChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btcChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printUsdtChart() {
  let { times, prices } = await usdtData()

  let usdtChart = document.getElementById('usdtChart').getContext('2d');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createUsdtChart = new Chart(usdtChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: 'rgba(255,255,255)',
        borderColor: 'rgba(169,169,169,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 2,
        lineTension: .5,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },
      interaction: {
            mode: 'index',
            intersect: false,
      },
      tooltips: {
        enabled : true,
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 0,
        xPadding: 0,
        caretSize: 3,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

function countChange(currentPrice, oldPrice){
  let change_num;
  let change = ""
  if (currentPrice > oldPrice) {
    change_num = ((currentPrice - oldPrice) / currentPrice) * 100
    change = "+" + change_num.toFixed(2) + "%"
  } else {
    change_num = ((oldPrice - currentPrice) / currentPrice) * 100
    change = "-" + change_num.toFixed(2) + "%"
  }

  return change
}

function getChangeColor(change){
  let color = ""

  if(change[0] === "+"){
    color = "green"
  } else {
    color = "red"
  }

  return color
}

async function updateBtcPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('btc-price-pc')
  const price = document.getElementById('btc-price')

  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('btc-change-pc')
  const change_mobile = document.getElementById('btc-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

async function updateEthPrice() {
  let { times, prices } = await ethData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('eth-price-pc')
  const price = document.getElementById('eth-price')
  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('eth-change-pc')
  const change_mobile = document.getElementById('eth-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

async function updateUsdtPrice() {
  let { times, prices } = await usdtData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('usdt-price-pc')
  const price = document.getElementById('usdt-price')
  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('usdt-change-pc')
  const change_mobile = document.getElementById('usdt-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

async function updateAdaPrice() {
  let { times, prices } = await adaData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('ada-price-pc')
  const price = document.getElementById('ada-price')
  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('ada-change-pc')
  const change_mobile = document.getElementById('ada-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

async function updateXrpPrice() {
  let { times, prices } = await xrpData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('xrp-price-pc')
  const price = document.getElementById('xrp-price')
  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('xrp-change-pc')
  const change_mobile = document.getElementById('xrp-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

async function updateBnbPrice() {
  let { times, prices } = await bnbData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  const price_pc = document.getElementById('bnb-price-pc')
  const price = document.getElementById('bnb-price')
  price_pc.innerText = "$" + currentPrice
  price.innerText = "$" + currentPrice

  let oldPrice = prices[prices.length-2].toFixed(2);
  let change = countChange(currentPrice, oldPrice)
  const change_pc  = document.getElementById('bnb-change-pc')
  const change_mobile = document.getElementById('bnb-change')
  let color = getChangeColor(change)

  change_pc.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
  change_mobile.innerHTML = "<text style = 'color: " + color + "'>" + change + "</text>"
}

function updateBtcPrices(){
  printBtcChart()
  updateBtcPrice()
}


function updateEthPrices(){
  printEthChart()
  updateEthPrice()
}

function updateXrpPrices(){
  printXrpChart()
  updateXrpPrice()
}

function updateBnbPrices(){
  printBnbChart()
  updateBnbPrice()
}

function updateAdaPrices(){
  printAdaChart()
  updateAdaPrice()
}

function updateUsdtPrices(){
  printUsdtChart()
  updateUsdtPrice()
}


setTimeout(
  () => updateUsdtPrices(),
  1000
);
setTimeout(
  () => updateBtcPrices(),
  1500
);
setTimeout(
  () => updateBnbPrices(),
  2000
);
setTimeout(
  () => updateAdaPrices(),
  2500
);
setTimeout(
  () => updateXrpPrices(),
  3000
);
setTimeout(
  () => updateEthPrices(),
  3500
);