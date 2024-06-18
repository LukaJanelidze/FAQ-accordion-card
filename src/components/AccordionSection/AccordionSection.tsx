import React from 'react';
import './AccordionSection.css'

interface IProps {
    id: number;
    title: string;
    subText: string;
    chosenSection: number | null;
    setChosenSection: (id: number | null) => void;
}

const AccordionSection: React.FC<IProps> = (props) => {

    const clickHandler = (id: number): void => {
        if(id === props.chosenSection){
            props.setChosenSection(null);
        } else {
            props.setChosenSection(id);
        }
    }

    return(
        <div className="accordion-container" 
        onClick={() => clickHandler(props.id)}
        >
            <div className="accordion-container-title-section">
            <p className="accordion-container-title-text-styles" style={ props.chosenSection === props.id ? {fontWeight:"bold"}: {} }>{props.title}</p>
            {props.chosenSection === props.id ? (
                <img src={"./upArrow.png"} alt="" />
            ) : (
                <img src={"./downArrow.png"} alt="" />
            )}
            </div>
            {props.chosenSection === props.id ? (
                <p className="accordion-container-sub-text-styles">{props.subText}</p>
            ) : null}
            <hr />
        </div>
    )
}

export default AccordionSection;