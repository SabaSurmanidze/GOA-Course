let result = document.getElementById("result")
let x = 0

function minus() {
    x -= 1
    result.textContent = x
    if (x < 1 ) {
        x = 0
        result.textContent = x
    }
}

function reset() {
    x = 0
    result.textContent = x
}

function plus() {
    x += 1
    result.textContent = x
}