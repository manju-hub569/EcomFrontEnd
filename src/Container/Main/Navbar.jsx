import './Main.css';
import shop_icon from '../../assets/shop_icon.png';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { apiCall } from '../../Redux/Reducers/ChangeNum';

export function Navbar () {

    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
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
                            <li>Women Cloth</li>
                        </ul>
                    </div>

                    <div className = "iconList">
                        <ul>
                            <li><CiHeart style = {{fontSize : '32px'}} /></li>
                            <li><BsCart style = {{fontSize : '30px'}} /></li>
                            <li><IoPersonOutline style = {{fontSize : '30px'}} /></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}