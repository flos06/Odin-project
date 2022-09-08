    let outputL = document.getElementById('lower')
    let outputUpper = document.getElementById('upper');
    let currentVal = 0
    let prevV = 0
    let operator = ''
    let result = 0;

    function store(val){
        if (operator == '='){
            outputL.innerHTML = ''
            currentVal = 0
            prevV = 0
            operator = ''
            result = 0;
        }
        outputL.innerHTML += val.innerHTML;
        currentVal = outputL.innerHTML;
        console.log(currentVal)
        return val
    
    }


function clearAll() {
    outputUpper.innerHTML = '';
    outputL.innerHTML='';
    result = 0;
}


function add() {
    if (result != 0) {
        prevV = result
        currentVal = 0
        outputL.innerHTML = ''
        operator = '+'
    } else {
        prevV = currentVal
        currentVal = 0
        outputL.innerHTML = ''
        operator = '+'
        console.log(prevV)

    }


}

function multiply() {
    if (result != 0) {
        prevV = result
        currentVal = 0
        outputL.innerHTML = ''
        operator = 'x'
    } else {
        prevV = currentVal
        currentVal = 0
        outputL.innerHTML = ''
        operator = 'x'

    }


}
function divide() {
    if (result != 0) {
        prevV = result
        currentVal = 0
        outputL.innerHTML = ''
        operator = '/'
    } else {
        prevV = currentVal
        currentVal = 0
        outputL.innerHTML = ''
        operator = '/'

    }


}

function substract() {
    if (result != 0) {
        prevV = result
        currentVal = 0
        outputL.innerHTML = ''
        operator = '-'
    } else {
        prevV = currentVal
        currentVal = 0
        outputL.innerHTML = ''
        operator = '-'

    }

}

function calculate() {
    if (operator == '+'){
        result = Number(currentVal) + Number(prevV)
        outputL.innerHTML = result
        outputUpper.innerHTML = prevV + ' + ' + currentVal + ' = ' + result
    } else if (operator == 'x'){
        result = Number(currentVal) * Number(prevV)
        outputL.innerHTML = result
        outputUpper.innerHTML = prevV + ' x ' + currentVal + ' = ' + result
    } else if (operator == '/'){
        result =  Number(prevV) / Number(currentVal)
        result = Math.round(result * 100) / 100
        outputL.innerHTML = result
        outputUpper.innerHTML = prevV + ' / ' + currentVal + ' = ' + result
    } else if (operator == '-') {
        result = Number(prevV) - Number(currentVal)
        outputL.innerHTML = result
        outputUpper.innerHTML = prevV + ' - ' + currentVal + ' = ' + result
    }



    operator = '='
}
