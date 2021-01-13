//render fish list

import { useFish } from './FishDataProvider.js';
import { Fish } from "./Fish.js";

// loop through the fish data
// each fish gets returned formatted with HTML via the Fish function
// writes out HTML in between the class element via the query selector

export const FishList = () => {

    // find first element of class .containerLeft__fishList
    const contentElement = document.querySelector(".containerLeft__fishList");
    // useFish provides the array of fish data
    const fishes = useFish()

    let fishHTML = ""
    for (const fish of fishes){
        fishHTML += Fish(fish)
    }
    contentElement.innerHTML += fishHTML;

}

