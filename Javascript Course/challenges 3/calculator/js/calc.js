//gets num 1

function displayNumber(number){ 
    document.getElementById("display").innerHTML = number
    let numOne = document.getElementById("display").value
    myCalc(numOne)
}

//somehow meant to get num 2

function displayNumberTwo(number){ 
    document.getElementById("display").innerHTML = numberTwo
    let numTwo = document.getElementById("display").value
    myCalc(numTwo)
}


// gets operation
function displayOperation(operation){
    let y = document.getElementById("display").innerHTML = operation
    myCalc(y)
    
    
    } 

// gets 3 arguments
function myCalc(numOne, num2, operation){
    if(operation == "+"){
        document.getElementById("display").innerHTML = (numOne + numTwo)
    }else if(operation == "*"){
        document.getElementById("display").innerHTML = (numOne * numTwo)
    }else if(operation == "/"){
        document.getElementById("display").innerHTML = (numOne / numTwo)
    }else if(operation == "-"){
        document.getElementById("display").innerHTML = (numOne - numTwo)
    }

}


let person = {name:"jgda",surname:"gdj"}

console.log(person.name)