import React, { useState } from 'react';

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
    <div className="menu-item row justify-content-center">
      <div className="image-column">
        <img src={"./images/" + imageName} alt={imageName} />
      </div>
      <div className="content-column">
        <h2 className="menuTitle">{title}</h2>
        <p className="menuDesc">{description}</p>
        <div className="price-add">
          <p className="menu-price">{"$" + price}</p>
          <div className="button-group">
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
