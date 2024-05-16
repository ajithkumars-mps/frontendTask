import React, { useState } from "react";
import './Login.scss'
import Fb from '../../Assets/Icons/fb.png'
import Google from '../../Assets/Icons/google.png'
import Github from '../../Assets/Icons/github.png'
import { useNavigate } from "react-router-dom";

function Login(){
    const [registration,setRegistration] = useState(false)
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(email == 'a@mail.com' && password == '12345'){
            navigate('/dashboard')
        }
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setValues(val=>({...val,[name]:value}))
    }
    
    return(
        <>
            <div className="loginContainer">
                <div className="loginPopup">
                    <div className="loginRectangle">
                        <div className="alignCenter">
                            <h3>{registration?'Join us today':'Sign in'}</h3><br/>
                            {
                                registration?
                                <div className="iconContainer">
                                    Enter your email and password to register
                                </div>:
                            <div className="iconContainer">
                                <div><img src={Fb} height='20px' /></div>
                                <div><img src={Github} height='20px' /></div>
                                <div><img src={Google} height='20px' /></div>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="loginForm">
                        <form onSubmit={(e)=>handleSubmit(e)}>
                            {
                                registration?
                            <div className="inputContainer">
                                <input onChange={(e)=>handleChange(e)} name="name" />
                                <span className={values.email.length == 0? "inputLabel":'isFilled'}>Name</span>
                            </div>:''
                            }
                            <div className="inputContainer">
                                <input onChange={(e)=>handleChange(e)} name="email" />
                                <span className={values.email.length == 0? "inputLabel":'isFilled'}>Email</span>
                            </div>
                            <div className="inputContainer">
                                <input onChange={(e)=>handleChange(e)} name="password" type="password" />
                                <span className={values.password.length == 0? "inputPassword":'isFilledPassword'}>Password</span>
                            </div>
                            <button>{registration?'SIGN UP':'SIGN IN'}</button>
                        </form>
                        <div className="actionSpan">
                            {!registration? <p className="forgotPassword">Forgot your password? Reset it <span className="clickableText">here</span></p>:''}
                            <p>Don't have an account? <span className="clickableText" onClick={()=>setRegistration(!registration)}>{registration?'Sign In':'Sign Up'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;