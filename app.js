var inputArray = []
var display = document.getElementById('display')
var buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
    button.onclick = function(){
        parseInput(button)
        console.log(inputArray)
    }
})
parseInput = function(input){
    console.log(inputArray.length)
    switch(input.innerHTML){
        case "AC":
            inputArray = []
            display.innerHTML = ''
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            display.innerHTML = input.innerHTML
            inputArray.push(input.innerHTML)
            break
        case "X":
        case "+":
        case "-":
        case "/":
        case ".":
        case "%":
            if(inputArray[inputArray.length - 1] === 'X' || inputArray[inputArray.length - 1] === '+' || inputArray[inputArray.length - 1] === '-' || inputArray[inputArray.length - 1] === '/' || inputArray[inputArray.length - 1] === '%' || inputArray[inputArray.length - 1] === '.'){
                break
            }
            else {
                display.innerHTML = input.innerHTML
                inputArray.push(input.innerHTML)
                break 
            }  
        case "=":
            calculate(inputArray)
            break;
    }
}

calculate = function(equation){
    var outputString = ''
    for(var i = 0; i < equation.length; i++){
        if(equation[i] === 'X'){
            outputString += '*'
        }
        else{
            outputString += equation[i]
        }
    }
    outputString = eval(outputString)
    console.log(outputString)
    display.innerHTML = outputString
    inputArray = [outputString]
}