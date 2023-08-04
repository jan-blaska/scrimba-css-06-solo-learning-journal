import { countriesArray } from "/data.js";

const get = element => document.getElementById(element);

const gridSectionEl = get('grid-section');

gridSectionEl.innerHTML = renderCountriesCards();

function renderCountriesCards() {
    let countriesCards = '';
    countriesArray.forEach(function(country) {
        countriesCards += `
            <div class="card">
                <img src=${country.img.url} alt=${country.img.alt}>
                <span>${country.date}</span>
                <h1>${country.place}</h1>
                <p>${country.description}</p>
            </div>
        `;
    });
    return countriesCards;
}
