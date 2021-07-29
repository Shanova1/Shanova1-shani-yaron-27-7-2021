import { useEffect } from "react";
import { useSelector } from "react-redux";
import GeoLocation from "../Redux/Services/Geolocation";

const currentPosition = useSelector(
    (state) => state.currentPosition.currentPosition
  );

  const { getCurrentPosition } = GeoLocation();

  useEffect(() => {
    getCurrentPosition();
  }, [currentPosition]);