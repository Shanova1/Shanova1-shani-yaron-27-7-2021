import { useEffect } from "react";
import { useSelector } from "react-redux";
import useGeoLocation from "../Redux/Services/useGeoLocation";

const currentPosition = useSelector(
    (state) => state.currentPosition.currentPosition
  );

  const { getCurrentPosition } = useGeoLocation();

  useEffect(() => {
    getCurrentPosition();
  }, [currentPosition]);