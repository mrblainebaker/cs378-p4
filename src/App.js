import './App.css';
import MenuItem from './components/MenuItem';
import MenuLogo from './components/MenuLogo'
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import React, { useState } from 'react';



// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuLogo = [
  {
    id: 1,
    top_desc: 'Baking, It\'s in the Family',
    bottom_desc: 'The Best Bakers on campus',
    imageName: 'logo.png'
  }
];


function App() {

  const [subtotal, setSubtotal] = useState(0);
  const [itemCounts, setItemCounts] = useState({});


  const addToSubtotal = (amount) => {
    setSubtotal(subtotal + amount);
  };

  const removeFromSubtotal = (amount) => {
    if(subtotal - amount >= 0){
      setSubtotal(subtotal - amount);
    }
  };

  const clearAll = () => {
    setSubtotal(0);
    resetAllItems();
  };

  const resetAllItems = () => {
    // Reset the count of each item
    const updatedItemCounts = {};
    menuItems.forEach(item => {
      updatedItemCounts[item.id] = 0;
    });
    setItemCounts(updatedItemCounts);
    // Reset the subtotal
    setSubtotal(0);
  };



  const formatOrderMessage = () => {
    const orderedItems = [];
    for (const itemId in itemCounts) {
      const count = itemCounts[itemId];
      if (count > 0) {
        const menuItem = menuItems.find(item => item.id === parseInt(itemId));
        orderedItems.push(`${count} x ${menuItem.title}`);
      }
    }
    return orderedItems.length > 0 ? orderedItems.join('\n') : 'No items in cart';
  };

  const placeOrder = () => {
    const orderMessage = formatOrderMessage();
    if(orderMessage === 'No items in cart'){
      window.alert(`${orderMessage}`);
    } else {
      window.alert(`Order Placed!\n\n${orderMessage}`);
    }
  };

  return (
    <div className="centerIt">
    <div className="menuTop">
      {menuLogo.map(item => (
        <MenuLogo key = {item.id}{...item} />
      ))}
      </div>
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem
          key={item.id}
          id={item.id}
          addToSubtotal={addToSubtotal}
          removeFromSubtotal={removeFromSubtotal}
          count={itemCounts[item.id] || 0}
          setCount={(count) => setItemCounts({...itemCounts, [item.id]: count})}
          {...item}
        />
        ))}
      </div>
    <div>
      <div className="total">
        <p>subtotal = ${subtotal.toFixed(2)}</p>

        <button onClick={clearAll} className="button">clear Cart</button>
        <button onClick={placeOrder} className="button">order</button>
      </div>
    </div>
    </div>
  );
}

export default App;
