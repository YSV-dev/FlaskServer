let selected_crypto = 'eth'
let currency_converted = document.getElementById('currency_converted')
let currency_count_input = document.getElementById('currency_count')
let select_dropdown = document.getElementById('selector-coin')
let profit_week_1 = document.getElementById('profit_week_1')
let profit_week_2 = document.getElementById('profit_week_2')
let profit_month_1 = document.getElementById('profit_month_1')
let profit_month_2 = document.getElementById('profit_month_2')
let profit_six_month_1 = document.getElementById('profit_six_month_1')
let profit_six_month_2 = document.getElementById('profit_six_month_2')
let profit_nine_month_1 = document.getElementById('profit_nine_month_1')
let profit_nine_month_2 = document.getElementById('profit_nine_month_2')
let profit_year_1 = document.getElementById('profit_year_1')
let profit_year_2 = document.getElementById('profit_year_2')

let min_week = document.getElementById('min_week')
let max_week = document.getElementById('max_week')
let min_month = document.getElementById('min_month')
let max_month = document.getElementById('max_month')
let min_six_month = document.getElementById('min_six_month')
let max_six_month = document.getElementById('max_six_month')
let min_nine_month = document.getElementById('min_nine_month')
let max_nine_month = document.getElementById('max_nine_month')
let min_year = document.getElementById('min_year')
let max_year = document.getElementById('max_year')
currency_count_input.maxLength = 3
currency_count_input.disabled = true;
select_dropdown.onclick = function() {};

var prevValue = "";
var patt = /^(\d*)([,.]\d{0,2})?$/;

function validateCurrencyPattern(price){
    var matchedString = price.match(patt);
    if (matchedString) {
        prevValue = matchedString[1] + (matchedString[2] ? matchedString[2].replace(",", ".") : "")
        return prevValue;
    }
    else {
      return prevValue;
   }
}

$(document).on("keypress keyup blur paste","#currency_count", function (event) {
 $(this).val(validateCurrencyPattern($(this).val()));
 updateForms(selected_crypto);
});

function calculateProfit(){
updateForms(selected_crypto)
}

function loadingInput(){
currency_count_input.disabled = false;
select_dropdown.onclick = function (){
    if($('#select').hasClass('view')){
        $('#select').removeClass('view')
    }
    else{
        $('#select').addClass('view')
    }
}
}

setTimeout(
  () => loadingInput(),
  3000
);

setTimeout(
  () => updateForms(selected_crypto),
  3000
);

function getProfitDay(input_value, constant){
    return ((input_value / 100) * constant)
}

function getProfitMonth(input_value, constant){
    return ((input_value / 100) * constant) * 30
}

