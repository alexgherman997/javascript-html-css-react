'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruchettat', 'Garlic', 'Bread', 'Caprese Solad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startedIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(`Order receives ${this.starterMenu[startedIndex]}
    will be delivered to ${address} at ${time}
    `);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de sole, 22',
  mainIndex: 2,
  startedIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via de sole, 22',
  startedIndex: 1,
});

/*
// DESTRUCT OBJECT
const { name, openingHours: openH, categories } = restaurant;
console.log(name, openH, categories);

//default values
const {
  menu = [],
  openingHours: hours = '0',
  categories1: tags = 'default',
} = restaurant;

console.log(menu, hours, tags);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a: b, b: a } = obj);
console.log(a, b);

//nested objects
//open and close hours for friday
const { fri } = openingHours;
const { open: o, close: c } = fri;
console.log(o, c);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//DESTRUCT ARRAYS
/*const arr = [2, 3, 4];
const a0 = arr[0];
const a1 = arr[1];
const a2 = arr[2];

const [a, b, c] = [2, 3, 4];
// const [a, b, c] = arr;

// console.log(a, b, c);

let [main, , second] = restaurant.categories;
console.log(main, second);

[second, main] = [main, second];
console.log(main, second);

const [menu, food] = [restaurant.order(2, 0)];
console.log(menu, food);

const nested = [2, 4, [5, 6]];
// const [firstValue, , arr1] = nested;
// console.log(firstValue, arr1);

const [z, , [x, y]] = nested;
console.log(z, x, y);

//Default value
const [p = 1, o = 1, i = 1] = [8, 9];
console.log(p, o, i);
*/
