import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,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"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Leftover</span>
            <span className="header__optionLineTwo">& Items</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">List</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
