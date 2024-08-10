import './Dropdowns.css';

const Dropdowns = (props) => {

    return (
        <div className="dropdowns">
            {props.children.length !== 0 ?
                props.children :
                <p style={{ color: "#636363", fontStyle: "italic" }}>No results for the specified filters.</p>
            }
        </div>
    )

}

export default Dropdowns;