import {React,useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import { auth } from "../firebase";
import Home from "./Home"
import "./Header.css";
import { GlobalContext } from "../context/GlobalState"

const Header = () => { 
  // const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { user } = context
  console.log('userHeader ',user)
  const handleAuthentication = () => {
    auth.signOut();
    // navigate('/login');
  };
  return (
    <>
  <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user.name && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              Hello {user.name ? `${user.name.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user.name ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt='shoppingCart' />
            <span className="header-optionLineTwo header-basketCount">
              {user.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    </>
   
  );
};

export default Header;
