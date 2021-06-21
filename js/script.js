const quotes = [
    {
        quote: "All that is human must retrograde if it does not advance.",
        source: "Edward Gibbon",
        year: "(1737 - 1794)",
    },
    {
        quote:"There is no difficulty that enough love will not conquer; no disease that enough love will not heal; no door that enough love will not open.",
        source: "Emmet Fox",
    },
    {
        quote:"Posterity is as likely to be wrong as anyone else.",
        source: "Heywood Broun",
        year: "(1888 - 1939)",
        citation: " Sitting on the World"
    },
    {
        quote:"Zoo: An excellent place to study the habits of human beings.",
        source: "Evan Esar",
        year: "(1899 - 1995)",
        citation: "Esar's Comic Dictionary"
    },
    {
        quote:"No matter how advanced your camera you still need to be responsible for getting it to the right place at the right time and pointing it in the right direction to get the photo you want.",
        source: "Ken Rockwell",
        citation: "Your Camera Does Not Matter"
    },
    {
        quote:"Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
        source: "Princess Diana"
    }
];


/*
    This method generates numbers to generate random quotes
*/
const getRandomNumber = (max,min) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}


/*
    Returns the quote in the index produced based on the length of the array
*/
let quote = "";
const getRandomQuote = (arr) => {
    const length = arr.length;
    const randomIndex = getRandomNumber(0,length);
    quote = arr[randomIndex];
    return quote;
}


/*
    This method create random rgb colors for
    each quote
*/
const getRandomColor = () => {
    const red = getRandomNumber(0,300);
    const green = getRandomNumber(0,300);
    const blue = getRandomNumber(0,300);
    return `rgb(${red},${green},${blue})`;
}


/*
    This creates the rgb preference to quote it
*/
const printQuote = () => {
    const randomQuote = getRandomQuote(quotes);
    let html = `<p class="quote"> ${randomQuote.quote} </p>
                  <p class="source"> ${randomQuote.source}`;
    if(randomQuote.citation){
        html += ` <span class = "citation">${randomQuote.citation}</span>`;
    }
    if(randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }
    html += "</p>";
    document.getElementById('quote-box').innerHTML = html;
    document.querySelector('body').style.backgroundColor = getRandomColor();
}


/*
    Quotes and background colors automatically refresh at regular intervals.
 */
setInterval(printQuote,3000);


document.getElementById('load-quote').addEventListener("click", printQuote, false);