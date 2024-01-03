import React from 'react';
import './CardItems.css';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

const CardItems = ({items}) => {
    return (
        <>
            <div className = "cards">
                <div className = "imgCard">
                    <img src = {items.image} alt="image" />
                </div>
                <div className="subcard">
                    <div className = "prodName">
                        <div className = "itemTitle">{items.title}</div>
                        <div>
                            <CiHeart fontSize={'2rem'} />
                        </div>
                    </div>
                    <div className = "cart">
                        ${items.price}  <button> Add to Cart <BsCart /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardItems;
