import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Body = ({ fullRestoList, restoList, setRestoList, setFullRestoList }) => {
  const [topBtn, setTopBtn] = useState("block");
  const [allBtn, setAllBtn] = useState("none");
  const [searchText, setSearchText] = useState("");
  console.log("body rendered");

  return (
    <div className="body">
      <div className="body-header">
        <button
          className="topRatedResto-btn"
          onClick={() => {
            const filteredList = fullRestoList.filter(
              (data) => data.info.avgRating > 4.3
            );
            setRestoList(filteredList);
            filteredList ? setTopBtn("none") : setTopBtn("block");
            filteredList ? setAllBtn("block") : setTopBtn("none");
          }}
          style={{ display: topBtn }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="allResto-btn"
          style={{ display: allBtn }}
          onClick={() => {
            setRestoList(fullRestoList);
            setTopBtn("block");
            setAllBtn("none");
          }}
        >
          Show All Restaurants
        </button>
        <div className="search">
          <input
            type="search"
            placeholder="search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedResto = fullRestoList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              console.log(searchedResto, "searchedResto");

              setRestoList(searchedResto);
              setSearchText("");
              setAllBtn("block");
              setTopBtn("none");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restoContainer">
        <Link className="restoCards" to="/restoDetails">
          {restoList?.map((restoData, i) => (
            <RestoCard key={i} restoData={restoData} />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Body;
