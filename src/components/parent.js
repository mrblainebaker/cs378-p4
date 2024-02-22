import React, { useState } from 'react';

function parent() {
    const [sharedVal, setSharedVal] = useState(0);

    const updateSharedValue = (newValue) => {
        setSharedVal(newValue);
    }

    return (
        <div>
            
        </div>

    );
    
}


export default parent;