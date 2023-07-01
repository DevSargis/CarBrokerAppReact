import React from "react";
import './Sellers.css'


import mercedes_logo from '../Assets/mercedes-logo.png'
import toyota_logo from '../Assets/toyota-logo.png'
import bmw_logo from '../Assets/bmw-logo.png'
import honda_logo from '../Assets/honda-logo.png'


const Sellers = () =>{
    return (
        <div className="sellers section">
            <div className="secContainer container">
                <div className="secHeading grid">
                    <h3 className="secTitle">Explore top sellers in town</h3>
                    <p>Joseph Samuel Girard hold the Guiness World Record for being the greatest salesman in the world.</p>
                </div>
                <div className="sellersContainer grid">
                        {/* single seller */}
                        <div className="singleSeller flex">
                                <div className="imgDiv flex">
                                    <img src={mercedes_logo} alt="" className="img" />
                                </div>
                                <span className="info">
                                    <h4 className="name">
                                        Mercedes
                                    </h4>
                                    <p>from 40K$</p>
                                </span>
                        </div>
                        {/* single seller */}
                        <div className="singleSeller flex">
                                <div className="imgDiv flex">
                                    <img src={toyota_logo} alt="" className="img" />
                                </div>
                                <span className="info">
                                    <h4 className="name">
                                        Toyota
                                    </h4>
                                    <p>from 22K$</p>
                                </span>
                        </div>
                         {/* single seller */}
                        <div className="singleSeller flex">
                                <div className="imgDiv flex">
                                    <img src={bmw_logo} alt="" className="img" />
                                </div>
                                <span className="info">
                                    <h4 className="name">
                                        BMW
                                    </h4>
                                    <p>from 50K$</p>
                                </span>
                        </div>
                        {/* single seller */}
                        <div className="singleSeller flex">
                                <div className="imgDiv flex">
                                    <img src={honda_logo} alt="" className="img" />
                                </div>
                                <span className="info">
                                    <h4 className="name">
                                        HONDA
                                    </h4>
                                    <p>from 35.5K$</p>
                                </span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Sellers