import { postCall } from '../../methods/apimethods';
import './Main.css';
import { useRef } from 'react';
import { baseurl } from '../../methods/enpoints';

import { useAlert } from 'react-alert';
import { setCookie } from '../../methods/method';

import Modalsignup from './Modalsignup';

export default function Modal () {

    const showModal = useAlert()

    const userRef = useRef(null);
    const passRef = useRef(null);

    const SubForm = async () => {
        try {
          const resp = await postCall(`${baseurl}login` , {username : userRef.current?.value, password : passRef.current?.value}) ;
          if(resp) {
            setCookie('token' , resp.data.token , 7);
            closeModel();
            showModal.show(resp.data.msg)
          } else {
            showModal.show("Login Failed")
          }
        } catch (error) {
            console.log(error);
            // closeModel();
            if(error) {
                showModal.show("Login Failed")
            }
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
      
      const signUP = () => {
        closeModel();
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
                                        Login
                                    </button>
                                </div>

                                <div className = "signUp-msg">
                                    <mark>dont have account? 
                                        <label data-toggle="modal" data-target="#exampleModalCenter2" onClick = {signUP} >signup</label>
                                     </mark>
                                </div>

                            </div>
                        </div>
                </div>
            </div>

            <Modalsignup />
        </>
    )
}