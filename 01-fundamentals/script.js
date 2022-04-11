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
*/

//FIRST THIS IN THE MORNING, CREATE A REPO AND PUSH THE PROJECT IN
