function display(val) {
    document.getElementById("result").value += val;
}

function clrDisplay() {
    document.getElementById("result").value = "";
}

function percent() {
    let x = document.getElementById("result").value;
    let y = eval(x / 100);
    document.getElementById("result").value = y;
}

function posNeg() {
    let x = document.getElementById("result").value;
    let y = eval(x * -1);
    document.getElementById("result").value = y;
}

function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}