import React from 'react';
import shop_icon from '../../assets/shop_icon.png'
import './CardItems.css';

const CardItems = () => {
    return (
        <>
            <div className = "card m-2" style = {{width : '15rem'}}>
            <img className = "card-img-top" src={shop_icon} alt="Card image cap" />
                <div className = "card-body">
                    <p className = "card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    );
}

export default CardItems;
