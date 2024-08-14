import './Dropdowns.css';

const Dropdowns = (props) => {
    /* Check if any child Dropdown contains map property */
    const isMapDropdowns = props.children.some(child => child.props.map);

    return (
        <div className="dropdowns" style={isMapDropdowns ? { maxWidth: "75rem" } : {}}>
            {props.children.length !== 0 ?
                props.children :
                <p style={{ color: "#636363", fontStyle: "italic" }}>No results for the specified filters.</p>
            }
        </div>
    );
};

export default Dropdowns;