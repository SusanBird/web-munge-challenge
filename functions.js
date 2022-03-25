/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/


const otherPets = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];

export function getDogs(pet) {
    return otherPets.filter(pet => pet.type === 'dog');
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

const pets = [
    { type: 'cat', name: 'coco' },
    { type: 'frog', name: 'jumper' }
];

export function makeArrayOfNames(arr) {
    return pets.map(pet => pet.name);
}

/*
OUTPUT: 
['spot', 'rover']
*/

const morePets = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];

export function getNamesOfDogs(pet) {
    return morePets
        .filter(pet => pet.type === 'dog')
        .map(pet => pet.name);
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

const pets1 = [
    { type: 'cat', name: 'coco' },
    { type: 'frog', name: 'jumper' }
];

export function makeReversedArrayOfTypes(pet) {
    return pets1.map(pet => pet.type)
        .reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

const pets2 = [
    { type: 'cat', name: 'coco' },
    { type: 'frog', name: 'jumper' }
];

export function makeSpanishLanguageArray(pet) {
    return pets2.map(pet => ({
        nombre: pet.name,
        tipo: pet.type
    }));
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

const otherPets2 = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];

export function makeArrayWithIsHungry(pet) {
    return otherPets2.map(pet => ({ ...pet, isHungry: true }));
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

const otherPets3 = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];

export function makeShoutingArray(pet) {
    return otherPets3
        .map(pet => ({ name: pet.name.toUpperCase(), type: pet.type }));
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

const otherPets4 = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];

export function makeStringArray(pet) {
    var strings = otherPets4.map(function(pet) {
        return pet['string'];
    });
}
    // return otherPets4.map(pet => ({ ...pet, pet.name, pet.type }));


/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    return {};
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return [];
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    return [];
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    return [];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
