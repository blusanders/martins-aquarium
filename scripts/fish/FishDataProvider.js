
const fishCollection = [
    {
        name: "Nemo",
        species:"Amphiprioninae",
        location:"Great Barrier Reef",
        size:2,
        food: "Impossible Burger",
        image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },
    
    {
        name: "Marlin",
        species:"Amphiprioninae",
        location:"Great Barrier Reef",
        size:7,
        food: "Hot Chicken",
        image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },

    {
        name: "Chopper",
        species:"Betta Splendens",
        location:"Cambodia",
        size:10,
        food: "Sushi",
        image: "https://i.pinimg.com/originals/8f/f2/e5/8ff2e583ce1d96921bbf00b540b72fa0.jpg"
    },

    {
        name: "Sunny",
        species:"Actinopterygii",
        location:"England's Southwestern Coast",
        size:72,
        food: "BBQ",
        image:"https://media4.s-nbcnews.com/j/newscms/2020_42/1621918/sunfish-today-main-201017-01_efcfea495c281501c8e71d505c1813be.fit-1240w.jpg" 
    },

    {
        name: "Jim",
        species:"Actinopterygii",
        location:"East Nashville",
        size:3,
        food: "Tofu",
        image:"https://www.algaebarn.com/wp-content/uploads/2019/10/shutterstock_135440567.jpg" 
    },

    {
        name: "This Fish",
        species:"Actinopterygii",
        location:"PNW",
        size:27,
        food: "Keto",
        image:"https://m.liveaquaria.com/images/categories/large/lg_72329_Royal_Gramma_Basslet.jpg" 
    },

    {
        name: "Other Fish",
        species:"Actinopterygii",
        location:"Indian Ocean",
        size:35,
        food: "Pasta",
        image:"https://prod03.pspcdn.com/-/media/Images/PSP/ResourceCenter/Fish/saltwater_fish.ashx?la=en&modified=20161223131159" 
    }
]

//returns ALL fish
export const useFish = () => {
    return fishCollection.slice()
}

   
//returns only fish divisible by THREE
// 3, 6, 9, 12, etc... fish
export const mostHolyFish = () => {
    
    const holyFish = []
    for (const eachFish of fishCollection) {
        if (eachFish.size % 3 ===0 ){
            holyFish.push(eachFish);
        }
    }
    return holyFish;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const eachFish of fishCollection) {
        if (eachFish.size % 5 ===0 ){
            soldiers.push(eachFish);
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const eachFish of fishCollection) {
        if (eachFish.size % 5 !== 0 && eachFish.size % 3 !== 0 ){
            regularFish.push(eachFish);
        }
    }
    return regularFish

}