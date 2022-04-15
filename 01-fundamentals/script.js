'use strict';
/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!')
alert(js === 'amazing1' ? 'Javascript' : 'non')

let num = 40 + 8 + 23 - 10;
console.log(num);

// Variable name convention

let trueValue = true;
console.log(typeof trueValue)
console.log(typeof true);
let trueValue = "yes";

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;


////////////////////////////////////
// Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


const weightMark = 78;
const tallMark = 1.69;

const weightJohn = 92;
const tallJohn = 1.95;

let markHigherBMI;
weightMark / tallMark ** 2 > weightJohn / tallJohn ** 2 ? markHigherBMI = true : markHigherBMI = false;

console.log(markHigherBMI);


const firstName = 'Alex';
const job = 'developer';
const birthYear = 1997;

const alex = "I'am " + firstName + ' ' + job + ' ' + birthYear;
console.log(alex);

const alexTemplateLiteral = `I'm ${firstName} ${job} ${birthYear}`
console.log(alexTemplateLiteral);


Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*

const weightMark = 78;
const tallMark = 1.69;

const weightJohn = 92;
const tallJohn = 1.95;

let markHigherBMI;
console.log(weightMark / tallMark ** 2 > weightJohn / tallJohn ** 2 ? `Mark's BMI(${weightMark / tallMark ** 2 } is higher than John`:
 `John's BMI(${weightJohn / tallJohn ** 2} is higher than Mark)`);



let favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 23)
    console.log('Ce trebuie!')

if (favouriteNumber === 23)
    console.log('Nu o sa mearga!') 
        
favouriteNumber = Number(favouriteNumber);
if (favouriteNumber == 23)
    console.log('O sa mearga!') 


////////////////////////////////////
// Coding Challenge #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106    


const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 123) / 3;

console.log(dolphins);
console.log(koalas);

if (koalas > dolphins && koalas > 100)
    console.log('koalas win');
else if (koalas < dolphins && dolphins > 100)
    console.log('dolphins win')
else if (koalas === dolphins && koalas > 100)
    console.log('both win');
else
    console.log('no win');


////////////////////////////////////
// Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 15/100 : bill * 20/100;
console.log(`The bill is ${bill} and the tip is ${tip}`)
;


//FIRST THIS IN THE MORNING, CREATE A REPO AND PUSH THE PROJECT IN
//DONE


// FUNDAMENTALS PART 2 
// FUNCTIONS, OBJECTS, DATA STRUCTURES, LOOPS


let hasDriversLicense = false;
const passTest = true;

//use strict this will return an error to the console cause hasDriverLicense is don t declare
if (passTest) hasDriverLicense = true;
if (hasDriversLicense)  console.log('I can drive');



function logger () {
    console.log('My name is Alex!')
}

logger();

function average2Num(number1, number2){
    console.log(`The average of ${number1} and ${number2} is ${(number1 + number2)/2}`);
    const avg = `The average of ${number1} and ${number2} is ${(number1 + number2)/2}`;
    return avg;
}

average2Num(10,20);
average2Num(14,15);
const avr2Num = average2Num(10,20);
console.log(average2Num);


//function which calculate the age based on the year
//function declaration
function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

console.log(calculateAge(1997));

//function expression
const age = function (birthYear){
    return new Date().getFullYear() - birthYear;
}

console.log(age(1997));
const age2 = age(1997);

//arrow function
//we don t need function name, and return 
const ageArrowFunc = birthYear => new Date().getFullYear() - birthYear;

const ave2Num = (number1, number2) => (number1 + number2) / 2;

console.log(ave2Num(10,20));

const yearsBeforeReteirement = birthYear => 65 - ageArrowFunc(birthYear);


console.log(yearsBeforeReteirement(1997));

//functions review 

const age = birthYear => new Date().getFullYear() - birthYear;

const yearsUntilReteirement = function (birthYear) {
    const retirement = 65 - age(birthYear);
    return retirement > 0 ? retirement : -1;
}

const yearsUntilReteirement2 = birthYear => {
    const retirement = 65 - age(birthYear);
    return retirement > 0 ? retirement : -1;
};


console.log(yearsUntilReteirement(1900));
console.log(yearsUntilReteirement(1997));
console.log(`
`)
console.log(yearsUntilReteirement2(1900));
console.log(yearsUntilReteirement2(1997));


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

function Team(name, num1, num2, num3){
    this.name = name;
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.avg = calcAverage(num1, num2, num3);
}

function calcAverage1(num1, num2, numb3){
    return (num1 + num2 + num3)/3;
}

