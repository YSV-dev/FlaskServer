let invest_calculator_input = document.getElementById('invest-calculator-input')
let selectedPlanInput = document.getElementById("selected-plan")
let day1 = document.getElementById("day1")
let day2 = document.getElementById("day2")
let day3 = document.getElementById("day3")
let day4 = document.getElementById("day4")

let day5 = document.getElementById("day5")
let all1 = document.getElementById("all1")
let all2 = document.getElementById("all2")
let all3 = document.getElementById("all3")
let all4 = document.getElementById("all4")

let all5 = document.getElementById("all5")

let prevValue = "";
const patt = /^(\d*)([,.]\d{0,2})?$/;

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

$(document).on("keypress keyup blur paste","#invest-calculator-input", function (event) {
 $(this).val(validateCurrencyPattern($(this).val()));
 setProfits()
});

function setProfits(){
    let profit_day_week = invest_calculator_input.value * 0.03
    let profit_month_week = (invest_calculator_input.value * 0.03) * 30

    let profit_day_month = invest_calculator_input.value * 0.08
    let profit_month_month = (invest_calculator_input.value * 0.08) * 30

    let profit_day_six_month = invest_calculator_input.value * 0.13
    let profit_month_six_month = (invest_calculator_input.value * 0.13) * 30

    let profit_day_nine_month = invest_calculator_input.value * 0.18
    let profit_month_nine_month = (invest_calculator_input.value * 0.18) * 30

    let profit_day_year = invest_calculator_input.value * 0.27
    let profit_month_year = (invest_calculator_input.value * 0.27) * 30

    const max_sum = 600000

    invest_calculator_input.maxLength = 6

    if (invest_calculator_input.value > max_sum){
        invest_calculator_input.value = max_sum
        return;
    }

    day1.innerHTML = "$" + profit_day_week.toFixed(0) + " <span>USD</span>"
    day2.innerHTML = "$" + profit_day_month.toFixed(0) + " <span>USD</span>"
    day3.innerHTML = "$" + profit_day_six_month.toFixed(0) + " <span>USD</span>"
    day4.innerHTML = "$" + profit_day_nine_month.toFixed(0) + " <span>USD</span>"
    day5.innerHTML = "$" + profit_day_year.toFixed(0) + " <span>USD</span>"

    all1.innerHTML = "$" + profit_month_week.toFixed(0) + " <span>USD</span>"
    all2.innerHTML = "$" + profit_month_month.toFixed(0) + " <span>USD</span>"
    all3.innerHTML = "$" + profit_month_six_month.toFixed(0) + " <span>USD</span>"
    all4.innerHTML = "$" + profit_month_nine_month.toFixed(0) + " <span>USD</span>"
    all5.innerHTML = "$" + profit_month_year.toFixed(0) + " <span>USD</span>"
}


$(".burger-checkbox").click(function() {
    $(".burger-menu-container").toggleClass("active");
});


$("#months").click(function(event) {
    $('#selected-plan').val("months");
});

