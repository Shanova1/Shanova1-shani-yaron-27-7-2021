import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CityContainer from "../../Components/CityContainer/CityContainer";
import "./Home.css";

function Home() {
  const [background, setBackground] = useState({});
  const cityURL = useSelector((state) => state.cityPic.data);

useEffect(() => {
    cityURL &&
      setBackground({
        backgroundImage: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.5)), url(${cityURL})`,
      });
  }, [cityURL]);

  return (
    <>
      <div className="home-wrapper" style={background}>
        <SearchBar />
        <CityContainer />
      </div>
    </>
  );
}

export default Home;
