    let outputL = document.getElementById('lower')
    let outputUpper = document.getElementById('upper');
    let currentVal = 0
    let prevV = 0
    let operator = ''
    let result = 0;

    function store(val){

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

function calculate() {
    if (operator == '+'){
        result = Number(currentVal) + Number(prevV)
        outputL.innerHTML = result
    }
}
