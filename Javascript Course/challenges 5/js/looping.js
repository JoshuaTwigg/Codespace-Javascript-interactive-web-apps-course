//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below

let tasks = ["swim","eat","dance","jump","smile","laugh","enchant","charm","run","enjoy"]

for(x=0; x < tasks.length; x +=1 ){
    console.log("me likey " + tasks[x])
}




//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below

let taskss = [1,2,3,4,5,6,7,8,9,10]


let sum = 0;

for (let i = 0; i < taskss.length; i++) {
    sum += taskss[i];
}
console.log(sum);





//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below

let tasksss = ["swim","eat","dance","jump","smile","laugh","enchant","charm","run","enjoy"]

for(x=0; x < tasksss.length; x+=1){
    console.log(15*x)

}





//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below
let timesTable = []

let taskssss = ["swim","eat","dance","jump","smile","laugh","enchant","charm","run","enjoy"]

for(x=0; x < taskssss.length; x+=1){
    let answers = console.log(15*x)
    timesTable.push(answers)
    console.log(timesTable)
}


//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below

for(x=0; x < timesTable.length; x+=1){
    console.log(timesTable[x])
}

//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below

let timesTables = [1,2,3,4,5]
let me = timesTables.reduce((a, b) => a + b, 0) / timesTable.length;

console.log(me)