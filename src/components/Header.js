import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          id="logo"
          src="https://as1.ftcdn.net/v2/jpg/11/66/60/06/1000_F_1166600697_PrTZzub1fop0Ep0Jebexv9ykvcxUAzpc.jpg"
          alt="FoodLogo"
        />
      </div>
      <div className="navItems">
        <ul className="list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/cart">
            <img
              id="cartPhoto"
              src="https://icons.veryicon.com/png/o/application/wq/shopping-cart-35.png"
              alt="Cart"
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
