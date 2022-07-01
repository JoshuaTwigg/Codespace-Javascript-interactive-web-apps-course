


    let a =  {
    "name": "Mpho",
    "surname": "Beki",
    "interests": ["hockey","volleybal","tennis"],
    "DOB": "1982/04/17",
    "no.": "082.909.9182"
    }

let x = JSON.stringify(a);
localStorage.setItem("userData",x)


document.getElementById("a").innerHTML = x