function week(){
    selectedPlanInput.value = 'week'
    $('#week').addClass('active')
    $('#months').removeClass('active')
    $('#halfyear').removeClass('active')
    $('#ninemonths').removeClass('active')
    $('#year').removeClass('active')
    $('#min1').addClass('view')
    $('#min2').removeClass('view')
    $('#min3').removeClass('view')
    $('#min4').removeClass('view')
    $('#min5').removeClass('view')
    $('#max1').addClass('view')
    $('#max2').removeClass('view')
    $('#max3').removeClass('view')
    $('#max4').removeClass('view')
    $('#max5').removeClass('view')
    $('#percent1').addClass('view')
    $('#percent2').removeClass('view')
    $('#percent3').removeClass('view')
    $('#percent4').removeClass('view')
    $('#percent5').removeClass('view')
    $('#day1').addClass('view')
    $('#day2').removeClass('view')
    $('#day3').removeClass('view')
    $('#day4').removeClass('view')
    $('#day5').removeClass('view')
    $('#all1').addClass('view')
    $('#all2').removeClass('view')
    $('#all3').removeClass('view')
    $('#all4').removeClass('view')
    $('#all5').removeClass('view')
}
function months(){
    selectedPlanInput.value = 'month'
    $('#week').removeClass('active')
    $('#months').addClass('active')
    $('#halfyear').removeClass('active')
    $('#ninemonths').removeClass('active')
    $('#year').removeClass('active')
    $('#min1').removeClass('view')
    $('#min2').addClass('view')
    $('#min3').removeClass('view')
    $('#min4').removeClass('view')
    $('#min5').removeClass('view')
    $('#max1').removeClass('view')
    $('#max2').addClass('view')
    $('#max3').removeClass('view')
    $('#max4').removeClass('view')
    $('#max5').removeClass('view')
    $('#percent1').removeClass('view')
    $('#percent2').addClass('view')
    $('#percent3').removeClass('view')
    $('#percent4').removeClass('view')
    $('#percent5').removeClass('view')
    $('#day1').removeClass('view')
    $('#day2').addClass('view')
    $('#day3').removeClass('view')
    $('#day4').removeClass('view')
    $('#day5').removeClass('view')
    $('#all1').removeClass('view')
    $('#all2').addClass('view')
    $('#all3').removeClass('view')
    $('#all4').removeClass('view')
    $('#all5').removeClass('view')
}
function halfyear(){
    selectedPlanInput.value = 'halfyear'
    $('#week').removeClass('active')
    $('#months').removeClass('active')
    $('#halfyear').addClass('active')
    $('#ninemonths').removeClass('active')
    $('#year').removeClass('active')
    $('#min1').removeClass('view')
    $('#min2').removeClass('view')
    $('#min3').addClass('view')
    $('#min4').removeClass('view')
    $('#min5').removeClass('view')
    $('#max1').removeClass('view')
    $('#max2').removeClass('view')
    $('#max3').addClass('view')
    $('#max4').removeClass('view')
    $('#max5').removeClass('view')
    $('#percent1').removeClass('view')
    $('#percent2').removeClass('view')
    $('#percent3').addClass('view')
    $('#percent4').removeClass('view')
    $('#percent5').removeClass('view')
    $('#day1').removeClass('view')
    $('#day2').removeClass('view')
    $('#day3').addClass('view')
    $('#day4').removeClass('view')
    $('#day5').removeClass('view')
    $('#all1').removeClass('view')
    $('#all2').removeClass('view')
    $('#all3').addClass('view')
    $('#all4').removeClass('view')
    $('#all5').removeClass('view')
}
function ninemonths(){
    selectedPlanInput.value = 'ninemonths'
    $('#week').removeClass('active')
    $('#months').removeClass('active')
    $('#halfyear').removeClass('active')
    $('#ninemonths').addClass('active')
    $('#year').removeClass('active')
    $('#min1').removeClass('view')
    $('#min2').removeClass('view')
    $('#min3').removeClass('view')
    $('#min4').addClass('view')
    $('#min5').removeClass('view')
    $('#max1').removeClass('view')
    $('#max2').removeClass('view')
    $('#max3').removeClass('view')
    $('#max4').addClass('view')
    $('#max5').removeClass('view')
    $('#percent1').removeClass('view')
    $('#percent2').removeClass('view')
    $('#percent3').removeClass('view')
    $('#percent4').addClass('view')
    $('#percent5').removeClass('view')
    $('#day1').removeClass('view')
    $('#day2').removeClass('view')
    $('#day3').removeClass('view')
    $('#day4').addClass('view')
    $('#day5').removeClass('view')
    $('#all1').removeClass('view')
    $('#all2').removeClass('view')
    $('#all3').removeClass('view')
    $('#all4').addClass('view')
    $('#all5').removeClass('view')
}
function year(){
    selectedPlanInput.value = 'year'
    $('#week').removeClass('active')
    $('#months').removeClass('active')
    $('#halfyear').removeClass('active')
    $('#ninemonths').removeClass('active')
    $('#year').addClass('active')
    $('#min1').removeClass('view')
    $('#min2').removeClass('view')
    $('#min3').removeClass('view')
    $('#min4').removeClass('view')
    $('#min5').addClass('view')
    $('#max1').removeClass('view')
    $('#max2').removeClass('view')
    $('#max3').removeClass('view')
    $('#max4').removeClass('view')
    $('#max5').addClass('view')
    $('#percent1').removeClass('view')
    $('#percent2').removeClass('view')
    $('#percent3').removeClass('view')
    $('#percent4').removeClass('view')
    $('#percent5').addClass('view')
    $('#day1').removeClass('view')
    $('#day2').removeClass('view')
    $('#day3').removeClass('view')
    $('#day4').removeClass('view')
    $('#day5').addClass('view')
    $('#all1').removeClass('view')
    $('#all2').removeClass('view')
    $('#all3').removeClass('view')
    $('#all4').removeClass('view')
    $('#all5').addClass('view')
}