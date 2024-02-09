import React from 'react';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <>
        <div className="row">
            <div className="col-md-3"></div>
        <div className="col-md-3">
            
        <img src={"images/" + imageName} alt={imageName}></img>

        </div>
        <div className="col-md-3">
            <h2 className="menuTitle">{title}</h2>
            <p className="menuDesc">{description}</p>
            <div className="row">
                <div className="col-md-3">
                    <p className="menuDesc">{"$" + price}</p>
                </div>
                <div className="col-md-3">
                    <button className="button">Add</button>

                </div>

            </div>

        </div>
            
                      
        </div>
        <div className="row"></div>
        </>
    );
};

export default MenuItem;
