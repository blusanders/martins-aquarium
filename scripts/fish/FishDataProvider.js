
const fishCollection = [
    {
        name: "Nemo",
        species:"Amphiprioninae",
        location:"Great Barrier Reef",
        size:"2-3in.",
        food: "Impossible Burger",
        image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },
    
    {
        name: "Marlin",
        species:"Amphiprioninae",
        location:"Great Barrier Reef",
        size:"2-3in.",
        food: "Hot Chicken",
        image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },

    {
        name: "Chopper",
        species:"Betta Splendens",
        location:"Cambodia",
        size:"1-5in.",
        food: "Sushi",
        image: "https://i.pinimg.com/originals/8f/f2/e5/8ff2e583ce1d96921bbf00b540b72fa0.jpg"
    },

    {
        name: "Sunny",
        species:"Actinopterygii",
        location:"England's Southwestern Coast",
        size:"6ft.",
        food: "BBQ",
        image:"https://media4.s-nbcnews.com/j/newscms/2020_42/1621918/sunfish-today-main-201017-01_efcfea495c281501c8e71d505c1813be.fit-1240w.jpg" 
    }

]

export const useFish = () => {
    return fishCollection.slice();
}
