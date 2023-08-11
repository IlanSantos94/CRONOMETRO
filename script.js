let number = 0
let stopwatch
let h1 = document.querySelector("h1")


function start() {

    stopwatch = setInterval(function () {
        number++
        h1.innerHTML = number
    }, 1000)
}
function interrupt() {

    clearInterval(stopwatch)
}