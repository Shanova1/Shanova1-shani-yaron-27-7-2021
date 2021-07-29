import React from "react";
import SearchBar from "../Components/SearchBar";
import CityDisplay from "../Components/CityDisplay";

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
      <CityDisplay />
      {/* <button onClick={check}>checkkkk</button> */}
    </>
  );
}

export default Home;
