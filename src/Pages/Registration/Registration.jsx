import React from "react";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";

function Registration(){

    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
    }

    return(
        <>
            <div className="pageContainer">
                <HeaderMenu/>
                <div className="verticalAlign">
                    <div className="loginContainer">
                        <h3>Registartion</h3>
                        <div>
                            <form className="loginForm" onSubmit={(e)=>handleSubmit(e)}>
                                <input name="name" placeholder="Name"/><br/>
                                <input name="email" placeholder="Email"/><br/>
                                <input name="password" placeholder="Password" type="password"/><br/>
                                <button>Register</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;