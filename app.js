import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/header_logo.jpg";
import suggestedResturants from "./Suggested_Resturants.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { text, cloudinaryId } = props.resObj;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryId}`}
        alt="res-logo"
      />
      <h3>{text}</h3>
      <h4>Biryani, Asian, North Indian</h4>
      <h4>40 minutes</h4>
      <h4>4.5 stars</h4>
    </div>
  );
};
const Body = () => {
  const restaurantSuggestions = suggestedResturants?.data?.suggestions.filter(
    (suggestion) => suggestion.type === "RESTAURANT"
  );
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantSuggestions &&
          restaurantSuggestions?.map((res) => <ResturantCard key={res.restaurantId} resObj={res} />)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
