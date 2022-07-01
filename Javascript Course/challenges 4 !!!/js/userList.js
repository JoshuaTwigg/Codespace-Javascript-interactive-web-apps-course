let database = ["john","zack","aill"]

let input = prompt("1,2,3,4?:")

document.getElementById("heading").innerHTML = input


function names(){
    let a = prompt(":")
    let b = prompt(":")
    let c = prompt(":")

    database.push(a,b,c)
    console.log(database)
}


switch(input){
    case "1":
        names()
        break;
    case "2":
        database.pop()
        console.log(database)
        break;
    case "3":
        console.log(database)
        break;
    case "4":
        database.sort()
        console.log(database)
        break;
    
}

