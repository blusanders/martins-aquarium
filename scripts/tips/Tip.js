/**
 *  Renders individual tip objects as HTML
 */
export const Tips = (tip) => {
    return`
    <div class="tipCard">
    <p class="tipCard__tipTitle">${tip.tipTitle}</p>
    <p class="tipCard__tipText">Species: ${tip.tipText}</p>
    </div>
    `
}

