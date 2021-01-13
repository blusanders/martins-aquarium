//render tip list

import { useTips } from './TipsDataProvider.js';
import { Tips } from "./Tips.js";

export const TipsList = () => {

    const contentElement = document.querySelector(".travelTips");
    const allTips = useTips()

    let tipHTML=""
    for (const eachTip of allTips){
        tipHTML += Tips(eachTip)
    }
    contentElement.innerHTML += tipHTML;

}


