import React from 'react';

const MenuLogo = ({ top_desc, bottom_desc, imageName }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-4 text-center">
                <img src={"./images/" + imageName} alt={imageName} className="logoImg" />
                <h3 className="desc1">{top_desc}</h3>
                <h3 className="desc2">{bottom_desc}</h3>
            </div>
        </div>
    );
};

export default MenuLogo;
