//render fish list

//removed useFish bc full fish list isn't used anymore
import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js';
import { Fish } from "./Fish.js";

// loop through the fish data
// each fish gets returned formatted with HTML via the Fish function
// writes out HTML in between the class element via the query selector

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList");
    
    //display mod 3 fish first
    const fishes = mostHolyFish()
    contentElement.innerHTML += fishes.map(fish => Fish(fish,"Holy")).join("")
    // for (const fish of fishes){
    //     contentElement.innerHTML += Fish(fish,"Holy")
    // }

    //display mod 5 fish next
    const soldiersArray = soldierFish()
    contentElement.innerHTML += soldiersArray.map(fish => Fish(fish,"Soldier")).join("")

    //display rest of fish
    const notHolyArray = nonHolyFish()
    contentElement.innerHTML += notHolyArray.map(fish => Fish(fish,"Not Holy")).join("")
}







//NO LONGER NEED ENTIRE ARRAY
    // const fishes = useFish()
    // let fishHTML = ""
    // for (const fish of fishes){
    //     fishHTML += Fish(fish)
    // }

        // for (const fish of fishes){
    //     fishHTML += Fish(fish,"Holy")
    // }

  // for (const fish of soldiersArray){
    //     fishHTML += Fish(fish,"Soldier")
    // }

        //display all other fish last
    // for (const fish of nonHolyArray){
    //     fishHTML += Fish(fish,"Not Holy")
    // }

    //contentElement.innerHTML += fishHTML;
