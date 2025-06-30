import React from "react";
import ReactDOM from 'react-dom/client';
import restaurants from './restaurants.json';

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
    return (
        <div className="restau-card">
            <img 
                className="restau-logo"
                alt="restau-logo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${props.cloudinaryImageId}`}
            />
            <h3>{props.name}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.avgRating}</h4>
            <h4>Cost for TWO : {props.costForTwo}</h4>
             <h4>{props.slaString}</h4>
        </div>    
    )
}

const restrauArr = restaurants.cards.map(obj => obj.card).map(obj => obj.card);

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar-container">
                <input className="search-bar" type="text"/>
                <button className="search-button">Search</button>
            </div>
            <div className="restau-cards-container">
                {
                    restrauArr.map(restrau => 
                        <RestauCards 
                            key={restrau.info.id}
                            name={restrau.info.name}
                            cuisines={restrau.info.cuisines.join(', ')} 
                            avgRating={restrau.info.avgRating}
                            slaString={restrau.info.sla.slaString}
                            costForTwo={restrau.info.costForTwo / 100}
                            cloudinaryImageId={restrau.info.cloudinaryImageId}
                        />
                    )
                }
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