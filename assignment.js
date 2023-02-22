'use strict';


const listOfNeighbours = [
    ['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


// TOTO JE OK
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
     console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);

// TOTO FUNGUJE TAKY, ALE VRACI UNDEFINED, chybi tam v podmince pro y hodnota pro i (y > listOfNeighbours[i].length)
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours.length; y++)
     console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);
