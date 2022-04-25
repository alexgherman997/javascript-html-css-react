import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ShoppingList,
  ShoppingListConst,
} from './client/components/ShoppingList';

import Game from './tic-tac-toe/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

/*let history = [{ squares: Array(9).fill(null) }];
history.push({ squares: [1, 2, 3] });

history = [...history, { squares: [1, 2, 3] }];

console.log(history);
console.log(...history[1].squares);*/

// const obj = {
//   foo: "bar",
//   array: [1, 2, 3]
// };

// const {foo} = obj;
// const array = obj.array.slice(); // or: = [...obj.array];

// obj.array[0] = "one";
// console.log(obj.array[0]); // "one"
// console.log(array[0]);     // 1

const aux = [{ a: [1, 2, 3] }, { a: [4, 5, 6] }];

console.log(aux[0].a, typeof aux);
