import React, { useState } from 'react';
import CardBox from './CardBox';
// import Card from './Card';

function WordInfo(props) {
    return (
        <div className="card-content">
            <div className="card-transcr">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}

const CardSlider = (props) => {
    const words = props.words;
    const [currentItem, setPosition] = useState(0);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }
    const showNext = () => {
        setPosition(currentItem + 1);
        console.log('pressed');
    }

    const showPrev = () => {
        if (currentItem > 0)
        setPosition(currentItem - 1);
        console.log('pressed');
    }

    if (currentItem >= words.length) {
        return (<div>finish</div>)
    } else {
    return (
        <CardBox
        showPrev={showPrev}
        showNext={showNext}
        number={currentItem + 1}
        total={words.length}
        children={
            <div className="card">
            <div className="card-word">{words[currentItem].english}</div>
            {pressed ? (
                <WordInfo transcription={words[currentItem].transcription} russian={words[currentItem].russian} tags={words[currentItem].tags}></WordInfo>
                    ) : (
                <button onClick={handleChange} className="card-btn">проверить</button>
            )}
        </div>
        }
        >
        </CardBox>
    )}
}

export default CardSlider;