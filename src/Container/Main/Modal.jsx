import './Main.css';

export default function Modal () {
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">

                                <div className = "log_label">
                                    <strong>Login</strong>
                                </div>

                                <div className = "inpts">
                                    <div className = "inpt">
                                        <input type = "text"  />
                                    </div>
                                    <div className = "inpt">
                                        <input type = "password" />
                                    </div>
                                </div>

                                <div className = "log-btn">
                                    <button>
                                        Logn In
                                    </button>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}