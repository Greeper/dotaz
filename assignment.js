'use strict';

/*
const country = 'Czech Republic';
const continent = 'Europe';
let population = 10759836;
const isIsland = false;
const language = 'czech';
let finlandPopulation = 60000000;
const averagePopulaton = 33000000;

console.log(`country: ${country}, continent: ${continent}, population: ${population}`);
console.log(isIsland, population, country, language);

console.log(population / 2);
console.log(population + 1);
console.log(population > finlandPopulation);
console.log(population < averagePopulaton);

const description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
console.log(description);

if (population > 33000000) {
    console.log(`${population}'s population is above average`);
}else {
    console.log(`${population}'s population is ${averagePopulaton - population} below average`);
}


// const numNeighbours = prompt('How many neighbour countries does your country have?');
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
}else if(numNeighbours > 1) {
    console.log('More than 1 border!');
}else {
    console.log('No borders.');
}


if (language === 'english' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
}else {
    console.log(`${country} does not meet your criteria.`);
}

switch(language) {
    case 'chinese':
        console.log('Most number of native speakers.');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'english':
        console.log('3rd place.');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too.');
}

console.log(`${country} population ${population > 33000000 ? 'is above average' : 'is below average'}.`);

*/

/*

function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

const describeCzech = describeCountry('Czechia', 10760000, 'Prague');
const describeAustria = describeCountry('Austria', 7000000, 'Wien');
const describeFrance = describeCountry('France', 45000000, 'Paris');

console.log(describeCzech);
console.log(describeAustria);
console.log(describeFrance);

function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld3 = population => (population / 7900) * 100;

const populationCzech = percentageOfWorld3(10);
const populationAustria = percentageOfWorld3(1441);
const populationFrance = percentageOfWorld3(332);

console.log(populationCzech, populationAustria, populationFrance);

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} people, which is about ${percentage}% of the world`;
}

console.log(describePopulation('Czechia', 15));

*/

/*

const populations = [15, 4, 57, 152];
console.log(populations.length === 4);

function percentageOfWorld1 (pop) {
    return (pop / 7900) * 100;
}

const percentages = [
                    percentageOfWorld1(populations[0]), 
                    percentageOfWorld1(populations[1]),
                    percentageOfWorld1(populations[2]),
                    percentageOfWorld1(populations[3])
];
console.log(percentages);

*/

/*
const neighbours = ['Sweden', 'Slovakia', 'Poland'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country.')
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);
*/

/*

for (let i = 1; i <= 50; i++) {
    console.log(`Vote number ${i} is currently voting`);
}

*/

/*

const populations = [15, 4, 57, 152];
console.log(populations.length === 4);

function percentageOfWorld1 (pop) {
    return (pop / 7900) * 100;
}

const percentages = [
                    percentageOfWorld1(populations[0]), 
                    percentageOfWorld1(populations[1]),
                    percentageOfWorld1(populations[2]),
                    percentageOfWorld1(populations[3])
];
console.log(percentages);

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);

*/

const listOfNeighbours = [
    ['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
     console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);