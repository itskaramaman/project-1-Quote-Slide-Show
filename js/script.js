/******************************************
*****************************************/

/*** 
 * `quotes` array containing object with keys: quote, source, citation and year
***/
const quotes = [
    {
        quote: "Nothing is impossible. The word itself says I am possible!",
        source: "Alexander the Great",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/",
        year: 1985
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        source: "Winston Churchill",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        source: "Malala Yousafzai",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/"
    },
    {
        quote: "At the end of the day, whether or not those people are comfortable with how you are living your life does not matter. What matters is whether you're comfortable with it",
        source: "Dr. Phil",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/",
        year: 1996
    },
    {
        quote: "Spread love everywhere you go.",
        source: "Mother Teresa",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/"
    },
    {
        quote: "You can be everything. You can be the infinite amount of things that people are.",
        source: "Kesha",
        citation: "https://parade.com/973277/jessicasager/inspirational-quotes/"
    }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    // variable to store random number between 0 and quotes lenght - 1 
    let randomNumber = Math.floor(Math.random() * quotes.length);
    // return the random quote
    return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
    // get the random quote
    let randomQuote = getRandomQuote();

    // creating the html string with quote and source without closing </p>
    let htmlString = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

    // if citation for that quote is available then add a <span> for citation
    if(randomQuote.citation) {
        htmlString+=`<span class="citation">${randomQuote.citation}</span>`;
    }

    // if year for that quote is available then add a <span> for that
    if(randomQuote.year) {
        htmlString+=`<span class="year">${randomQuote.year}</span>`;
    }

    // adding a closing <p>
    htmlString+='</p>';

    // set the inner HTML as htmlString created
    document.getElementById("quote-box").innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

// onn load-quote click, call the printQuote 
document.getElementById('load-quote').addEventListener('click', printQuote);