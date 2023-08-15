$(".burger-checkbox").click(function () {
    $(".burger-menu-container").toggleClass("active");
});

//const ctx = document.getElementById("balanceChart");
const balance14day = document.getElementById("balance14dayChart");
const balanceAllChart = document.getElementById("balanceAllChart");

let label = [];
let data = [0];

let chartBalance

function createBalanceChart(){
        return new Chart(ctx, {
            type: "line",
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
                    enabled: true,
                    callbacks: {
                        //This removes the tooltip title
                        title: function () {
                        }
                    },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,.9)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030'
                }
            },
            data: {
                labels: trans_graph_data,
                scale: {
                    display: false,
                },
                datasets: [{
                    borderWidth: 2,
                    label: "",
                    data: trans_graph_data,
                    fill: "origin",
                    borderColor: "#00A4EA",
                    backgroundColor: 'rgba(0, 164, 234, 0.3)',
                    tension: 0.05,
                    borderJoinStyle: 'round',
                    borderCapStyle: 'round',
                    pointRadius: 1,
                    pointHitRadius: 2,
                    lineTension: .5,
                },],
            },
        })
    }

const chartBalance14day = new Chart(balance14day, {
    type: "line",
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
        yPadding: 10,
        xPadding: 10,
        caretSize: 10,
        backgroundColor: 'rgba(255,122,61,0.3)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    },
    data: {
        labels: label.slice(30, 100),
        scale: {
            display: false,
        },
        datasets: [{
            borderWidth: 2,
            label: "",
            data: data,
            fill: "origin",
            borderColor: "#FF7A3D",
            backgroundColor: "rgba(255, 122, 61, 0.3)",
            tension: 0.05,
            borderJoinStyle: 'round',
            borderCapStyle: 'round',
            pointRadius: 0,
            pointHitRadius: 2,
            lineTension: .5,
        },],
    },
});
const test = [502, 500, 3822, 500, 500, 1000, 1123, 1142, 1242, 1412, 300, 1600, 1200, 1000];
const dates = ["01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12", "01.12"];

const chartBalanceAllChart = new Chart(balanceAllChart, {
    type: "line",
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
          gridLines: {
              display: false
          }
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
        yPadding: 15,
        xPadding: 15, position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,122,61,0.3)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    },
    data: {
        labels: test,
        scale: {
            display: false,
        },
        datasets: [{
            borderWidth: 2,
            label: "",
            data: test,
            fill: "origin",
            borderColor: "#EA0000",
            backgroundColor: "rgba(234, 0, 0, 0.3)",
            tension: 0.05,
            borderJoinStyle: 'round',
            borderCapStyle: 'round',
            pointRadius: 1,
            pointHitRadius: 2,
            lineTension: .3,
        },],
    },
});

chartBalance = createBalanceChart()

function update_balance_chart(slice_start, slice_end){
    let local_data;
    local_data = data
    chartBalance.options.animation.duration = 0
    chartBalance.data.datasets[0].data = local_data.slice(slice_start,slice_end)
    chartBalance.data.labels = local_data.slice(slice_start,slice_end)
    chartBalance.update()
}
function three_days_select(){
    update_balance_chart(0,3)
}

function week_select(){
    update_balance_chart(0,7)
}

function two_week_select(){
    update_balance_chart(0,13)
}

function month_select(){
    update_balance_chart(0,29)
}

function three_month_select(){
    update_balance_chart(0,89)
}

function six_month_select(){
    update_balance_chart(0,180)
}