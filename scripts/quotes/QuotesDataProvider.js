const quotesCollection = [
    {
        text: "Don't go into dark caves.",
        author:"Smart Guy",
        location:"Key West, FL",
        date:"1/1/1985",
    },
    {
        text: "Travel everywhere.",
        author:"Other Guy",
        location:"Shanghai, China",
        date:"1/1/2004",
    },
    {
        text: "Meet all kinds of people.",
        author:"Deep Guy",
        location:"El Paso, TX",
        date:"1/1/1002",
    }
       
]

    export const useQuotes = () => {
        return quotesCollection.slice();
    }

