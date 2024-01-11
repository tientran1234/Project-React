import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../component/home/\bfooter'
import Header from '../component/home/header'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate =useNavigate();
    const [userName, setUserName] = useState();
    const [password, setPassWord] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {


            const requestData = {
                email: userName,
                password: password,
            };

            const res = await axios.post("https://reqres.in/api/login", requestData);
            if(res.status==200){
               
              
            navigate("/dashboard")
            }
           
        } catch (error) {
            console.error(error);
        }
    }

    console.log(userName);

    return (
        <div>
            <Header />
            <section className="w3l-contact-1">
                <div className="contacts-9 py-5">
                    <div className="container py-lg-4">
                        <div className="headerhny-title text-center">
                            <h4 className="sub-title text-center">Login</h4>
                            <h3 className="hny-title mb-0">For Staff</h3>
                            <p className="hny-title mb-lg-5 mb-4">Only employees can log in</p>
                        </div>
                        <div className="contact-view mt-lg-5 mt-4">
                            <div className="conhny-form-section">
                                <form className="formhny-sec" onSubmit={handleLogin}>
                                    <div className="form-grids">
                                        <div className="form-input">
                                            USERNAME<input type="text" name="w3lName" onChange={(e) => setUserName(e.target.value)} id="w3lName" placeholder="Enter your username *" required="" />
                                        </div>
                                        <div className="form-input">
                                            PASSWORD<input type="password" onChange={(e) => setPassWord(e.target.value)} name="w3lSubject" id="w3lSubject" placeholder="Enter password* " required />
                                        </div>

                                    </div>
                                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <div className="submithny text-right mt-4">
                                            <button className="btn read-button">Login</button>
                                        </div>
                                        <div className="submithny text-right mt-4 ml-4"  >
                                            <GoogleOAuthProvider clientId="863587974644-mm3gg9bmgi73934di1cid243mpmre9hi.apps.googleusercontent.com" >
                                                <GoogleLogin 
                                                    onSuccess={credentialResponse => {
                                                        var decoded= jwtDecode(credentialResponse.credential);
                                                        localStorage.setItem("name",JSON.stringify(decoded.name));
                                                        navigate("/dashboard")  
                                                    }}
                                                    onError={() => {
                                                        console.log('Login Failed');
                                                    }}
                                                />
                                            </GoogleOAuthProvider>
                                        </div>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Login