import './Home.css';
import CardItems from '../CardItems/CardItems';
import Footer from '../Footer/Footer';

export default function Home () {

    const data = [
        {
            name : 1
        },
        {
            name : 1
        },
        {
            name : 1
        },
        {
            name : 1
        }
    ]

    return (
        <>
            <div className = "container mt-5 Title">
                <div className = "row">
                        <div className = "col-6 prod_head dflex alignCenter">
                            <h3>PRODUCT OVERVIEW</h3>
                        </div>
                        <div className = "col-6 dflex alignCenter justifyEnd">
                            <input type = "text" />
                        </div>
                </div>
            </div>

            <div className = "container mt-3">
                <div className = "row">
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

            <Footer />
        </>
    )
}