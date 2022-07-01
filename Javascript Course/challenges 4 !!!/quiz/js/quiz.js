let correctAnswers = []

let memo = [3,7,9,12,15]


var score = 0


let inputOne = prompt("a) 3 b) 4 c) 7:")

if(inputOne == "a"){
    score += 1;
    console.log(score)
    
}else{
    score -= 1;
    console.log(score)
}


let inputTwo = prompt("a) 7 , b) 24, c) 5")
if(inputTwo == "a"){
    score += 1;
    correctAnswers.push("a")
    console.log(score)
    
}else{
    score -= 1;
    console.log(score)
}

document.getElementById("score").innerHTML = score