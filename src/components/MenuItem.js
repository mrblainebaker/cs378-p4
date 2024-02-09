import React from 'react';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className="menu-item">
      <div className="image-column">
        <img src={"images/" + imageName} alt={imageName} />
      </div>
      <div className="content-column">
        <h2 className="menuTitle">{title}</h2>
        <p className="menuDesc">{description}</p>
        <div className="price-add">
            <p className="menu-price">{"$" + price}</p>
            <button className="button">Add</button>
        </div>
      </div>
    </div>
    );
};

export default MenuItem;
