const locationCollection = [
    {
        name: "Laredo",
        country:"USA",
        bodyofWater:"Rio Grande",
        landmark:"USA/Mexico Border",
    },
    
    {
        name: "Honolulu",
        country:"USA",
        bodyofWater:"Hanama Bay",
        landmark:"Diamond Head",
    },
    
    {
        name: "Galápagos Islands",
        country:"Equador",
        bodyofWater:"Pacific Ocean",
        landmark:"Archipelago",
    },
    
    {
        name: "Beijing",
        country:"China",
        bodyofWater:"Pacific Ocean",
        landmark:"Great Wall of China",
    },
    
    export const useLocations = () => {
        return locationCollection.slice();
    }