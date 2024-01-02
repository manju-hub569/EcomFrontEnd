import React from 'react';
import './CardItems.css';
import { CiHeart } from "react-icons/ci";

const CardItems = ({items}) => {
    return (
        <>
            <div className = "cards">
                <div className = "imgCard">
                    <img src = {items.image} alt="image" />
                </div>
                <div className="subcard">
                    <div className = "prodName">
                        <div>{items.title}</div>
                        <div>
                            <CiHeart fontSize={'2rem'} />
                        </div>
                    </div>
                    jdbksjdf
                </div>
            </div>
        </>
    );
}

export default CardItems;
