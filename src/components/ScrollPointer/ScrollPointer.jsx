import { useState, useEffect } from "react";
import './ScrollPointer.css'

import ChevronDownIcon from "../../assets/icons/chevron-down-solid.svg";

const ScrollPointer = () => {
    const [yPos, setYPos] = useState(0);
    const [displayPointer, updateDisplayPointer] = useState(true);
    
    useEffect(() => {
        const handleScrollEvent = () => {
            const scrollDiv = document.getElementById("site-content");
            const total = scrollDiv.scrollHeight;
            const scrolled = window.scrollY;
            const MAGIC_CUTOFF = 700; // This number is a bit funny because it depends on the configuration of the screen. This seems to work for most cases --gfaus
            updateDisplayPointer(total - scrolled > MAGIC_CUTOFF);
        };
        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, [yPos]);

    return (
        <>
            <div className={`pointer ${displayPointer ? "pointer__active" : ""}`}>
                <img src={ChevronDownIcon} alt="down arrow"/>
            </div>
        </>
    );
}


export default ScrollPointer;