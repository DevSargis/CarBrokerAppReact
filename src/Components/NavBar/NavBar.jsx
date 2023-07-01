import React, { useState } from "react";
import './NavBar.css'

//Import Images
import logo from '../Assets/logo.png'



// import icon
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'



const NavBar = () =>{

    //Statment to hold the navbar state
    const[navBar, setNavbar] = useState('navBar')

    //function to show navbar on smaller width screens
    const showNavbar = ()=>{
        setNavbar('navBar showNavBar')
    }
    //function to remove navbar on smaller width screens

    const removeNavBar =()=>{
        setNavbar('navBar')

    }

    //Function to add a background to the navbar when we scroll a certainn height on the window
    const [header, setHeader] = useState('header')
   
    const addbg = () =>{
        if(window.scrollY >= 20){
            setHeader('header addBg')
        }
    }
    window.addEventListener('scroll', addbg)


    return (
        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="Logo Image" className="logo"/>
            </div>

            <div className={navBar}>
                <ul className="menu">
                    <li onClick={removeNavBar} className="listItem">
                        <a href="/" className="link">Used Cars</a>
                    </li>
                    <li onClick={removeNavBar}  className="listItem">
                        <a href="/" className="link">New Cars</a>
                    </li>
                    <li onClick={removeNavBar}  className="listItem">
                        <a href="/" className="link">Auctions</a>
                    </li>
                    <li onClick={removeNavBar}  className="listItem">
                        <a href="/" className="link">Sellers</a>
                    </li>
                </ul>

                {/* Lets get an icon that will close the navbar on small screens */}
                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavBar} />
            </div>
            <div className="signUp flex">
                <div className="text">
                        Sign up
                </div>
                 {/* Lets get an icon that will open/show the navbar on small screens */}
                 <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
            </div>
        </div>
    )
}
export default NavBar