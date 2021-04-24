import React from 'react';

function WordInfo(props) {
    return (
        <div className="card-content">
            <div className="card-transcr">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}

function ShowWord(props) {
    return(
        <button className="check-btn">Проверить</button>
    );
}
export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }

    handleChange = () => {
        this.setState(
            {
                pressed: !this.state.pressed
            }
        );
    }
    render() {
        const {transcription, russian, tags, english} = this.props;
        return(
            <div className="card">
                <div className="card-word">{english}</div>
                {
                    this.state.pressed ?
                    <WordInfo transcription={transcription} russian={russian} tags={tags}></WordInfo> :
                    <ShowWord onClick={this.handleChange}></ShowWord>
                }
            </div>
        );
    }}


    // Карточке слова добавьте состояние, которое будет отвечать за показывание/скрытие перевода. По умолчанию перевод всегда скрыт.  При нажатии на кнопку "Показать перевод", появляется перевод слова, а кнопка исчезает. Реализуйте этот функционал с помощью внутреннего состояния элемента и условного рендеринга.


// function Card(props) {
//     return(
//         <div className="card">
//             <div className="card-word">{props.english}</div>
//             <div className="card-transcr">{props.transcription}</div>
//             <div className="card-def">{props.russian}</div>
//             <div className="card-category">{props.tags}</div>
//         </div>
//     );
// }
// export default Card;