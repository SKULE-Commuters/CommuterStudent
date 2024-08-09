import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../../..";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements

const MobileMenu = (props) => {
    const sideBarOn = useSelector((store) => store.sidebar_reducer);
    const dispatch = useDispatch();

    const toggleMenu = (e) => {
        e.stopPropagation(); 
        props.setFirstOpen(true);
        dispatch(setSideBar(!sideBarOn));
    }

    const handleScrollTo = (id, e) => {
        e.stopPropagation();
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        dispatch(setSideBar(false)); // Close the sidebar after scrolling
    };

    return (
        <>
            <div className="nav-mobile-toggle">
                <input onClick={toggleMenu} className={sideBarOn ? "checked" : ""} type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* This complicated looking nested ternary is because we don't want the mobile nav to do the slideOut animation unless clicked on.
                Without this, the user sees the mobile nav slide out on page load, which looks unprofessional and janky. */}
            <div className={`nav-links ${(props.firstOpen ? (sideBarOn ? "inView" : "outOfView") : "")}`} style={{height: window.innerHeight + "px"}} onClick={(e) => {
                e.stopPropagation(); 
                dispatch(setSideBar(true));
            }}>
                <button className="nav-link__mobile" onClick={e => handleScrollTo('home', e)}><p>Home</p></button>
                <button className="nav-link__mobile" onClick={e => handleScrollTo('about-us', e)}><p>About Us</p></button>
                <button className="nav-link__mobile" onClick={e => handleScrollTo('resources', e)}><p>Resources</p></button>
                <button className="nav-link__mobile" onClick={e => handleScrollTo('clubs', e)}><p>Clubs</p></button>
            </div>
        </>
    );
}

export default MobileMenu;
