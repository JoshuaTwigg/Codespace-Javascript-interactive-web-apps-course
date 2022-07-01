


class Person{
    constructor(name,surname){
        this._name =name
        this.surname = surname

    }

    get name(){
        return this._name;
    }
}


const person = new Person("john","twigg")


person.name