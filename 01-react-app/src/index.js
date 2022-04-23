import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ShoppingList,
  ShoppingListConst,
} from './client/components/ShoppingList';

import Square from './tic-tac-toe/Square';
import Board from './tic-tac-toe/Board';

console.log(document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Board />);
