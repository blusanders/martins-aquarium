//render fish list

import { useFish } from './FishDataProvider.js';
import { Fish } from "./Fish.js";

// find first element of class .containerLeft__fishList
    // useFish provides the array of fish data
    // loop through the fish data
    // each fish gets returned formatted with HTML via the Fish function
    // writes out HTML in between the class element via the query selector

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList");
    const fishes = useFish()

    for (const fish of fishes){
        let fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML;
    }

}

