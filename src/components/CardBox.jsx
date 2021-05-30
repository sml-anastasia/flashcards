import React from 'react';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

const CardBox = (props) => {
    return (
        <div className="card-slider">
            <img
            className="left-arrow"
            src={leftArrow}
            alt="left-arrow"
            onClick={props.showPrev}></img>
            <div>
                {props.children}
                <p className="card-counter">
                    {props.number} / {props.total}
                </p>
            </div>
            
            <img
            className="right-arrow"
            src={rightArrow}
            alt="right-arrow"
            onClick={props.showNext}></img>
            
        </div>
    )
}

export default CardBox;