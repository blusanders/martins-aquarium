/**
 *  Renders individual quote objects as HTML
 */
export const Quotes = (quote) => {
    return`
    <div class="quoteCard">
    <p class="quoteCard__text">${quote.text}</p>
    <p class="quoteCard__author">${quote.author}</p> 
    <p class="quoteCard__location">${quote.location}, ${quote.date}</p>
    </div>
    `
}

