let x = 0

while(x <= 100){
    if(x % 3 == 0){
        console.log("fizz")
    }else if(x % 5 == 0){
        console.log("buzz")
    }else if(x % 3 == 0 && x % 5 == 0){
        console.log("fizz BUZZ buzz FIZZ")
    }else{
        console.log(x)
    }
    x+=1
}


