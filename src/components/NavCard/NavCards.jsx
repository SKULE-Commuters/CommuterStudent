import './NavCards.css';


// The Card element is for the individual cards, while Cards serves as a wrapper and dynamic resizer for the individual Cards.
function NavCards(props) {
    return (
        <div className="navcards">
            {props.children}
        </div>
    )
}

export default NavCards;