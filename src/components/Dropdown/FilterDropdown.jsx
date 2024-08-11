import './FilterDropdown.css';
import { useState } from 'react';

const FilterDropdown = ({ title, image, filterOptions }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filter__dropdown">
            <div className="filter__dropdown__header" onClick={handleToggle}>
                <div className="filter__dropdown__header__title">
                    <h3>
                        {image && <img src={image} height="20px" style={{ marginRight: "min(1.5vw, 1rem)" }} alt="" />}
                        {title}
                    </h3>
                </div>
            </div>
            <div className={`filter__dropdown__content ${isOpen ? "open-ul" : "closed-ul"}`}>
                {filterOptions}
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
