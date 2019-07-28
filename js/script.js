"use strict";

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
    .then(function(resp) {
        return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerHTML = Mustache.render(countryTemplate, item);
        countriesList.appendChild(liEl);
    });
}


//  Mustache
var countryTemplate = document.getElementById('country-template').innerHTML;
Mustache.parse(countryTemplate);

