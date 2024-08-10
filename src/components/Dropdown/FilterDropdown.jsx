import './FilterDropdown.css';
import { Caret } from '../../assets';
import { useState } from 'react';

const FilterDropdown = ({ title, image, filterOptions }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={handleToggle}>
                <span className={`dropdown__header__caret ${isOpen ? "open" : ""}`}>
                    <img src={Caret} alt="caret" />
                </span>
                <div className="dropdown__header__title">
                    <h3>
                        {image && <img src={image} height="20px" style={{ marginRight: "min(1.5vw, 1rem)" }} alt="" />}
                        {title}
                    </h3>
                </div>
            </div>
            <div className={`dropdown__content ${isOpen ? "open-ul" : "closed-ul"}`}>
                <ul>
                    <li>{filterOptions}</li>
                </ul>
            </div>
        </div>
    );
};

FilterDropdown.defaultProps = {
    title: "Filter",
    image: "",
    filterOptions: <div>No filter options provided</div>
};

export default FilterDropdown;
