import Background from '../Background/Background';
import './NavCard.css';

const bgImage = (id) => {
    return require("../../assets/" + id);
}

// The NavCard element is displayed similar to the Card element, but functions as a button to go to other spaces in the page.
function NavCard(props) {
    return (
        <a href={props.page} className="navcard__link">
            <div className="navcard"
                style={{
                    backgroundImage: props.bgImage ? `url(${bgImage(props.bgImage)})` : "none"
                }}>
                <h3 className="navcard__label">{props.label}</h3>
            </div>
        </a>
    )
}




export default NavCard;