const calcAverage2 = function(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const dolph = {
    name: 'Dolphins',
    num1: 44,
    num2: 23,
    num3: 71,
    avg: null
}

dolph.avg = calcAverage(dolph.num1, dolph.num2, dolph.num3);

const koalas = new Team('Koalas', 65, 54, 49);

const checkWinner = (team1, team2) => team1.avg > team2.avg ? console.log(`${team1.name} win s with score (${team1.avg} vs ${team2.avg})`) : console.log(`${team2.name} win s with score (${team2.avg} vs ${team1.avg})`);
    
checkWinner(dolph, koalas);


// ARRAYS

const animals = ['caine', 'pisica', 'gaina', 'vaca'];

console.log(animals);
console.log(animals[0])

const days = new Array('Monday, Tuesday, Friday');
console.log(days);

animals[0] = 'tigru';
console.log(animals);

const fibonacci = [1, 1, 2, 3, 5, 8];

//return the length of the array 
const fibLength = fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
console.log(fibonacci);

//return the element removed from array
const elementFib = fibonacci.pop(1);
console.log(fibonacci);

fibonacci.unshift(0);
console.log(fibonacci);

// ca sa folosesti o metoda specifica pe elementele din array ul tau, asemantor cu stream urile din java, operati definite de tine pe array
const sumFibNumbers = fibonacci.reduce(
    (previuousValue, currentValue) => previuousValue + currentValue, 0
);
console.log(sumFibNumbers);

fibonacci.shift();
console.log(fibonacci);

*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, 
the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/

/*
const calcTip = billValue => billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;

const bills = [125, 555, 44];

const billsAndTips = [{ billValue: 125, billTip: -1 },
{ billValue: 555, billTip: -1 },
{ billValue: 44, billTip: -1 }
]

billsAndTips.forEach(element => {
    element.billTip = calcTip(element.billValue);
    console.log(`Bill + tip is : ${element.billValue + element.billTip} euros`);
});


// Objects

const phone = {
    operatingSystem: 'Android',
    operatingVersion: 11,
    numbers: ['074', '079', '073'],
    last3DaysUsage: [3, 1, 6]
}

console.log(phone.operatingSystem);
//console.log(phone[operatingSystem]);
console.log(phone['operatingSystem']);


const operationKey = 'operating';
console.log(phone[operationKey+'System']);

//const info = prompt('What do you want to know about phone? operatingSystem, operatingVersion, numbers, last3DaysUsage');
//console.log(phone[info]);


//Sum of usage

const sumUsage = phone.last3DaysUsage.reduce(
     (prevValue, curValue) => prevValue + curValue, 0
);
console.log(sumUsage);
*/
/*
const alex = {
    firstName: 'Alex',
    lastName: 'Messi',
    birthYear: 1991,
    job: 'web developer',
    friend: ['badia', 'hori', 'sebi'],
    hasDriversLicense: true,
*/
//the first one will not work cause the object shoul be initialized first.
//calcAge: new Date().getFullYear() - birthYear,

//func declariotn -> this will not work
/*function calcAge1(birthYear){
    return new Date().getFullYear() - birthYear;
}*/


//func expression 
/*
calcAge2: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
},
//calcAge2aux: new Date().getFullYear() - this.birthYear, 
//calcAge2aux2: this.calcAge2, 

//same as with this, but not recomanded cause you repeat yourself
/*calcAge2: function (birthYear) {
    return new Date().getFullYear() - alex.birthYear;
},*/

//arrow func -> arrow func will not work using this and super, so you have to pass a parameter 
//calcAge3: birthYear => new Date().getFullYear() - birthYear
/*
    summaryAlex: function () {
        this.hasDriversLicense ? console.log(`${this.firstName} is a ${this.calcAge2()} old ${this.job} and he has a driver license.`) :
            console.log(`${this.firstName} is a ${this.calcAge2()} old ${this.job} and he has no driver license.`)
    },

    //this method is better, making decision only at driver level...
    summaryAlex2: function () {
        return `${this.firstName} is a ${this.calcAge2()} old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license.`
    }
}
*
console.log(alex.calcAge2());
console.log(alex.age);
//console.log(alex.age);
//console.log(alex.age);

//console.log(alex['calcAge3'](alex.birthYear));
//console.log(alex.calcAge2aux);
//console.log(alex.calcAge2aux);

// Summary about alex as a method 
// Alex is a 24 year old web developoer, and he has a/no driver license. 

alex.summaryAlex();
console.log(alex.summaryAlex2());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.mass / this.height ** 2;
    }
};

const john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.mass / this.height ** 2;
    }
}

console.log(
    mark.calcBMI() > john.calcBMI() ? `${mark.name}'s BMI(${mark.bmi}) is higher` : `${john.name}'s BMI(${john.bmi}) is higher` 
    );

//LOOPS 
for (let i = 0; i <= 3; i++)
    console.log(i);

const fibonacci = [1, 1, 2, 3, 5, 8];
for (let i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}

fibonacci.forEach(element => {
    console.log(element);    
});

let i=0
while(i<3){
    console.log('-------');
    i++;
}

let bool = true;
while(bool){
    console.log('true');
    bool = false;
}
*/


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = billValue => billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;

bills.forEach(element => {
    let tip = calcTip(element);
    tips.push(tip);
    totals.push(element + tip);
});

console.log(totals);

const calcAverage = function(arr){
    const sumArr = arr.reduce(
        (prevValue, currentValue) => prevValue + currentValue, 0
    )
    return sumArr/arr.length;
}

console.log(calcAverage(bills));


