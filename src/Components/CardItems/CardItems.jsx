import React from 'react';
import './CardItems.css';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { postCall } from '../../methods/apimethods';
import { baseurl } from '../../methods/enpoints';
import { useAlert } from 'react-alert';
import { getCookie } from '../../methods/method';

const CardItems = ({items}) => {

    const showModal = useAlert()

    const addToCart = async () => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`
        };

        try {
            const data = await postCall(`${baseurl}addToCart` , {
                userid : "65ae88a3c7023d977b7ade16", title : items.title , price : items.price , description : items.description , category : items.category , image : items.image
            }, headers);
            
            if(data.data.status === false) {
                showModal.show('Please Login');
            } else {
                showModal.show('Added to cart successfully')
            }

        } catch (error) {
            console.log(error);
            showModal.show("Please Login")
        }

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
