import React, { useState } from 'react';


//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price, addToSubtotal, removeFromSubtotal, count, setCount }) => {


  const increment = () => {
    setCount(count + 1);
    addToSubtotal(price);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      removeFromSubtotal(price);

    }
  };

  const resetCount = () => {
    setCount(0);
  };

    return (
        <div className="menu-item">
      <div className="image-column">
        <img src={"./images/" + imageName} alt={imageName} />
      </div>
      <div className="content-column">
        <h2 className="menuTitle">{title}</h2>
        <p className="menuDesc">{description}</p>
        <div className="price-add">
            <p className="menu-price">{"$" + price}</p>
            <div>
              <button onClick={decrement} className="button">-</button>
              <span>{count}</span>
              <button onClick={increment} className="button">+</button>
            </div>
        </div>
      </div>
    </div>
    );
};

export default MenuItem;
