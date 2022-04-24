import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ShoppingList,
  ShoppingListConst,
} from './client/components/ShoppingList';

import Square from './tic-tac-toe/Square';
import Board from './tic-tac-toe/Board';
import Game from './tic-tac-toe/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
