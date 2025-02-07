import React from 'react'



const item_layout = ({ name, description, price }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    );
};


export default item_layout
