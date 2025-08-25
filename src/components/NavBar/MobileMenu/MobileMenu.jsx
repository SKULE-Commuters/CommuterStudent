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
            // Hide navbar after user clicks a link, after scrolling or else navbar stays open
            setTimeout(() => {
                props.updateDisplayNav(false);
            }, 800);
        }
        dispatch(setSideBar(false));
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
                <a href="/"><button className="nav-link__mobile"><p>Home</p></button></a>
                <a href="/about"><button className="nav-link__mobile"><p>About Us</p></button></a>
                <a href="/resources"><button className="nav-link__mobile"><p>Resources</p></button></a>
                <a href="/clubs"><button className="nav-link__mobile"><p>Clubs</p></button></a>
            </div>
        </>
    );
}

export default MobileMenu;
