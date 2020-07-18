import React, {useState, useEffect} from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getColors} from "../api/bubbleAPI";

const BubblePage = () => {
    const [colorList, setColorList] = useState([]);
    useEffect(() => {
        getColors()
            .then((response) => {
                setColorList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[])

    return (
        <>
            <ColorList colors={colorList} updateColors={setColorList}/>
            <Bubbles colors={colorList}/>
        </>
    );
};

export default BubblePage;
