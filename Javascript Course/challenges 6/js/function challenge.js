//Below you shall find a tasks array which we will use for the rest of this challenge
//One line below this is the tasksCompleted array that we are going to use further use
tasks = ['swim', 'eat', 'study', 'read', 'sleep', 'awake', 'breakfast', 'party', 'relax', 'exercise'];;
tasksCompleted  = [true, false, true, true, false];

//Activity 1 - Edit the tasksCompleted array by programmatically doing the following:
/*  1) Remove the first completed task
    2) Add a new completed task of false at beginning of the array
    3) Add a new completed task of true at the end of the array
    4) Add two more completed tasks with a boolean value of your choice, to the end of the array
*/
//Add your code below


tasksCompleted.shift()
console.log(tasksCompleted[0])

tasksCompleted.unshift(false)
console.log(tasksCompleted[0])

tasksCompleted.push(true)
console.log(tasksCompleted[5])

tasksCompleted.push(true)
console.log(tasksCompleted[6])
tasksCompleted.push(true)
console.log(tasksCompleted[7])




//Activity 2 - Complete this function. 
//Create a for loop that can loop through an array and print out all the array items in the console.
//This function takes a parameter of arrayName.
    function displayArray(arrayName){
        for(x=0; x < arrayName.length; x += 1){
            console.log(arrayName[x])
        }




    }

    displayArray(tasks)



//Activity 4 - Complete this function.
//The purpose of this function is to calculate the sum of all the values in an array.
//Create a variable inside this function called total and set it equal to 0.
//Create a for loop that calculates the sum of all the values in an array store the answer in the total variable.
//Outside the for loop, console log the total.
    let array = [1,2,3,4]
    calculateTotal(array)


    function calculateTotal(array){
        let total = 0
    
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        console.log(sum);



    }



//Activity 5 - Call the calculateTotal function and pass tasksCompleted as an argument.
//Add your code below

calculateTotal(tasksCompleted)


//Activity 6 - Complete this function
//The purpose of this function is to calculate the average of the values put together in an array
//Create a variable inside this function called total and set it equal to 0
//Create a for loop that calculates the sum of all the values in an array, store the answer in the total variable
//Outside the for loop, create a variable called average and store your calculations of the average in that variable
//Add your code below


function averager(arrayName){
    let total = 0

    for (let i = 0; i < taskss.length; i++) {
        total += taskss[i];
    }
    console.log(total);

}
    let average =

//Activity 7 - Call your calculate average function with tasksCompleted array as it's argument
//Add your code below

averager(tasksCompleted)


