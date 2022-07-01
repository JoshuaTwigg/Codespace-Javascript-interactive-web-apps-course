


    let a =  {
    "name": "Mpho",
    "surname": "Beki",
    "interests": ["hockey","volleybal","tennis"],
    "DOB": "1982/04/17",
    "no.": "082.909.9182"
    }

let x = JSON.stringify(a);






const z = new Promise((resolve,reject) =>{
    if(typeof x === "string"){
        resolve("i resolved")
    }else {
        reject('I rejected!'); 
    }

})

const handleSuccess = (onFullfilled) =>{
    console.log(onFullfilled)
}

const handleFailure = (onFailure) =>{
    console.log(onFailure)
}

z.then(handleSuccess,handleFailure)