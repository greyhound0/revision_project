import ReactDOM from "react-dom/client";
import "./App.css";
import "./components/RestoCard.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import { useEffect, useState } from "react";
import Body from "./components/Body.js";
import Shimmer from "./components/Shimmer.js";
import RestoDetails from "./components/RestoDetails.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [restoList, setRestoList] = useState([]);
  const [fullRestoList, setFullRestoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6502829&lng=77.1642308&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestoList(restaurants);
      setFullRestoList(restaurants);
      console.log(fullRestoList, "fullrestoApp");
    } catch (error) {
      console.error("Error fetching restaurant ", error);
      setRestoList([]);
      setFullRestoList([]);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restoDetails" element={<RestoDetails />} />
          <Route
            path="/"
            element={
              loading ? (
                <Shimmer />
              ) : (
                <Body
                  setFullRestoList={setFullRestoList}
                  setRestoList={setRestoList}
                  fullRestoList={fullRestoList}
                  restoList={restoList}
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

root.render(<App />);
