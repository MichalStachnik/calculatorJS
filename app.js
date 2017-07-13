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
    console.log(input.innerHTML)
    switch(input.innerHTML){
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
        case "X":
        case "+":
        case "-":
        case "/":
            display.innerHTML = input.innerHTML
            inputArray.push(input.innerHTML)
        case "=":
            calculate(inputArray)
    }
}

calculate = function(equation){
    var output
    for(var i = 0; i < inputArray.length; i++){
        
        
    }
}