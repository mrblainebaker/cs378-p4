import React from 'react';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuLogo = ({ top_desc, bottom_desc, imageName }) => {
    return (
        <>
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-4">
                <img src={"./images/" + imageName} className="logoImg" />
                <h3 class="desc1">{top_desc}</h3>
                <h3 class="desc2">{bottom_desc}</h3>
            </div>
        

        </div>
        </>
    );
};

export default MenuLogo;
