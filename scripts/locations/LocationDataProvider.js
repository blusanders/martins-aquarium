const locationCollection = [
    {
        name: "Laredo",
        country:"USA",
        bodyOfWater:"Rio Grande",
        landmark:"USA/Mexico Border",
    },
    
    {
        name: "Honolulu",
        country:"USA",
        bodyOfWater:"Hanama Bay",
        landmark:"Diamond Head",
    },
    
    {
        name: "Galápagos Islands",
        country:"Equador",
        bodyOfWater:"Pacific Ocean",
        landmark:"Archipelago",
    },
    
    {
        name: "Beijing",
        country:"China",
        bodyOfWater:"Pacific Ocean",
        landmark:"Great Wall of China",
    },
]

    export const useLocations = () => {
        return locationCollection.slice();
    }