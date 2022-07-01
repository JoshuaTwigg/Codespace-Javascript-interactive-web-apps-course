

let numOne = prompt("first number: ")
let numTwo = prompt("second number: ")
let operation = prompt("operation: ")

conversion(numOne,numTwo)



function conversion(numOne, numTwo){
    numOne = parseInt(numOne)
    numTwo= parseInt(numTwo)
    console.log(typeof numberone)
    console.log(typeof numbertwo)

    if(operation == "+"){
        console.log(numOne + numTwo)
    }else if(operation == "*"){
        console.log(numOne * numTwo)
    }else if(operation == "/"){
        console.log(numOne / numTwo)
    }else if(operation == "-"){
        console.log(numOne - numTwo)
    }
}

