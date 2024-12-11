import React, { useState } from "react";

import image1 from '../assests/1.png';
import image2 from '../assests/2.png';
import image3 from '../assests/3.png';
import image4 from '../assests/4.png';
import image5 from '../assests/5.png';
import image6 from '../assests/6.png';
import image7 from '../assests/7.png';
export default function DisplayPic() {
    const [pictures, setPicuters] = useState([image1, image2, image3, image4, image5, image6, image7])
    const [index, setIndex] = useState(0)
    const prev = () => {
        if (index > 0) {
            setIndex(index-1)
        }

        else {
            setIndex(0)
        }
    }



    const next = () => {
        if (index < pictures.length -1)
            setIndex(index +1)
        else
            setIndex(pictures.length - 1)
    }

    return (
        <>
            <button onClick={next} >+</button>
            <button onClick={prev}>-</button>
            <img src={pictures[index]} alt="Display" />
        </>
    );
}