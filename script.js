//Array of quotes
const quotes = [
                "You are braver than you believe, stronger than you seem, and smarter than you think."
                "Don't wish for it, work for it."
                "You never lose, either you win or learn."
                "Attitude is the 'little' thing that makes a big difference."
                "Where there is a will, there is a way."
                
document.addEventListener('DOMContentLoaded', function () {
    // Get elements from the DOM
    const generateQuoteButton = document.getElementById('generateQuote');
    const quoteDisplay = document.getElementById('quoteDisplay');

    // Add click event listener to the button
    generateQuoteButton.addEventListener('click', function () {
        // Get a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Display the random quote
        quoteDisplay.textContent = randomQuote;
    });
});



];

