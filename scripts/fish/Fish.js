//Fish returns each fish card HTML

export const Fish = (fish,holiness) => {
//console.table(fish)
    return `
    <div class="fishCard">
    <div><img class=image__fishCards src="${fish.image}"></div>
    <p class="fishCard__name">${fish.name}</p>
    <p class="fishCard__species">Species: ${fish.species}</p>
    <p class="fishCard__location">Location: ${fish.location}</p>
    <p class="fishCard__location">Diet: ${fish.food}</p>
    <p class="fishCard__length">Size: ${fish.size}</p>
    <p class="fishCard__holiness">${holiness}</p>
    </div>
    `
}

