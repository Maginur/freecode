/*Step 82
The text is gone again! Empty strings evaluate to false, making them a falsy value. You will learn more about truthy and falsy values in future projects.

In addition to if statements, JavaScript also has else if statements. else if statements allow you to check multiple conditions in a single block of code.

Here is the syntax for an else if statement:

Example Code
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
}
If the first condition is false, JavaScript will check the next condition in the chain. If the second condition is false, JavaScript will check the third condition, and so on.

Below your if statement, add an else if statement that checks if 5 is less than 10. Then inside the body of the else if statement, log the string "5 is less than 10" to the console.

Check the console to see the results.*/
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TO DO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if ("") {
    console.log("Condition is true");
}
else if (5<10){
    console.log("5 is less than 10")
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);