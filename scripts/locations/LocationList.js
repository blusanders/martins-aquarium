//render tip list

import { useLocations } from './LocationDataProvider.js';
import { Locations } from "./Location.js";

export const LocationsList = () => {

    const contentElement = document.querySelector(".containerLeft__travelLocations");
    const allLocs = useLocations()

    let locHTML=""
    for (const eachLoc of allLocs){
        locHTML += Locations(eachLoc)
    }
    contentElement.innerHTML += locHTML;

}


