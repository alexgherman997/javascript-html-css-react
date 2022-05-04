'use strict';

//FILE CONTAINING
// DESCONSTRUCTION ARRAYS, OBECJECT && OPTIONAL CHAINING && NULLING COALISION

//DECONSTRUCTION ARRAYS, OBJECTS
/*
let number1 = 1;
let number2 = 2;
let arrayNumber = [7, 8, 9];

console.log(number1, arrayNumber, ...arrayNumber);
console.log();

let arrayAux = arrayNumber;
let [a, b, c, d] = [...arrayNumber];
let [a1, b1, c1, d1] = [1, 2];

console.log(a, d, a1, d1);

[d, d1, ...arrayNumber] = [5, 5, 5, 5, 5, 5, 5];
[d, d1, ...arrayNumber] = [5, 5, 5, 5, 5, 5, 5];
[d, d1, ...arrayNumber] = [5, 5, 5, 5, 5, 5, 5];

({ a, b } = { b: 1, a: 0 });

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
console.log(a, b);

({ a, b, ...arrayNumber } = { a: 1, b: 2, c: 30, d: 40 });
console.log(arrayNumber);

*/
//ARRAY DESTRUCTING
/*
let abc = ['a', 'b', 'c'];
let [a, b, c] = abc;
console.log(a, b, c);

let a1, b1, c1;
[a1 = 1, b1 = 10, c1] = [5];
console.log(a1, b1, c1);

const arrayFunc = function () {
  return [1, 2, 3];
};

console.log('----------');
console.log(...arrayFunc());

function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
);

let d,
  rest = ['a', 'b', 'c', 'd'];
[a, b, , d] = rest;

console.log(a, b, d);

*/
//OBEJECT DESONSTRUCTION
/*
let id, v;
let user = {
  id: 42,
  isVerified: true,
};

// {{id, v} = {...use}};
console.log({ ...user });

({ id, v } = { ...user });
console.log(id, v);

({ id, v } = user);

console.log('-----------');
console.log('-----------');
console.log(id, v);
console.log('-----------');
console.log('-----------');

let a, b, isVerified, c, d, x, y, z;
({ a, b } = user);
console.log(a, b);
({ id, isVerified } = user);
console.log(id, isVerified);
*/
//the variables in which we want to deconstruct the object shoul have the same name as
//the properties of the obeject cause when deconstruction is happening the app has to now
//in which value is stored, is like a map behavior, for array we don t have this specific
//naming cause the elements from array are deconstructed in the array order

//also a propery can be unpacked from an object and assigned to a variable with a different name
let isVerified, c, d, x, y, z;

let o = {
  a: 1,
  b: 2,
  c,
};

//unpacked to different variable names, a mapping between the name from objet and the new var name
({ a: x, b: y, c: z = 3 } = o);
console.log(x, y, z);

const user = {
  id: 10,
  displayName: 'alexg',
  fullName: {
    firstName: 'Alex',
    lastName: 'Doe',
  },
};

//unpacking properties from objects passed as a function parameter same name variable
function userId({ id }) {
  return id;
}
console.log(userId(user));

//different variable name for displayName propery
function userDisplayName({ displayName: dname }) {
  return dname;
}
console.log(userDisplayName(user));

console.log(user.fullName.firstName);
//different variable name for firstName
function userName({ firstName: name }) {
  return name;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}
console.log('--------------');
console.log(whois(user));

//////////////////////////////////

//setting default parameters into the function

//destructued parameters with default value assignent
// if no arrgument is pass to the function will create an empty object with this declararion
function drawChar({
  size = 'big',
  coordinates = { x: 0, y: 0 },
  color = 'blue',
} = {}) {
  console.log(size, coordinates, color);
}

drawChar({
  coordinates: {
    x: 1,
    y: 2,
  },
});

const square = {
  size: 'big',
  coordinates: { x: 0, y: 0 },
  color: 'blue',
};

let {
  size: marime,
  coordinates: { x: zzz },
} = square;

// console.log(size, x);
console.log(marime, zzz);

// computed object propery names and destructuring
const circle = { raza: 10, diametru: 25 };

let key = 'z';
let { [key]: foo } = { z: 'bar' };

console.log(key, foo);

// rest in object destructuring

let { a4, b4, ...rest } = { a4: 1, b4: 2, c4: 3, d4: 4 };
console.log({ a4 }, [{ b4 }], rest);

//the prototype chain is looked up when the object is deconstructed
let obj = { self: '123' };
obj.__proto__.prot = '456';
const { self, prot } = obj;
console.log(self, prot);

///////////////////////////////
///////////////////////////////
///////////////////////////////
// OPTIONAL CHAINING  ?.
// - the optional chaining operator '?.' is like chaining operator '?' but when
// it find a value 'null || undefiend' it short-circuits and return value "undefiend"
// if it is not used when a  value "null || undefiend" appears in the chain a error/exception
// will be returned, and the program stops (another solution is to put try/cath and handle the expection)

const dog = {
  color: 'black',
  age: 10,
  food: [{ cheap: 'mere', cheap2: 'pere' }, { expensive: 'pedigree' }],
};

// it make sense to put here option chainig, others wise a error will be throwm cause
// is not an arrat for 'mancare'
console.log(dog.mancare?.[0].cheap3);
//this already will return undefiend
console.log(dog.alex);

// optionl chaning for a function that not exist, othervise error non existing func is thrown
console.log(dog.verificareOperatorOptionalChaining?.());

// THIS CAN BE STUCK WITH NULL COLISISION OPERATOR
// NULLING COLLISTION when the object from the left is 'null || undefined' wiil return the oject from the right
// very useful when for some function/call we can get a 'null || undefined' but
// we want to set a DEFAULT VALUE in this case

const vacation = {
  country: 'Spain',
  travelBy: 'plane',
  city: function () {
    return 'Romania';
  },
};

console.log(vacation?.city ?? 'Unknown city');


