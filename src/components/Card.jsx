function Card(props) {
    return(
        <div className="card">
            <div className="card-word">{props.english}</div>
            <div className="card-transcr">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}
export default Card;