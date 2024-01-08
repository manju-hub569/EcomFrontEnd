import React from 'react';
import './CardItems.css';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { postCall } from '../../methods/apimethods';

const CardItems = ({items}) => {

    const addToCart = () => {
        postCall('http://localhost:3001/api/addToCart' , {
            userid : "65840c38bd36b9ede0c46bba", title : "test" , price : "234" , description : "test" , category : "test" , image : "test"
        }).then(data => {
            if(data) {
                console.log('add to cart successfully')
            }
        });
    }

    return (
        <>
            <div className = "cards">
                <div className = "imgCard">
                    <img src = {items.image} alt="avatar" />
                </div>
                <div className="subcard">
                    <div className = "prodName">
                        <div className = "itemTitle">{items.title}</div>
                        <div className = "wishList">
                            <CiHeart fontSize={'2rem'} />
                        </div>
                    </div>
                    <div className = "cart">
                        ${items.price}  <button onClick={addToCart}> Add to Cart <BsCart /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardItems;
