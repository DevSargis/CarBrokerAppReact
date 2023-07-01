import React from "react";
import './Trending.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import car1 from '../Assets/car1.jpg'
import car2 from '../Assets/car2.jpg'
import car3 from '../Assets/car3.jpg'
import car4 from '../Assets/car4.jpg'
import car5 from '../Assets/car5.jpg'
import car6 from '../Assets/car6.jpg'
import car7 from '../Assets/car7.jpg'


const Trending = () =>{
    return (
        <div className="trending section">
            <div className="secContainer container">
                    <div className="secHeading flex">
                            <h3 className="secTitle">
                                Trending Near you
                            </h3>
                            <div className="navBtns flex">
                                <BsArrowLeftShort className='icon leftIcon'/>
                                <BsArrowRightShort className='icon rightIcon'/>

                            </div>
                    </div>
                    <div className="carContainer grid">
                        {/* Single car DIV*/}
                        <div className="singleCar grid">
                                <div className="imgDiv">
                                    <img src={car1} alt="Car Image" />
                                </div>
                                <h5 className="carTitle"> 
                                    Used 2019 Audi S4 Premium Plus
                                </h5>
                                <span className="miles">
                                    11123 Miles
                                </span>
                                <span className="AWD">
                                    AWD 4-Cylinder Turbo
                                </span>
                                <div className="price_seller flex">
                                    <span className="price">
                                         $41.000
                                    </span>
                                    <span className="seller">
                                          Best Seller  
                                    </span>
                                </div>
                        </div>
                        {/* Single car DIV*/}
                        <div className="singleCar grid">
                                <div className="imgDiv">
                                    <img src={car2} alt="Car Image" />
                                </div>
                                <h5 className="carTitle"> 
                                    Used 2019 Audi S4 Premium Plus
                                </h5>
                                <span className="miles">
                                    11123 Miles
                                </span>
                                <span className="AWD">
                                    AWD 4-Cylinder Turbo
                                </span>
                                <div className="price_seller flex">
                                    <span className="price">
                                         $41.000
                                    </span>
                                    <span className="seller">
                                          Best Seller  
                                    </span>
                                </div>
                        </div>
                        {/* Single car DIV*/}
                        <div className="singleCar grid">
                                <div className="imgDiv">
                                    <img src={car3} alt="Car Image" />
                                </div>
                                <h5 className="carTitle"> 
                                    Used 2019 Audi S4 Premium Plus
                                </h5>
                                <span className="miles">
                                    11123 Miles
                                </span>
                                <span className="AWD">
                                    AWD 4-Cylinder Turbo
                                </span>
                                <div className="price_seller flex">
                                    <span className="price">
                                         $41.000
                                    </span>
                                    <span className="seller">
                                          Best Seller  
                                    </span>
                                </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}
export default Trending