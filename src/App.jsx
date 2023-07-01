import React from "react";
import './App.css'
// Import all the components into our App component
import Auctions from "./Components/Auctions/Auction";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

const App = ()=>{
  return(
    <div >
        <NavBar />
        <Home />
        <Search />
        <Trending />
        <Sellers />
        <Auctions/>
        <Review />
        <Footer/>
    </div>
  )
}
export default App