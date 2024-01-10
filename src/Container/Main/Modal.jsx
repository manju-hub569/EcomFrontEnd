import './Main.css';
import { useRef } from 'react';

export default function Modal () {

    const userRef = useRef(null);
    const passRef = useRef(null);

    const SubForm = () => {
        alert(userRef.current?.value)
    }

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
                                        <input type = "text" placeholder='username' ref={userRef} />
                                    </div>
                                    <div className = "inpt">
                                        <input type = "password" placeholder='password' ref = {passRef} />
                                    </div>
                                </div>

                                <div className = "log-btn">
                                    <button onClick = {SubForm}>
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