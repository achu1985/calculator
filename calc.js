function display(num) {
    result.value += num
}

function allclr(num) {
    result.value = ""
}

function equals() {
    result.value = eval(result.value)
}
function del() {
    result.value = result.value.slice(0,-1)
}