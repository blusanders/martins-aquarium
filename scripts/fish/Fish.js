/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
    <div class="fishCard">

    <div><img class=image__fishCards src="${fish.image}"></div>
    <p class="fishCard__name">${fish.name}</p>
    <p class="fishCard__species">Species: ${fish.species}</p>
    <p class="fishCard__location">Location: ${fish.location}</p>
    <p class="fishCard__length">Size: ${fish.size}</p>

    </div>
    `
}

