//ECHO is on.

const axios = require('axios');

// Function to fetch a quote from Zen Quotes API
const getQuote = async () => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0];
    console.log(`Here's a motivational quote for you:`);
    console.log(`"${quote.q}" - ${quote.a}`);
  } catch (error) {
    console.log("Could not fetch a quote. Try again later.");
  }
};

// Call the function
getQuote();
