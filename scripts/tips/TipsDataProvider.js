const tipsCollection = [
    {
        tipTitle: "Test the Water Quality",
        tipText: "Description 1"
    },
    
    {
        tipTitle: "Remove Algae",
        tipText: "Description 2"
    },
    
    {
        tipTitle: "Prune the Plants",
        tipText: "Description 3"
    },

    {
        tipTitle: "Clean the Filter",
        tipText: "Description 4"
    },

    {
        tipTitle: "Refill the Water",
        tipText: "Description 5"
    }
]

export const useTips = () => {
    return tipsCollection.slice();
}

