import React from "react";
import './Review.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import {AiFillStar} from 'react-icons/ai' 
import car5 from '../Assets/car5.jpg'
import user1 from '../Assets/user1.jpg'


const Review = () =>{
    return (
        <div className="review section">
            <div className="secContainer container">
                <div className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>


                {/* Review container */}
                <div className="reviewContainer grid">
                        {/* single  review*/}
                    <div className="singleReview grid">
                         <div className="imgDiv">
                            <img src={car5} alt="Car Image" />
                         </div>  
                         <h5 className="reviewTitle">
                                2023 Cadiallac
                         </h5> 
                         <span className="desc">
                            Goods cars are safe, fast, affordabl to purchase, economical to operate,
                            reliable, capacions, comfotable, and attractive
                         </span>

                         <div className="reviewerDiv flex">
                                <div className="leftDiv flex">
                                    <div className="reviewerImage">
                                         <img src={user1} alt="Reviewer Image" />
                                    </div>
                                    <div className="aboutReviewer">
                                        <span className="name">
                                            Sargis Margaryan
                                        </span>
                                        <p>Cheif Editor</p>
                                     </div>
                                </div>
                                <div className="rightDiv flex">
                                    <AiFillStar className='icon'/>
                                    <blockquote>4.84</blockquote>
                                </div>
                         </div>
                    </div>   
                    <div className="singleReview grid">
                         <div className="imgDiv">
                            <img src={car5} alt="Car Image" />
                         </div>  
                         <h5 className="reviewTitle">
                                2023 Cadiallac
                         </h5> 
                         <span className="desc">
                            Goods cars are safe, fast, affordabl to purchase, economical to operate,
                            reliable, capacions, comfotable, and attractive
                         </span>

                         <div className="reviewerDiv flex">
                                <div className="leftDiv flex">
                                    <div className="reviewerImage">
                                         <img src={user1} alt="Reviewer Image" />
                                    </div>
                                    <div className="aboutReviewer">
                                        <span className="name">
                                            Sargis Margaryan
                                        </span>
                                        <p>Cheif Editor</p>
                                     </div>
                                </div>
                                <div className="rightDiv flex">
                                    <AiFillStar className='icon'/>
                                    <blockquote>4.84</blockquote>
                                </div>
                         </div>
                    </div> 
                    <div className="singleReview grid">
                         <div className="imgDiv">
                            <img src={car5} alt="Car Image" />
                         </div>  
                         <h5 className="reviewTitle">
                                2023 Cadiallac
                         </h5> 
                         <span className="desc">
                            Goods cars are safe, fast, affordabl to purchase, economical to operate,
                            reliable, capacions, comfotable, and attractive
                         </span>

                         <div className="reviewerDiv flex">
                                <div className="leftDiv flex">
                                    <div className="reviewerImage">
                                         <img src={user1} alt="Reviewer Image" />
                                    </div>
                                    <div className="aboutReviewer">
                                        <span className="name">
                                            Sargis Margaryan
                                        </span>
                                        <p>Cheif Editor</p>
                                     </div>
                                </div>
                                <div className="rightDiv flex">
                                    <AiFillStar className='icon'/>
                                    <blockquote>4.84</blockquote>
                                </div>
                         </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Review