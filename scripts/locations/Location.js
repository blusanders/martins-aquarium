/**
 *  Renders individual location objects as HTML
 */
export const Locations = (location) => {
    return`
    <div class="locationCard">
    <p class="locationCard__name">${location.name}</p>
    <p class="locationCard__country">${location.country}</p>
    <p class="locationCard__bodyOfWater">${location.bodyOfWater}</p>
    <p class="locationCard__landmark">${location.landmark}</p>
    </div>
    `
}

