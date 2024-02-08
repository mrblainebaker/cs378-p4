import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    var start = "../images/"
    var imageLoc = start.concat({imageName});
    console.log(imageLoc);
    return (
        <row>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src = {imageLoc} alt = "alt text" ></img>
            <p>{price}</p>
            <button>Add</button>
        </row>
    );
};

export default MenuItem;
