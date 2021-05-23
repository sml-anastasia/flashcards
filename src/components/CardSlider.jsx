import React, { useState } from 'react';
import CardBox from './CardBox';
import Card from './Card';

const CardSlider = (props) => {
    const [currentItem, setPosition] = useState(0);
    const showNext = () => {
        setPosition(currentItem + 1);
        console.log('pressed');
    }

    const showPrev = () => {
        if (currentItem > 0)
        setPosition(currentItem - 1);
        console.log('pressed');
    }
    return (
        <CardBox
        showPrev={showPrev}
        showNext={showNext}
        >
            <Card></Card>
        </CardBox>
    )
}

export default CardSlider;