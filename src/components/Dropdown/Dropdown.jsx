import './Dropdown.css';
import { Caret } from '../../assets';
import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faSearchMinus, faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [controlsOnLeft, setControlsOnLeft] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // bold and underline the first part of the string for clubs section
    const formatItem = (item) => {
        const match = item.match(/^\w+\s+\w+:/);
        if (match) {
            const bolded = match[0];
            const rest = item.substring(bolded.length);
            return `<u><b>${bolded}</b></u>${rest}`;
        }
        return item;
    };

    const isMapDropdown = props.map !== undefined;
    const isClubDropdown = !isMapDropdown && props.content[0].slice(0, 16) === "Club description"

    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={handleToggle}>
                <span className={`dropdown__header__caret ${isOpen ? "open" : ""}`}>
                    <img src={Caret} alt="caret" />
                </span>
                <div className="dropdown__header__title">
                    {/* margin and height combo keeps club and non-club dropdowns about the same height while displaying club logos larger */}
                    <h3 style={isClubDropdown ? { marginTop: "0.6em", marginBottom: "0.6em" } : {}} >
                        {props.image && 
                            <img src={props.image} 
                                height={isClubDropdown ? "40px" : "20px"}
                                style={{marginRight: "min(1.5vw, 1rem)"}}
                                alt=""
                            />}
                        {props.title}
                    </h3>
                </div>
            </div>
            <div className={`dropdown__content ${(isOpen ? "open-ul" : "closed-ul")}`}>
                {isMapDropdown ?
                    <TransformWrapper doubleClick = {{mode: "toggle"}} >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                <div className={`dropdown__map__controls ${controlsOnLeft ? "dropdown__map__controls__left" : "dropdown__map__controls__right"}`}>
                                <button onClick={() => zoomIn()}><FontAwesomeIcon icon={faSearchPlus}/></button>
                                    <button onClick={() => zoomOut()}><FontAwesomeIcon icon={faSearchMinus}/></button>
                                    <button onClick={() => resetTransform()}><FontAwesomeIcon icon={faTimes}/></button>
                                    <button onClick={() => setControlsOnLeft(!controlsOnLeft)}>
                                        <FontAwesomeIcon icon={controlsOnLeft ? faArrowRight : faArrowLeft}/>
                                    </button>
                                </div>
                                <TransformComponent>
                                    <img src={props.map} alt={props.title} className="dropdown__map" />
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                    :
                    <ul>
                        {props.content.map((item, index) => (
                                <li key={index} className="dropdown__content__item" dangerouslySetInnerHTML={{__html: formatItem(item)}}></li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )

}

Dropdown.defaultProps = {content: [], title: "sus", image: "sus"};
export default Dropdown;

