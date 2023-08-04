import { countriesArray } from "/data.js";

const get = element => document.getElementById(element);

let gridSectionEl = get('grid-section');

gridSectionEl.innerHTML = renderCountriesCards(3);


function renderCountriesCards(n) {
    let countriesCards = '';
    
    for (let i = 0; i < n; i++) {
        countriesCards += `
            <div class="card">
                <img src=${countriesArray[i].img.url} alt=${countriesArray[i].img.alt}>
                <span>${countriesArray[i].date}</span>
                <h1>${countriesArray[i].place}</h1>
                <p>${countriesArray[i].description}</p>
            </div>
        `;
    };
    return countriesCards;
}