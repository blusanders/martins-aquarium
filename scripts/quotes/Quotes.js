/**
 *  Renders individual quote objects as HTML
 */
export const Quotes = (quote) => {
    return`
    <div class="quoteCard">
    <p class="quoteCard__name">${quote.text}</p>
    <p class="quoteCard__country">${quote.author}</p>
    <p class="quoteCard__bodyOfWater">${quote.location}</p>
    <p class="quoteCard__landmark">${quote.date}</p>
    </div>
    `
}

