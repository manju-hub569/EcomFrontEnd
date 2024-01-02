import './Home.css';
import CardItems from '../CardItems/CardItems';
import FootComp from '../FootComp/FootComp';
import { useEffect , useState} from 'react';
import { IoIosSearch } from "react-icons/io";

export default function Home () {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json =>setData(json));
    },[]);

    const [data, setData] = useState([]);

    return (
        <>
            <div className = "container mt-5">
                <div className = "row">
                        <div className = "col-6 prod_head dflex alignCenter">
                            <h3 style = {{fontFamily: 'Montserrat'}}>PRODUCT OVERVIEW</h3>
                        </div>
                        <div className = "col-6 dflex alignCenter justifyEnd">
                            <div className = "searchBox">
                                <IoIosSearch fontSize={'30px'} />
                                <input type = "text" placeholder='  Search Items' />
                            </div>
                        </div>
                </div>
            </div>

            <div className = "container mt-1">
                <div className = "row">
                    {
                        data.forEach((val) => {
                            if(val.title.length > 65) {
                                val.title = `BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats`
                            }
                        })
                    }
                {
                    data.map((val , i) => {
                        return (
                            <div className = "col-3 prod_head dflex alignCenter justifyCenter">
                                <CardItems items = {val} />
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <FootComp />
        </>
    )
}