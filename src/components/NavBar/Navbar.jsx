import { React, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../..";
import './Navbar.css';
import { CommuterLogo } from "../../assets"; 
import MobileMenu from "./MobileMenu/MobileMenu";

const NavBar = () => {
    const [yPos, setYPos] = useState(0);
    const [displayNav, updateDisplayNav] = useState(true);

    const sideBarOn = useSelector((store) => store.sidebar_reducer);
    const dispatch = useDispatch();
    const [firstOpen, setFirstOpen] = useState(false);

    const handleScrollEvent = useCallback(() => {
        const currentYPos = window.pageYOffset;
        updateDisplayNav(currentYPos < yPos || currentYPos < 100);
        setYPos(currentYPos);
    }, [yPos]);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);
        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, [yPos, handleScrollEvent]);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className = {displayNav || sideBarOn ? "nav-bar__active" : "nav-bar"} onClick={(e) => {
            e.stopPropagation(); 
            dispatch(setSideBar(false));
        }}>
            <button onClick={() => handleScrollTo('home')} className="logo-button">
                <img src={CommuterLogo} alt='Skule Commuter logo'/>
            </button>
            <span className="nav-container">
                <button className="nav-link" onClick={() => handleScrollTo('home')}><p>Home</p></button>
                <button className="nav-link" onClick={() => handleScrollTo('about-us')}><p>About Us</p></button>
                <button className="nav-link" onClick={() => handleScrollTo('resources')}><p>Resources</p></button>
            </span>
            <span className="nav-mobile-container">
                <MobileMenu firstOpen={firstOpen} setFirstOpen={setFirstOpen}/>
            </span>
        </div>   
    );
}

export default NavBar;