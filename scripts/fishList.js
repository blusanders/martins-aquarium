/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from './FishDataProvider.js';
import { Fish } from "./Fish.js";

export const FishList = () => {

    // find first element of class .containerLeft__fishList
    // useFish provides the array of fish data
    const contentElement = document.querySelector(".containerLeft__fishList");
    const fishes = useFish()

    //loop through the fish data and write fish element with HTML from fish.js
    for (const fish of fishes){

        //each fish gets returned formatted with HTML via the Fish function
        let fishHTML = Fish(fish)

        //write out the HTML in between the class element from the query selector
        contentElement.innerHTML += fishHTML;
    }

}

