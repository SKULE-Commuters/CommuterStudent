import { useState, useEffect } from "react";
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
    
    useEffect(() => {
        const handleScrollEvent = () => {
            const currentYPos = window.scrollY;
            updateDisplayNav(currentYPos < yPos || currentYPos < 100);
            setYPos(currentYPos);
        };
        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, [yPos]);

    const handleScrollTo = (id) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Hide navbar after user clicks a link, after scrolling or else navbar stays open
            setTimeout(() => {
                updateDisplayNav(false);
            }, 800);
        }
    };
    
    return (
        <div className = {displayNav || sideBarOn ? "nav-bar__active" : "nav-bar"} onClick={e => {
            e.stopPropagation(); 
            dispatch(setSideBar(false));
        }}>
            <button onClick={e => handleScrollTo('home')} className="logo-button" aria-label="Scroll to home">
                <img src={CommuterLogo} alt='Skule Commuter logo'/>
            </button>
            <span className="nav-container">
                <button className="nav-link" onClick={e => handleScrollTo('home')}><p>Home</p></button>
                <button className="nav-link" onClick={e => handleScrollTo('about-us')}><p>About Us</p></button>
                <button className="nav-link" onClick={e => handleScrollTo('resources')}><p>Resources</p></button>
                <button className="nav-link" onClick={e => handleScrollTo('clubs')}><p>Clubs</p></button>
            </span>
            <span className="nav-mobile-container">
                <MobileMenu firstOpen={firstOpen} setFirstOpen={setFirstOpen} updateDisplayNav={updateDisplayNav} />
            </span>
        </div>   
    );
}

export default NavBar;