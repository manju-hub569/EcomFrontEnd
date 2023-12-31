import {Outlet} from 'react-router-dom';
import { Navbar } from './Navbar';
import { increment } from '../../Redux/Action';
import { useSelector , useDispatch } from 'react-redux';

export default function Main () {

    const val = useSelector(state => state.incDecReduce);
    const dispatch = useDispatch();

    console.log(val)

    return (
        <>
            {/* <h1>
                {val}
            </h1> */}
            <Navbar />

            {/* <button className='btn btn-primary' onClick = {() => dispatch(increment())}>Call API</button> */}

            <Outlet />
        </>
    )
}