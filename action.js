/****************** Background color change function *****************************/

function change() {
    // let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let color = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    document.querySelector("body").style.background = color;
    document.querySelector("small").innerHTML = color;
    document.getElementById("container_2").style.background = color;

}

/****************** number increase and decrease change function *****************************/
// value decrease
function valueDecrease() {
    decrement();
    showInput();

}
function decrement() {
    var inputValue = document.getElementById("input_Value").value;
    inputValue--;
    if (inputValue < 0) {
        inputValue = "No Negative Value";
    } else {
        inputValue = inputValue--;
    }

    document.getElementById("input_Value").value = inputValue;
}
function showInput() {

    var valueDisplay = document.getElementById("input_Value").value;

    if (valueDisplay == "No Negative Value") {
        document.getElementById("info").style.cssText = "display: block; text-align:center;";
    }
}
// value reset
function valueReset() {
    textClear();
    hideInput();
}
function textClear() {
    document.getElementById("input_Value").value = 0;
}
function hideInput() {
    document.getElementById("info").style.display = "none";
}
// value increase
function valueIncrease() {
    var inputValue = document.getElementById("input_Value").value;
    inputValue++;
    document.getElementById("input_Value").value = inputValue;
}

/****************** box size change function *****************************/

function orange() {
    document.getElementById("orange").style.cssText = "width : 50%; transition-duration: .5s;";
    document.getElementById("white").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("green").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("blue").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("orange-text").style.cssText = "display: block; text-align: center; margin-top: 50%; transition-duration: .5s;";
    document.getElementById("white-text").style.display = "none";
    document.getElementById("green-text").style.display = "none";
    document.getElementById("blue-text").style.display = "none";
}
function white() {
    document.getElementById("orange").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("white").style.cssText = "width : 50%; transition-duration: .5s;";
    document.getElementById("green").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("blue").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("white-text").style.cssText = "display: block; text-align: center; margin-top: 50%; transition-duration: .5s;";
    document.getElementById("orange-text").style.display = "none";
    document.getElementById("green-text").style.display = "none";
    document.getElementById("blue-text").style.display = "none";
}
function green() {
    document.getElementById("orange").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("white").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("green").style.cssText = "width : 50%; transition-duration: .5s;";
    document.getElementById("blue").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("green-text").style.cssText = "display : block; text-align: center; margin-top: 50%; transition-duration: .5s;";
    document.getElementById("white-text").style.display = "none";
    document.getElementById("orange-text").style.display = "none";
    document.getElementById("blue-text").style.display = "none";
}
function blue() {
    document.getElementById("orange").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("white").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("green").style.cssText = "width : 10%; transition-duration: .5s;";
    document.getElementById("blue").style.cssText = "width : 50%; transition-duration: .5s;";
    document.getElementById("blue-text").style.cssText = "display : block; text-align: center; margin-top: 50%; transition-duration: .5s;";
    document.getElementById("green-text").style.display = "none";
    document.getElementById("white-text").style.display = "none";
    document.getElementById("orange-text").style.display = "none";
}

/****************** age calculate function *****************************/
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
document.getElementById("today_date").value = date + "/" + month + "/" + year;

function age_calculate() {
    var birthDate = document.getElementById("birth_date").value;
    if (birthDate === "") {
        document.getElementById("error_msg").style.display = "block";
    }
    else {
        var birthDate = document.getElementById("birth_date").value;
        var customerYear = birthDate.slice(0, 4);
        var customerMonth = birthDate.slice(5, 7);
        var customerDate = birthDate.slice(8, 10);
        var todayDate = document.getElementById("today_date").value;
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var cusAge = year - customerYear;
        var cusMonth = month - customerMonth;
        var cusDays = date - customerDate;
        document.getElementById("age_result").innerHTML = cusAge + " year " + cusMonth + " month " + cusDays + " days";
    }

}
function error_msg() {
    document.getElementById("error_msg").style.display = "none";
}
function reset_value() {
    document.getElementById("birth_date").value = "";
    document.getElementById("age_result").innerHTML = "";
}