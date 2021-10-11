function sum(number1, number2) {
    return number1 + number2;
}

function calc(number1, number2, callback) {
    return callback(number1, number2)
}

console.log(calc(6, 2, sum))


function date(callback) {
    console.log(new Date)
    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)