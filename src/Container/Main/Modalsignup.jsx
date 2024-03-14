import React, { useState } from 'react';
import { postCall } from '../../methods/apimethods';
import { baseurl } from '../../methods/enpoints';
import { useAlert } from 'react-alert'

const Modalsignup = () => {

    const showModal = useAlert()

    const [data , setData] = useState({
        username : "",
        password : "",
        email : "",
        address : "",
        number : ""
    });

    let name; let value;
    const formData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setData({...data , [name] : value});
    }

    const subForm = async (e) => {
        e.preventDefault();
        try {
            let resp = await postCall(`${baseurl}register` , data);
            if(resp.data.success === true) {
                closeSignModel();
                showModal.show(resp.data.msg);
            } else {
                showModal.show(resp.data.data)
            }
        } catch (error) {
            console.log(error);
            showModal.show('Signup Failed');
        }

    }

    const closeSignModel = () => {
        const modal = document.getElementById('exampleModalCenter2');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
          const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
          if (modalBackdrop) {
            modalBackdrop.parentNode.removeChild(modalBackdrop);
          }
        }
      }

    return (
        <>
            <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">

                                <div className = "log_label">
                                    <strong>Signup</strong>
                                </div>

                                <form onSubmit={subForm}>
                                    <div className = "inpts">
                                        <div className = "inpt">
                                            <input
                                            type = "text"
                                             placeholder='Username'
                                             name = "username"
                                             value = {data.username}
                                             onChange={formData}
                                              />
                                        </div>
                                        <div className = "inpt">
                                            <input type = "password" placeholder='Password'
                                             name = "password"
                                             value = {data.password}
                                             onChange={formData}                                            
                                             />
                                        </div>
                                        <div className = "inpt">
                                            <input type = "email" placeholder='Email'
                                             name = "email"
                                             value = {data.email}
                                             onChange={formData}
                                             />
                                        </div>
                                        <div className = "inpt">
                                            <input type = "text" placeholder='Address'
                                             name = "address"
                                             value = {data.address}
                                             onChange={formData}
                                             />
                                        </div>
                                        <div className = "inpt">
                                            <input type = "text" placeholder='Number'
                                             name = "number"
                                             value = {data.number}
                                             onChange={formData}
                                             />
                                        </div>
                                    </div>

                                    <div className = "log-btn">
                                        <button>
                                            Signup
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                </div>
            </div>            
        </>
    );
}

export default Modalsignup;
