import React, { useEffect, useState } from 'react'
import './HeaderMenu.scss'
import { useNavigate } from 'react-router-dom'

function HeaderMenu() {
    const [show,setShow] = useState(false)
    const active = window.location.pathname;
    const navigate = useNavigate()

    const handleNavigate = (activePg) =>{
        navigate(`/${activePg}`)
    }

  return (
    <div style={window.innerWidth >701?{background:'rgba(69, 18, 132, 0.695)',overflowY:'hidden'}:{}}>
        {
            window.innerWidth <701? 
            <div onClick={()=>setShow(true)} className='burgerMenu'>
                <div></div>
                <div></div>
                <div></div>
            </div>:''
        }
        {
            ((window.innerWidth <701 && show )|| (window.innerWidth > 701))?
            <div className='menuList'>
                <span className='cross' onClick={()=>setShow(false)}>X</span>
                <div className={active == '/home' ?'active':''} onClick={()=>handleNavigate('home')} >Home</div>
                {/* <div className={active == '/' ?'active':''} onClick={()=>handleNavigate('')} >Login</div> */}
                <div className={active == '/dashboard' ?'active':''} onClick={()=>handleNavigate('dashboard')} >Dashboard</div>
                {/* <div className={active == '/registration' ?'active':''} onClick={()=>handleNavigate('registration')} >Registration</div> */}
            </div>:''
        }
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={active == '/home' ?"nav-link active":"nav-link"} aria-current="page"  onClick={()=>handleNavigate('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={active == '/' ?"nav-link active":"nav-link"}  onClick={()=>handleNavigate('')}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={active == '/dashboard' ?"nav-link active":"nav-link"}  onClick={()=>handleNavigate('dashboard')}>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className={active == '/registration' ?"nav-link active":"nav-link"}  onClick={()=>handleNavigate('registration')}>Registration</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}
    </div>
  )
}

export default HeaderMenu