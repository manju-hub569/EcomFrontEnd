import './Home.css';
import CardItems from '../CardItems/CardItems';
import FootComp from '../FootComp/FootComp';
import { useEffect , useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import { useSelector , useDispatch} from 'react-redux';
import { apiCall } from '../../Redux/Reducers/ChangeNum';

export default function Home () {

    const dispatch = useDispatch();
    const categ_data = useSelector((state) => state.getReducer.getDataApi.payload);

    useEffect(() => {

        dispatch(apiCall());

    },[dispatch]);

    const [search , searchItem] = useState('');

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
                                <input type = "text" placeholder='  Search Items' onChange = {(e) => searchItem(e.target.value)} />
                            </div>
                        </div>
                </div>
            </div>

            <div className = "container mt-1">
                <div className = "row">
                    {
                        categ_data ? categ_data.forEach((val) => {
                            if(val.title.length > 65) {
                                val.title = `BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats`
                            }
                        }) : []
                    }
                {

                categ_data ? categ_data.filter((dt) => {
                        if(search === '') {
                            return true;
                        } else if (dt.title.toLowerCase().includes(search.toLowerCase())) {
                            return true;
                        }
                        return false
                    }).map((val , i) => {
                            return (
                                <div className = "col-3 prod_head dflex alignCenter justifyCenter">
                                    <CardItems items = {val} />
                                </div>
                            )
                        }) : []

                }
                </div>
            </div>

            <FootComp />
        </>
    )
}