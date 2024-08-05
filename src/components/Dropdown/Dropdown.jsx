import './Dropdown.css';
import { Caret } from '../../assets';
import { useState } from 'react';


const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // bold and underline the first part of the string for clubs section
    const formatItem = (item) => {
        const regex = /^(Meeting|Time)\s+\S+\s+\S+/;
        const match = item.match(regex);
        if (match) {
            const bolded = match[0];
            const rest = item.substring(bolded.length);
            return `<u><b>${bolded}</b></u>${rest}`;
        }
        return item;
    };

    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={handleToggle}>
                <span className={`dropdown__header__caret ${isOpen ? "open" : ""}`}>
                    <img src={Caret} alt="caret" />
                </span>
                <div className="dropdown__header__title">
                    <h3>
                        {props.image && <img src={props.image} height="20px" style={{marginRight:"min(1.5vw, 1rem)"}} alt="" />}
                        {props.title}
                    </h3>
                </div>
            </div>
            <div className={`dropdown__content ${(isOpen ? "open-ul" : "closed-ul")}`}>
                <ul>
                    {props.content.map((item, index) => (
                            <li key={index} className="dropdown__content__item" dangerouslySetInnerHTML={{__html: formatItem(item)}}></li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

Dropdown.defaultProps = {content: [], title: "sus", image: "sus"};
export default Dropdown;