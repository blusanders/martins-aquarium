//render fish list

//removed useFish bc full fish list isn't used anymore
import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js';
import { Fish } from "./Fish.js";

// loop through the fish data
// each fish gets returned formatted with HTML via the Fish function
// writes out HTML in between the class element via the query selector

export const FishList = () => {

    // find first element of class .containerLeft__fishList
    const contentElement = document.querySelector(".containerLeft__fishList");
    // useFish provides the array of fish data
    
    //NO LONGER NEED ENTIRE ARRAY
    // const fishes = useFish()
    // let fishHTML = ""
    // for (const fish of fishes){
    //     fishHTML += Fish(fish)
    // }

    //display mod 3 fish first
    const fishes = mostHolyFish()
    let fishHTML = ""
    for (const fish of fishes){
        fishHTML += Fish(fish,"Holy")
    }

    //display mod 5 fish next
    const soldiersArray = soldierFish()
    for (const fish of soldiersArray){
        fishHTML += Fish(fish,"Soldier")
    }

    const nonHolyArray = nonHolyFish()
    //display all other fish last
    for (const fish of nonHolyArray){
        fishHTML += Fish(fish,"Not Holy")
    }

    contentElement.innerHTML += fishHTML;

}

