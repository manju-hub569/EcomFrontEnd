import { postCall } from '../../methods/apimethods';
import './Main.css';
import { useRef } from 'react';
import { baseurl } from '../../methods/enpoints';

import { useAlert } from 'react-alert'

export default function Modal () {

    const alert = useAlert()

    const userRef = useRef(null);
    const passRef = useRef(null);

    const SubForm = async () => {
        try {
          const resp = await postCall(`${baseurl}login` , {username : userRef.current?.value, password : passRef.current?.value}) ;
          if(resp) {
            closeModel();
            alert.show('Login Success')
          } else {
            alert('unsuccess');
          }
        } catch (error) {
            console.log(error);
            alert('failed')
        }
    }

    const closeModel = () => {
        const modal = document.getElementById('exampleModalCenter');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
          userRef.current.value = '';
          passRef.current.value = '';
          const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
          if (modalBackdrop) {
            modalBackdrop.parentNode.removeChild(modalBackdrop);
          }
        }
      };    

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

                                <div className = "signUp-msg">
                                    <mark>dont have account? <label>signup</label> </mark>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}