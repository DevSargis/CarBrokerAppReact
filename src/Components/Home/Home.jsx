import React, {useEffect} from "react";
import './Home.css'
import homeImage from '../Assets/homeImage.png'


//Import aos for animations and scroll reveal

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () =>{

    //left initialise aos and set the default animation duration
    useEffect(() =>{
        Aos.init({duration:3000})
    })



    return (
        <div className="home">
            <div className="secContainer">
                <div className="homeText">
                    <span data-aos='fade-up' className="homeSpan">
                            Meet your new car
                    </span>
                    <h1 className="homeTitle">Mercedes CLA</h1>
                    <div className="btns flex">
                            <button  data-aos='fade-right' className="btn"> More Details</button>
                            <button  data-aos='fade-left' className="btn primaryBtn"> Test Drive</button>
                    </div>
                </div>

            <div data-aos='fade-down-right' className="homeImage">
                <img src={homeImage} alt="Home Image" />
            </div>

            </div>
        </div>
    )
}
export default Home