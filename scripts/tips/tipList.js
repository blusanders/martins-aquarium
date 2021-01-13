//render tip list

import { useTips } from './scripts/tips/tipsDataProvider.js';
import { Tips } from "./scripts/tips/tips.js";

export const TipsList = () => {

    const contentElement = document.querySelector(".travelTips");
    const allTips = useTips()

    for (const x of allTips){
        let tipHTML = Tips(x)
        contentElement.innerHTML += tipHTML;
    }

}

