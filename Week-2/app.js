// Function to calculate the total cost using prompts
function calculateTotal() {
    console.log("=== Shopping Calculator Started ===");
    
    // Ask for user's name using prompt (returns a string)
    var userName = prompt("What is your name?");
    console.log("User name (string):", userName);
    
    // Check if user cancelled
    if (userName === null || userName === "") {
        console.log("User cancelled or entered empty name");
        alert("Calculator cancelled!");
        return;
    }
    
    // Ask for quantity (prompt returns a string)
    var quantityInput = prompt("How many items do you want to buy?");
    console.log("Quantity input (string):", quantityInput);
    
    // Check if user cancelled
    if (quantityInput === null || quantityInput === "") {
        console.log("User cancelled or entered empty quantity");
        alert("Calculator cancelled!");
        return;
    }
    
    // Ask for price per item (prompt returns a string)
    var priceInput = prompt("What is the price per item? ($)");
    console.log("Price input (string):", priceInput);
    
    // Check if user cancelled
    if (priceInput === null || priceInput === "") {
        console.log("User cancelled or entered empty price");
        alert("Calculator cancelled!");
        return;
    }
    
    // Convert strings to numbers
    var quantity = Number(quantityInput);
    var pricePerItem = Number(priceInput);
    
    console.log("Quantity converted to number:", quantity);
    console.log("Price per item converted to number:", pricePerItem);
    
    // Validate that the numbers are valid
    if (isNaN(quantity) || isNaN(pricePerItem)) {
        console.log("Error: Invalid number entered");
        alert("Please enter valid numbers!");
        return;
    }
    
    // Calculate total cost (number operation)
    var totalCost = quantity * pricePerItem;
    console.log("Total cost calculated:", totalCost);
    
    // Create result message (string concatenation)
    var message = "Hello " + userName + "!";
    var itemInfo = "You are buying " + quantity + " items at $" + pricePerItem.toFixed(2) + " each.";
    var total = "Total Cost: $" + totalCost.toFixed(2);
    
    console.log("Result message:", message);
    console.log("Item info:", itemInfo);
    console.log("Total:", total);
    console.log("=== Calculation Complete ===");
    
    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = "<h2>Receipt</h2>" +
                            "<p><strong>" + message + "</strong></p>" +
                            "<p>" + itemInfo + "</p>" +
                            "<p style='font-size: 20px; color: #2e7d32;'><strong>" + total + "</strong></p>";
}

// Log when page loads
console.log("Shopping Calculator loaded successfully!");
console.log("Open the console (F12) to see all the logged information!");