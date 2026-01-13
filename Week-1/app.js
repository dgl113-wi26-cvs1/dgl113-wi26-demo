// Get elements from the DOM
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// Initialize counter value
let count = 0;

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Add event listener for increase button
increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

// Add event listener for decrease button
decreaseBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});