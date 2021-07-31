import { setCurrentPosition } from "../Redux/Reducers/currentPositionSlice";
import { useDispatch } from "react-redux";

function useGeoLocation() {
  const dispatch = useDispatch();

  const getCurrentPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (pos) => {
      const crd = pos.coords;
      const currentPosition = `${crd.latitude}, ${crd.longitude}`;
      dispatch(setCurrentPosition(currentPosition));
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      dispatch(setCurrentPosition('fail'));
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  return { getCurrentPosition,  };
}

export default useGeoLocation;
