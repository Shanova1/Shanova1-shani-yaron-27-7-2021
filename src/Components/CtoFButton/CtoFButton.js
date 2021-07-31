import React, { useState } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {temperatureDegreeToggle} from '../../Redux/Reducers/temperatureDegreeSlice'

function CtoFButton() {

    const [buttonColorC, setButtonColorC] = useState("info")
    const [buttonColorF, setButtonColorF] = useState("light")
    
    const dispatch = useDispatch();

    const handleClickC = () => {
        setButtonColorC("info")
        setButtonColorF("light")
        dispatch(temperatureDegreeToggle(true));
    }

    const handleClickF = () => {
        setButtonColorF("info")
        setButtonColorC("light")
        dispatch(temperatureDegreeToggle(false));
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example">
              <Button variant={buttonColorC} onClick={handleClickC}>°C</Button>
              <Button variant={buttonColorF} onClick={handleClickF}>°F</Button>
            </ButtonGroup>
        </>
    )
}

export default CtoFButton;