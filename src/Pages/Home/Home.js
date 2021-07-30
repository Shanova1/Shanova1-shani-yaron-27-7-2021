import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CityContainer from "../../Components/CityContainer/CityContainer";

function Home(props) {

  // const arr = [{ cityKey: "215854", cityName: "Tel Aviv" }, {cityKey:"349727", cityName:"New York"}];


//  roundOneLikes.filter((obj1) =>
//   roundTwoLikes.some((obj2) => obj1.id === obj2.id)
//   );

// const check = () => {
//   console.log(arr.some((city) => city.cityKey === "215854"))
// }


  return (
    <>
      <SearchBar />
      <CityContainer />
      {/* <button onClick={check}>checkkkk</button> */}
    </>
  );
}

export default Home;
