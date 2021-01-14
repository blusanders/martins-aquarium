//render quote list

//get quote array slice copy
import { useQuotes } from './QuotesDataProvider.js';
//html render
import { Quotes } from "./Quotes.js";

export const QuotesList = () => {

    const contentElement = document.querySelector(".containerLeft__travelQuotes");
    const allQuotes = useQuotes()

    let quotesHTML="";
    for (const eachQuote of allQuotes){
        quotesHTML += Quotes(eachQuote);
    }
    contentElement.innerHTML += quotesHTML;

}