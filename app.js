// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
// Each of the inventor is an object. 

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// People array has strings, string contains last name & irst name

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's


//   Filters work by passing a function and that function will loop every single item in our array
// It gives inventor, we loop over and for each inventor, we can decide whether
// we want to keep it or not. 

const fifteen = inventors.filter(fifteenfilter);

function fifteenfilter(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; // keep it
    }
}

//  Other alternatives to above. 

// const fifteen = inventors.filter(function(inventor){
//         if (inventor.year >= 1500 && inventor.year < 1600) {
//             return true; // keep it
//         }
// });


// const fifteen = inventors.filter(inventor => {
//         if (inventor.year >= 1500 && inventor.year < 1600) {
//             return true; // keep it
//         }
// });

// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
// By default this returns true if the conditions satisfies, no need to explicitly mention it




console.table(fifteen);

var array = [10, 21, 23, 40, 97];

var filtered = array.filter(isEven);

function isEven(value){

if (value % 2 == 0){
return true;
}
}

console.table(filtered);

// Map takes in an array, it does something with that array and then returns a new array but of the same length
// Think it like a factory machine where it takes in a raw material and will stamp it somehow and
// kick out the item on the other end whereas filter we bring in 10 items and return only 2 items..


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullnames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest


//Sort helps to order the array items by oldest to youngest

// const ordered = inventors.sort( (firstPerson, secondPerson) => 
// {
//     if(firstPerson.year > secondPerson.year){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

//Using ternary operator

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// const ordered = inventors.sort( function(firstPerson, secondPerson) {
//     if(firstPerson.year > secondPerson.year){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// } 

// );



console.table(ordered);

//Reduce allows you to sort of build something on every single item

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);

    // Think above like a loop and it is like total + = 
}, 0);
// Above zero is initializing the total as 0, if we dont put that during first time loop, it willl through 
// undefined and won't calculate the actual total years
console.log(totalYears);


// 5. Sort the inventors by years lived


const oldest = inventors.sort((a,b) => {
    const firstGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    // if (firstGuy > nextGuy){
    //     return -1;
    // }
    // else{
    //     return 1;
    // }

    return firstGuy > nextGuy ? -1 : 1;
});

console.table(oldest);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// var a = document.querySelector(".mw-category");
// console.log(a);

// var category = document.querySelector(".mw-category");

// var links = category.querySelectorAll('a'); //This results node objects which does not support map so convert to array

// var links_arr = Array.from(links);

// var de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));




// 7. sort Exercise
// Sort the people alphabetically by last name

var ordered1 = people.sort((lastOne,nextOne) => 
{
    const [aLast,aFirst] = lastOne.split(', ');
    const [bLast,bFirst] = nextOne.split(', ');

    return aLast > bLast ? -1 : 1;
    
}


);

console.table(ordered1);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];




