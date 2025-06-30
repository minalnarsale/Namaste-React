import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2rn_FyXKvp_W8IfgwjeJiaCqyLo1cg0XFGSm00b-SzUhcnWz7U6NPE0&s" 
                /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestauCards = (props) => {
    console.log('props : ', props);
    return (
        <div className="restau-card">
            <img 
                className="restau-logo"
                alt="restau-logo" 
                src="https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg"
            />
            <h3>{props.RestauName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>    
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar-container">
                <input className="search-bar" type="text"/>
                <button className="search-button">Search</button>
            </div>
            <div className="restau-cards-container">
                <RestauCards RestauName='Meghna Foods' cuisine='Biryani, North Indian, Asian'/>
                <RestauCards RestauName='KFC' cuisine='Burgers, Fast Food'/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));                                  // it is also element/object
console.log('root : ', root); 
root.render(<AppLayout />);