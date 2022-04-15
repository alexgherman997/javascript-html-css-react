'use strict';
/*
const x = 10;
const alexAreMere = 0;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1997));

console.log('Reload');
*/
//BUG
//TODO

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. 
Our most recent task is this: "Given an array of temperatures of one day, 
calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
What is a temperaturie amplitude?
Which type of data are the temperatures?
which type of data is the error?
Return or print the value?
What will happend if the array is empty? 
Or does not contain number values?
// 2) Breaking up into smaller problemes
Checked value is number or string
Amplitude day = highest value - lowest value;
Function to return the hight value from an array with numbers and strings
Function to return the lowest value from an array
Difference of the highest and lowest
Returning the result
*/
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//return the first number from an array or null
const firstNumberArray = arr => {
    let numberChecked = null;

    //msd doc there is no way to stop a forEach
    /*
    arr.forEach(element => {
        if (typeof element == 'number') {
            numberChecked = element;
            this.count = arr.length;
            console.log(numberChecked, this.count);  
        }
    }, this);
    

    for (let i = 0; i < arr.length && numberChecked == null; i++) {
        if (typeof arr[i] == 'number') {
            numberChecked = arr[i];
        }
    }
    return numberChecked;
};

const maxValueArray = function (arr) {
    let max = firstNumberArray(arr);
    if (max == null) return null;
    arr.forEach(element => {
        if (typeof element == 'number' && element > max) max = element;
    });
    return max;
};

const minValueArray = function (arr) {
    let min = firstNumberArray(arr);
    if (min == null) return null;
    arr.forEach(element => {
        if (typeof element == 'number' && element < min) min = element;
    });
    return min;
};

const calcTempAmplitude = function (arr) {
    const max = maxValueArray(arr);
    const min = minValueArray(arr);
    if (max == null || min == null) return `Not valid values into array.`;
    if (min < 0) return max + min;
    else return max - min;
};
*/
/*
console.log(firstNumberArray(temperatures));
console.log(maxValueArray(temperatures));
console.log(minValueArray(temperatures));
console.log(calcTempAmplitude(temperatures));
*/
//Problem 2
//Function should receive now 2 arrays
// we should return de amplitude from every array or for both arrays?
// If for both we can merged them into beginning

const arr = ['error', 5, 20, -3, 14, 'error'];

//temperatures.concat(arr);
//arr.forEach(element => temperatures.push(element));

//concat se face pe un al treilea array pt ca returneaza un rezultat, nu se poate face pe acelasi array, doar metoda cu push pt fiecare element merge
/*temperatures.concat(arr);
const newTemp = temperatures.concat(arr);
console.log(calcTempAmplitude(newTemp));
*/
/*
const transformTempCelsiusToKelvin = temp => temp + 274;

const transformTempCelsiusToKelvin2 = function () {
    const tempMesaurement = {
        type: 'temp',
        unit: 'celsius',
        //value: Number(prompt('degress celsius')),
        value: 10,
    };
    //console.log(tempMesaurement);
    //console.table(tempMesaurement);

    const kelvin = tempMesaurement.value + 273;
    return kelvin;
};

//idetify the bug
//console.log(transformTempCelsiusToKelvin2());

const calcTempAmplitudeBug = function (arr1, arr2) {
    const temps = arr1.concat(arr2);
    let max = 0;
    let min = 0;

    temps.forEach(element => {
        debugger;
        if (typeof element == 'number' && element > max) max = element;
        if (typeof element == 'number' && element < min) min = element;
    });

    console.log(max, min);

    if (max == null || min == null) return `Not valid values into array.`;
    if (min < 0) return max + min;
    else return max - min;
};

console.log(calcTempAmplitudeBug([10, 2, 4], [1, 20, 5]));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*breaking into subproblems:
-parsing the array
-construct the string
-print the string
*/

const printForecast = arr => {
    let tempString = '';
    for (let i = 0; i < arr.length; i++) {
        tempString += `${arr[i]}ºC in ${i + 1} days .... `;
    }
    console.log('... ' + tempString);
};

printForecast([12, 5, -5, 0, 4]);
