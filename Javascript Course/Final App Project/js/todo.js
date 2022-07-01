

// task class, any task added has name and date attributes, name of task and date is equal to input from user//

class Task{
    constructor(name,date){
        this.name = name
        this.date = date
    }

}

let taskOne = new Task(TaskNameInput,dateNameInput)

// call function to instantiate new object on button click//


const addTaskButton = document.querySelector("addTask")

addTaskButton.addEventListener("click",function(){
    alert("YOU ARE ADDING A NEW TASK")
    console.log("igdajigjisag")

})