//❓ Step 55
// Before moving on, take a moment to review how functions work.
//
// Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.
//
// Your function should not use hard-coded values. An example of a hard-coded function might be:
//
// Example Code
// function sayName(firstName, lastName) {
//   return "John Doe";
// }
//
// sayName("Camper", "Cat");
// This function would return "John Doe" regardless of the arguments passed to the parameters firstName, and lastName, so "John Doe" is considered a hard-coded value.
//
// Declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.
//✅
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}
function addTwoNumbers(a, b){
    return a + b
}
const sum = addTwoNumbers(5, 10);
console.log(sum)

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);