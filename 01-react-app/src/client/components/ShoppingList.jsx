import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      <div class="shopping-list">
        <h1>Shopping list for {this.props.name}</h1>
        <ul>
          <li>Clothes</li>
          <li>Food</li>
        </ul>
      </div>
    );
  }
}

//The same functionalities as above but using variables instead of classes
const ShoppingListConst = () => {
  return <h1>using variables-Eu sunt Alex!</h1>;
};

export { ShoppingList, ShoppingListConst };

//THIS line of code should be move in index.js
// a component Shoppinglist is created and render in browser
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ShoppingList name="Alex" />
//     <ShoppingListConst />
//     <h1>Hello world!</h1>
//   </React.StrictMode>
// );
