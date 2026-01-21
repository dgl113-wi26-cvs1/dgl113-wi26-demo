"use strict";

// ============================================
// BANNER CREATION AND CONTROL
// ============================================
// This section demonstrates how functions can create and modify HTML elements
// We'll create a banner when the page loads and provide functions to update it

// Function that runs automatically when the page loads
function createBanner() {
    const banner = document.getElementById('banner');
    const currentDate = new Date();
    const hours = currentDate.getHours();
    
    // Determine greeting based on time of day
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    
    banner.textContent = greeting + "! Welcome to JavaScript Functions!";
}

// Call createBanner when page loads
window.onload = createBanner;


// ============================================
// DEMO 1: Simple Function (No Parameters)
// ============================================
// This function doesn't take any input and doesn't return anything
// It simply performs an action (displays a message)

function greetStudent() {
    const outputDiv = document.getElementById('greeting-output');
    outputDiv.textContent = "Hello! Welcome to JavaScript Functions!";
}


// ============================================
// DEMO 2: Function with Parameters
// ============================================
// This function takes a parameter (name) and uses it
// Parameters are like variables that receive values when the function is called

function createGreeting(name) {
    return "Hello, " + name + "! Great to see you learning functions!";
}

function personalGreeting() {
    const nameInput = document.getElementById('name-input');
    const outputDiv = document.getElementById('personal-output');
    
    const userName = nameInput.value;
    
    if (userName === "") {
        outputDiv.textContent = "Please enter your name!";
    } else {
        // Call the function with the user's name as an argument
        const message = createGreeting(userName);
        outputDiv.textContent = message;
    }
}


// ============================================
// DEMO 3: Function with Return Value
// ============================================
// This function takes two parameters and RETURNS a result
// The return keyword sends a value back to where the function was called

function addNumbers(a, b) {
    const sum = a + b;
    return sum;
}

function calculateSum() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const outputDiv = document.getElementById('sum-output');
    
    // Convert string input to numbers using built-in parseFloat function
    const number1 = parseFloat(num1Input.value);
    const number2 = parseFloat(num2Input.value);
    
    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        outputDiv.textContent = "Please enter valid numbers!";
    } else {
        // Call our custom function and store the returned value
        const result = addNumbers(number1, number2);
        outputDiv.textContent = number1 + " + " + number2 + " = " + result;
    }
}


// ============================================
// DEMO 4: Using Built-in Functions
// ============================================
// JavaScript has many built-in functions we can use
// Math.random() generates a random decimal between 0 and 1
// Math.floor() rounds down to the nearest whole number

function generateRandomNumber() {
    const outputDiv = document.getElementById('random-output');
    
    // Math.random() returns a number between 0 and 0.999...
    const randomDecimal = Math.random();
    
    // Multiply by 100 to get a number between 0 and 99.999...
    const scaledNumber = randomDecimal * 100;
    
    // Math.floor() rounds down to get a whole number
    const randomInt = Math.floor(scaledNumber) + 1; // +1 makes it 1-100
    
    outputDiv.textContent = "Your random number is: " + randomInt;
}


// ============================================
// DEMO 5: Built-in String Functions
// ============================================
// Strings have many built-in functions (methods) we can use
// .toUpperCase() converts to uppercase
// .toLowerCase() converts to lowercase
// .length gives us the number of characters

function transformText() {
    const textInput = document.getElementById('text-input');
    const outputDiv = document.getElementById('text-output');
    
    const userText = textInput.value;
    
    if (userText === "") {
        outputDiv.textContent = "Please enter some text!";
    } else {
        // Use built-in string methods
        const uppercase = userText.toUpperCase();
        const lowercase = userText.toLowerCase();
        const length = userText.length;
        
        outputDiv.innerHTML = 
            "Original: " + userText + "<br>" +
            "Uppercase: " + uppercase + "<br>" +
            "Lowercase: " + lowercase + "<br>" +
            "Length: " + length + " characters";
    }
}


// ============================================
// DEMO 6: Prompt-based Functions
// ============================================
// prompt() is a built-in function that shows a dialog box
// It returns the user's input as a string
// These examples combine prompts with custom functions

function calculateAge() {
    const outputDiv = document.getElementById('prompt-output');
    
    // prompt() displays a dialog box and returns user input
    const birthYear = prompt("Enter your birth year:");
    
    // Check if user clicked Cancel (returns null)
    if (birthYear === null) {
        outputDiv.textContent = "Calculation cancelled.";
        return;
    }
    
    // Convert string to number
    const year = parseFloat(birthYear);
    
    if (isNaN(year)) {
        outputDiv.textContent = "Please enter a valid year!";
    } else {
        const currentYear = 2024;
        const age = currentYear - year;
        outputDiv.textContent = "You are approximately " + age + " years old!";
    }
}


function gradeCalculator() {
    const outputDiv = document.getElementById('prompt-output');
    
    // Get score from user using prompt
    const scoreInput = prompt("Enter your test score (0-100):");
    
    if (scoreInput === null) {
        outputDiv.textContent = "Grade calculation cancelled.";
        return;
    }
    
    const score = parseFloat(scoreInput);
    
    if (isNaN(score) || score < 0 || score > 100) {
        outputDiv.textContent = "Please enter a valid score between 0 and 100!";
    } else {
        // Call helper function to determine grade
        const grade = determineGrade(score);
        outputDiv.textContent = "Score: " + score + " → Grade: " + grade;
    }
}

// Helper function that determines letter grade
function determineGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}


function temperatureConverter() {
    const outputDiv = document.getElementById('prompt-output');
    
    // Get temperature value
    const tempInput = prompt("Enter temperature in Celsius:");
    
    if (tempInput === null) {
        outputDiv.textContent = "Conversion cancelled.";
        return;
    }
    
    const celsius = parseFloat(tempInput);
    
    if (isNaN(celsius)) {
        outputDiv.textContent = "Please enter a valid temperature!";
    } else {
        // Call conversion function
        const fahrenheit = convertToFahrenheit(celsius);
        outputDiv.textContent = celsius + "°C = " + fahrenheit + "°F";
    }
}

// Function that converts Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    // Round to 1 decimal place
    return Math.round(fahrenheit * 10) / 10;
}


// ============================================
// DEMO 7: Banner Control Functions
// ============================================
// These functions demonstrate how to dynamically modify HTML elements

function changeBannerMessage() {
    const banner = document.getElementById('banner');
    const newMessage = prompt("Enter a new banner message:");
    
    if (newMessage === null) {
        return; // User clicked cancel
    }
    
    if (newMessage.trim() === "") {
        alert("Message cannot be empty!");
    } else {
        banner.textContent = newMessage;
    }
}


function changeBannerColor() {
    const banner = document.getElementById('banner');
    
    // Array of color options
    const colors = ['#0066cc', '#cc0066', '#00cc66', '#cc6600', '#6600cc', '#009999'];
    
    // Get random color from array using Math.random()
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    
    // Change the background color
    banner.style.backgroundColor = newColor;
}


function resetBanner() {
    const banner = document.getElementById('banner');
    
    // Reset to original state
    banner.textContent = "Welcome to JavaScript Functions!";
    banner.style.backgroundColor = '#0066cc';
}