function initializeInners(course, type, curr_cnt){
    let input_value;
    let digits_profit_currency = 0
    let digit_profit_crypto = 0

    if (type === "USDT") {
        digits_profit_currency = 0
        digit_profit_crypto = 0
    }
    if (type === "ADA") {
        digits_profit_currency = 0
        digit_profit_crypto = 0
    }
    if (type === "BTC") {
        digits_profit_currency = 0
        digit_profit_crypto = 3
    }
    if (type === "BNB") {
        digits_profit_currency = 0
        digit_profit_crypto = 1
    }
    if (type === "XRP") {
        digits_profit_currency = 0
        digit_profit_crypto = 0
    }
    if (type === "ETH") {
        digits_profit_currency = 0
        digit_profit_crypto = 3
    }

    currency_converted.innerText = '$' + (curr_cnt).toFixed(2).toString()
    input_value = currency_count_input.value
    profit_week_1.innerHTML = getProfitDay(input_value, 0.3).toFixed(digit_profit_crypto) + " ($" + (getProfitDay(input_value, 0.3) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
    profit_week_2.innerHTML = getProfitMonth(input_value, 0.3).toFixed(digit_profit_crypto) + " ($" + (getProfitMonth(input_value, 0.3) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'

    profit_month_1.innerHTML = getProfitDay(input_value, 0.8).toFixed(digit_profit_crypto) + " ($" + (getProfitDay(input_value, 0.8) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
    profit_month_2.innerHTML = getProfitMonth(input_value, 0.8).toFixed(digit_profit_crypto) + " ($" + (getProfitMonth(input_value, 0.8) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'

    profit_six_month_1.innerHTML = getProfitDay(input_value, 1.3).toFixed(digit_profit_crypto) + " ($" + (getProfitDay(input_value, 1.3) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
    profit_six_month_2.innerHTML = getProfitMonth(input_value, 1.3).toFixed(digit_profit_crypto) + " ($" + (getProfitMonth(input_value, 1.3) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'

    profit_nine_month_1.innerHTML = getProfitDay(input_value, 1.8).toFixed(digit_profit_crypto) + " ($" + (getProfitDay(input_value, 1.8) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
    profit_nine_month_2.innerHTML = getProfitMonth(input_value, 1.8).toFixed(digit_profit_crypto) + " ($" + (getProfitMonth(input_value, 1.8) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'

    profit_year_1.innerHTML = getProfitDay(input_value, 2.7).toFixed(digit_profit_crypto) + " ($" + (getProfitDay(input_value, 2.7) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
    profit_year_2.innerHTML = getProfitMonth(input_value, 2.7).toFixed(digit_profit_crypto) + " ($" + (getProfitMonth(input_value, 2.7) * course).toFixed(digits_profit_currency) + ')<span> '+ type + '</span>'
}
function updateForms(currency_type){
    let curr_cnt;

    if (currency_type === 'xrp') {
        curr_cnt = xrpCourse * currency_count_input.value
        initializeInners(xrpCourse, "XRP", curr_cnt)
        checkMinMax(curr_cnt)
    }
    if (currency_type === 'usdt'){
        curr_cnt = usdtCourse * currency_count_input.value
        initializeInners(usdtCourse, "USDT", curr_cnt)
        checkMinMax(curr_cnt)
    }
    if (currency_type === 'btc'){
        curr_cnt = btcCourse * currency_count_input.value
        initializeInners(btcCourse, "BTC", curr_cnt)
        checkMinMax(curr_cnt)
    }
    if (currency_type === 'bnb'){
        curr_cnt = bnbCourse * currency_count_input.value
        initializeInners(bnbCourse, "BNB", curr_cnt)
        checkMinMax(curr_cnt)
    }
    if (currency_type === 'ada'){
        curr_cnt = adaCourse * currency_count_input.value
        initializeInners(adaCourse, "ADA", curr_cnt)
        checkMinMax(curr_cnt)
    }
    if (currency_type === 'eth'){
        curr_cnt = ethCourse * currency_count_input.value
        initializeInners(ethCourse, "ETH", curr_cnt)
        checkMinMax(curr_cnt)
    }
}

function checkMinMax(curr_cnt){
    let x_link = 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg'

    if(curr_cnt < 200) {
            min_week.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        min_week.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt < 1500) {
            min_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        min_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt < 5000) {
            min_six_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        min_six_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt < 10000) {
            min_nine_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        min_nine_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt < 30000) {
            min_year.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        min_year.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt > 1500) {
            max_week.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        max_week.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt > 20000) {
            max_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        max_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt > 90000) {
            max_six_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        max_six_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt > 300000) {
            max_nine_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        max_nine_month.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }

    if(curr_cnt > 600000) {
            max_year.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + x_link + ">"
    } else {
        max_year.innerHTML = "<img alt='' style='width: 17px; height:17px' src=" + yes_link + ">"
    }
}
function setSelectedDefault(currency_type){
    if (currency_type === 'xrp') {
        currency_count_input.value = 2500
        currency_count_input.maxLength = 7
    }
    if (currency_type === 'usdt'){
        currency_count_input.value = 1000
        currency_count_input.maxLength = 6
    }
    if (currency_type === 'btc'){
        currency_count_input.value = 0.1
        currency_count_input.maxLength = 3
    }
    if (currency_type === 'bnb'){
        currency_count_input.value = 3
        currency_count_input.maxLength = 4
    }
    if (currency_type === 'ada'){
        currency_count_input.value = 600
        currency_count_input.maxLength = 7
    }
    if (currency_type === 'eth'){
        currency_count_input.value = 1
        currency_count_input.maxLength = 3
        console.log(ethCourse)
    }
}

function select_curr(id){
    const cur_val_input = document.getElementById("selected_div");
    if (id === 'xrp_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/ripple-pay.svg', "Ripple", "XRP")
        selected_crypto = 'xrp'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
    if (id === 'usdt_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/trezor-pay.svg', "USDT TRC20", "USDT")
        selected_crypto = 'usdt'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
    if (id === 'btc_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/bitcoin-pay.svg', "Bitcoin", "BTC")
        selected_crypto = 'btc'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
    if (id === 'bnb_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/bnb-pay.svg', "Binance Coin", "BNB")
        selected_crypto = 'bnb'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
    if (id === 'ada_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/cosmos-pay.svg', "Cardano", "ADA")
        selected_crypto = 'ada'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
    if (id === 'eth_select'){
        cur_val_input.innerHTML = chooseCryptoBlock(id, 'static/img/eth-pay.svg', "Ethereum", "ETH")
        selected_crypto = 'eth'
        setSelectedDefault(selected_crypto)
        selectedAction()
    }
}

function selectedAction(){
    $('#select').removeClass('view')
    updateForms(selected_crypto)
}

function chooseCryptoBlock(block_id, img, name, short_name){
    return "<div id = " + block_id + " onclick='select_curr(this.id)' class=\"aflex\">\n" +
        "                                                <div class=\"aflex\">\n" +
        "                                                    <img height=\"20\" src=" + img + " alt=\"\">\n" +
        "                                                    <p class=\"select-title\">" + name + "</p>\n" +
        "                                                </div>\n" +
        "                                                <div>\n" +
        "                                                    <span>" + short_name + "</span>\n" +
        "                                                </div>"
}

$("body").click
(
  function(e)
  {
    if(e.target.className !== "selector-coin" && e.target.className !== "aflex" && e.target.className !== "select")
    {
      $('#select').removeClass('view')
    }
  }
);

