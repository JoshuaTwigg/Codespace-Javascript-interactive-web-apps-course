


    let a =  {
    "name": "Mpho",
    "surname": "Beki",
    "interests": ["hockey","volleybal","tennis"],
    "DOB": "1982/04/17",
    "no.": "082.909.9182"
    }

let x = JSON.parse(a,function(key, value){
    if(key == "DOB"){
        return new Date(value)


    }else{
        return value
    }
})

console.log(a.DOB)

