import { countriesArray } from "/data.js";

const get = element => document.getElementById(element);

let homeBtnEl = get('home');
let aboutMeBtnEl = get('about-me');

let i = 0;

homeBtnEl.addEventListener('click', function() {
    console.log("Home button clicked");
    document.getElementById('grid-section').innerHTML = renderCountriesCards(6);
});

aboutMeBtnEl.addEventListener('click', function() {
    console.log("About me button clicked");
    document.getElementById('grid-section').innerHTML = renderCountriesCards(3);
});


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
