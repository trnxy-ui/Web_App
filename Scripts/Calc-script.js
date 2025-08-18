let currentnum = "";
let storednum = "";
let operation = "";

//Collecting number
function collectnum(num) {
    currentnum += num
    document.getElementById("input-Num").value = storednum + " " + operation + " " + currentnum
};


//shoose sign e.g +,-
function clickOperation(op) {
    if (op === "!") {
        storednum = currentnum + op
        operation = op
        document.getElementById("input-Num").value = storednum
    } else {
        storednum = currentnum;
        currentnum = ""
        operation = op
        document.getElementById("input-Num").value = storednum + " " + op;
    }
};

//clear the textbox
function Clear() {
    document.getElementById("input-Num").value = "";
    storednum = "";
    currentnum = "";
    operation = "";
};

//get result using chosen sign
function calculate() {
    document.getElementById("input-Num").value = "";
    if (operation === "+") {
        let sum = parseFloat(currentnum) + parseFloat(storednum);
        document.getElementById("input-Num").value = storednum + " " + operation + " " + currentnum + " = " + sum.toString();
        currentnum = sum.toString();

    } else if (operation === "-") {
        let sum = parseFloat(storednum) - parseFloat(currentnum);
        document.getElementById("input-Num").value = storednum + " " + operation + " " + currentnum + " = " + sum.toString();
        currentnum = sum.toString()

    } else if (operation === "/") {
        // Validating
        if (parseFloat(currentnum) !== 0) {
            let quotient = parseFloat(storednum) / parseFloat(currentnum)
            document.getElementById("input-Num").value = storednum + " " + operation + " " + currentnum + " = " + quotient.toString();
            currentnum = quotient.toString()

        } else {
            document.getElementById("input-Num").value = "ERROR";
        }

    } else if (operation === "*") {
        let product = parseFloat(storednum) * parseFloat(currentnum);
        document.getElementById("input-Num").value = storednum + " " + operation + " " + currentnum + " = " + product.toString();
        currentnum = product.toString();

    } else if (operation === "!") {
        let factnum = parseInt(currentnum);
        let result = (factorial(factnum))
        document.getElementById("input-Num").value = storednum + " = " + result.toString()
        currentnum = result.toString()
    }
};

function factorial(num) {
    try {
        if (num === 1 || num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        };
    } catch (ex) {
        document.getElementById("input-Num").value = ex
    }
};