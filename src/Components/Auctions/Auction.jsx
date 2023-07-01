import React from "react";
import './Auction.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'


import car4 from '../Assets/car4.jpg'
import car5 from '../Assets/car5.jpg'
import car6 from '../Assets/car6.jpg'
import car7 from '../Assets/car7.jpg'

const Auctions = () =>{
    return (
        <div className="auction section">
        <div className="secContainer container">
                <div className="secHeading flex">
                        <h3 className="secTitle">
                            Active Auctions             
                        </h3>
                        <div className="navBtns flex">
                            <BsArrowLeftShort className='icon leftIcon'/>
                            <BsArrowRightShort className='icon rightIcon'/>

                        </div>
                </div>
                <div className="carContainer grid">
                    {/* Single car DIV*/}
                    <div className="singleCar grid singleCarActive">
                            <div className="imgDiv">
                                <img src={car7} alt="Car Image" />
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
                            <div className="price_buyBtn flex">
                                <span className="price">
                                     $41.000
                                </span>
                                <span className="buyBtn">
                                     Buy Now 
                                </span>
                            </div>
                    </div> 
                     {/* Single car DIV*/}
                    <div className="singleCar grid">
                            <div className="imgDiv">
                                <img src={car4} alt="Car Image" />
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
                            <div className="price_buyBtn flex">
                                <span className="price">
                                     $41.000
                                </span>
                                <span className="buyBtn">
                                     Buy Now 
                                </span>
                            </div>
                    </div>
                    {/* Single car DIV*/}
                     <div className="singleCar grid singleCarActive">
                            <div className="imgDiv">
                                <img src={car6} alt="Car Image" />
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
                            <div className="price_buyBtn flex">
                                <span className="price">
                                     $41.000
                                </span>
                                <span className="buyBtn">
                                     Buy Now 
                                </span>
                            </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Auctions