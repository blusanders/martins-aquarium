//render quote list

import { useQuotes } from './QuotesDataProvider.js';
import { Quotes } from "./Quotes.js";

export const QuotesList = () => {

    const contentElement = document.querySelector(".containerLeft__travelQuotes");
    const allQuotes = useQuotes()

    let quotesHTML=""
    for (const eachQuote of allQuotes){
        quoteHTML += Quotes(eachQuote);
    }
    contentElement.innerHTML += quotesHTML;

}


