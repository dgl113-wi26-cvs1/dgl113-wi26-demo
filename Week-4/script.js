"use strict";

// ========================================
// INITIAL ARRAYS
// ========================================

// Our main fruits array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// A second array for demonstrating concat
let vegetables = ["Carrot", "Broccoli", "Spinach"];

// ========================================
// INITIALIZATION - Display initial array
// ========================================

// Simple alert when page loads
alert("Welcome to JavaScript Arrays Demo! 🎉\n\nLet's learn about arrays together!");

// Display the initial array
displayCurrentArray();

// ========================================
// FUNCTION: Display Current Array
// ========================================

function displayCurrentArray() {
    // Get the display elements
    const fruitsDisplay = document.getElementById("fruitsDisplay");
    const arrayLength = document.getElementById("arrayLength");
    const vegetablesDisplay = document.getElementById("vegetablesDisplay");
    
    // Display fruits array with brackets
    fruitsDisplay.textContent = "[" + fruits.join(", ") + "]";
    
    // Display array length
    arrayLength.textContent = fruits.length;
    
    // Display vegetables array
    vegetablesDisplay.textContent = "[" + vegetables.join(", ") + "]";
}

// ========================================
// FUNCTION: Add Fruit (Push Method)
// ========================================

function addFruit() {
    // Prompt user for a new fruit
    const newFruit = prompt("Enter a new fruit to add to the array:");
    
    // Check if user entered something
    if (newFruit !== null && newFruit.trim() !== "") {
        // Push the new fruit to the array
        fruits.push(newFruit.trim());
        
        // Update display
        displayCurrentArray();
        
        // Show result
        const resultElement = document.getElementById("pushPopResult");
        resultElement.innerHTML = `<strong>✅ Push Operation:</strong> Added "${newFruit.trim()}" to the array.<br>
                                   <strong>New Length:</strong> ${fruits.length}`;
    } else {
        alert("No fruit was entered!");
    }
}

// ========================================
// FUNCTION: Remove Fruit (Pop Method)
// ========================================

function removeFruit() {
    // Check if array has elements
    if (fruits.length === 0) {
        alert("The array is empty! Nothing to remove.");
        return;
    }
    
    // Pop the last element
    const removedFruit = fruits.pop();
    
    // Update display
    displayCurrentArray();
    
    // Show result
    const resultElement = document.getElementById("pushPopResult");
    resultElement.innerHTML = `<strong>❌ Pop Operation:</strong> Removed "${removedFruit}" from the array.<br>
                               <strong>New Length:</strong> ${fruits.length}`;
}

// ========================================
// FUNCTION: Update Table
// ========================================

function updateTable() {
    // Get the table body element
    const tableBody = document.getElementById("tableBody");
    
    // Clear existing table rows
    tableBody.innerHTML = "";
    
    // Loop through the fruits array
    for (let i = 0; i < fruits.length; i++) {
        // Create a new row
        const row = document.createElement("tr");
        
        // Create index cell
        const indexCell = document.createElement("td");
        indexCell.textContent = i;
        
        // Create fruit name cell
        const fruitCell = document.createElement("td");
        fruitCell.textContent = fruits[i];
        
        // Append cells to row
        row.appendChild(indexCell);
        row.appendChild(fruitCell);
        
        // Append row to table body
        tableBody.appendChild(row);
    }
    
    alert("Table updated successfully! ✅");
}

// ========================================
// FUNCTION: Show toString Method
// ========================================

function showToString() {
    // Convert array to string using toString()
    const arrayAsString = fruits.toString();
    
    // Display result
    const resultElement = document.getElementById("toStringResult");
    resultElement.innerHTML = `<strong>Original Array:</strong> [${fruits.join(", ")}]<br>
                               <strong>Using toString():</strong> "${arrayAsString}"<br>
                               <strong>Explanation:</strong> The toString() method converts the array to a comma-separated string.`;
    
    // Also show in an alert
    alert("toString() Result:\n\n" + arrayAsString);
}

// ========================================
// FUNCTION: Combine Arrays (concat Method)
// ========================================

function combineArrays() {
    // Concatenate fruits and vegetables arrays
    const combined = fruits.concat(vegetables);
    
    // Display result
    const resultElement = document.getElementById("concatResult");
    resultElement.innerHTML = `<strong>Fruits Array:</strong> [${fruits.join(", ")}]<br>
                               <strong>Vegetables Array:</strong> [${vegetables.join(", ")}]<br>
                               <strong>Combined Array:</strong> [${combined.join(", ")}]<br>
                               <strong>Combined Length:</strong> ${combined.length}<br>
                               <strong>Explanation:</strong> The concat() method joins two or more arrays and returns a new array.`;
}

// ========================================
// FUNCTION: Update Array Element
// ========================================

function updateElement() {
    // Check if array has elements
    if (fruits.length === 0) {
        alert("The array is empty! Add some fruits first.");
        return;
    }
    
    // Prompt user for index
    const indexInput = prompt(`Enter the index to update (0 to ${fruits.length - 1}):`);
    
    // Check if user canceled
    if (indexInput === null) {
        return;
    }
    
    // Convert to number
    const index = parseInt(indexInput);
    
    // Validate index
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        alert("Invalid index! Please enter a number between 0 and " + (fruits.length - 1));
        return;
    }
    
    // Store old value
    const oldValue = fruits[index];
    
    // Prompt for new value
    const newValue = prompt(`Enter new value for index ${index}.\nCurrent value: "${oldValue}"`);
    
    // Check if user entered something
    if (newValue !== null && newValue.trim() !== "") {
        // Update the array element
        fruits[index] = newValue.trim();
        
        // Update display
        displayCurrentArray();
        
        // Show result
        const resultElement = document.getElementById("updateResult");
        resultElement.innerHTML = `<strong>🔄 Update Operation:</strong><br>
                                   <strong>Index:</strong> ${index}<br>
                                   <strong>Old Value:</strong> "${oldValue}"<br>
                                   <strong>New Value:</strong> "${fruits[index]}"<br>
                                   <strong>Updated Array:</strong> [${fruits.join(", ")}]`;
    } else {
        alert("No value was entered!");
    }
}

// ========================================
// FUNCTION: Add Custom Fruit
// ========================================

function addCustomFruit() {
    // Prompt user for their favorite fruit
    const favoriteFruit = prompt("What's your favorite fruit? 🍎🍌🍊");
    
    // Check if user entered something
    if (favoriteFruit !== null && favoriteFruit.trim() !== "") {
        // Add to array
        fruits.push(favoriteFruit.trim());
        
        // Update display
        displayCurrentArray();
        
        // Show personalized message
        const resultElement = document.getElementById("customResult");
        resultElement.innerHTML = `<strong>🎉 Great choice!</strong> "${favoriteFruit.trim()}" has been added to our fruits array!<br>
                                   <strong>Current Array:</strong> [${fruits.join(", ")}]<br>
                                   <strong>Array Length:</strong> ${fruits.length}`;
        
        // Show alert
        alert(`Awesome! ${favoriteFruit.trim()} is now in the array! 🎊`);
    } else {
        alert("You didn't enter a fruit name!");
    }
}

// ========================================
// ADDITIONAL DEMONSTRATION - Console Log
// ========================================

// Log information to console (students can check browser console)
console.log("=== JavaScript Arrays Demo ===");
console.log("Initial Fruits Array:", fruits);
console.log("Array Length:", fruits.length);
console.log("First Element (index 0):", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);
console.log("Vegetables Array:", vegetables);
console.log("==============================");