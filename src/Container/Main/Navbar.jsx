import './Main.css';
import shop_icon from '../../assets/shop_icon.png';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { apiCall } from '../../Redux/Reducers/ChangeNum';
import Modal from './Modal';

export function Navbar () {

    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style = {{position : 'sticky' , top : 0, left : 0, zIndex : 99}}>
                <div className = 'navContent'>
                
                    <div className = "navNAme">
                        <span className = "nameOne">COZA</span>
                        <span className = "nameTwo">Store .</span>
                    </div>

                    <div className = "listCont">
                        <ul>
                            <li>Electronics</li>
                            <li>Jewelery</li>
                            <li>Men's Cloth</li>
                            <li>Women's Cloth</li>
                        </ul>
                    </div>

                    <div className = "iconList">
                        <ul>
                            <li><CiHeart style = {{fontSize : '32px'}} /> <label>1</label>  </li>
                            <li><BsCart style = {{fontSize : '30px'}} /> <label>1</label> </li>
                            <li data-toggle="modal" data-target="#exampleModalCenter"><IoPersonOutline style = {{fontSize : '30px'}} /></li>
                        </ul>
                    </div>

                </div>
            </nav>

            <Modal />
        </>
    )
}