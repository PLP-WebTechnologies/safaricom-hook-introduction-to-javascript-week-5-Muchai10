// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";  // String
let age = 25;           // Number
let isStudent = true;   // Boolean
let hobbies = ["Reading", "Coding", "Gaming"]; // Array
let person = { name: "Alice", age: 22 };       // Object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById("calc-result").textContent = `Result: ${result}`;
}
calculator();

// Greet User Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Margaret"));  // Example Output

// Part 2: JavaScript Control Structures

// Check Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
let message = userAge >= 18 ? "You are eligible to vote!" : "You are not eligible to vote.";
document.getElementById("voting-message").textContent = message;

// Loop: Display Numbers from 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Modify Heading Text
document.getElementById("main-heading").textContent = "JavaScript in Action!";

// Add Dynamic Content to the Webpage
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
