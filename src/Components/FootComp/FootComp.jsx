import './FootComp.css'

const FootComp = () => {
    return (
        <>
            <footer className = "container-fluid">
                <div className = "row">
                    <div className = "col-4">
                        <h5>CATEGORIES</h5>
                        <div className = "footList listOne">
                            <ul>
                                <li>Electronics</li>
                                <li>Jewelery</li>
                                <li>Men's Cloth</li>
                                <li>Women Cloth's</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "col-4">
                        <h5>HELP</h5>
                        <div className = "footList listTwo">
                            <ul>
                                <li>FAQ's</li>
                                <li>Shipping</li>
                                <li>Returns</li>
                                <li>Track Order</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "col-4">
                        <h5>GET IN TOUCH</h5>
                        <div className = "footList listThree">
                            <ul>
                                <li>
                                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1)967166879
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            <div className = "cpyright mt-4">
                Copyright ©2024 All rights reserved
            </div>

            </footer>
        </>
    )
}

export default FootComp;