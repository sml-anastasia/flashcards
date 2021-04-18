import React, { Fragment } from 'react';

function AddWordForm(props) {
    return (
        <Fragment>
            <td></td>
            <td><input className="word-english" value={props.english} placeholder="enter word"/></td>
            <td><input className="word-transcription" value={props.transcription} placeholder="enter transcription"/></td>
            <td><input className="word-russian" value={props.russian} placeholder="enter translate"/></td>
            <td><input className="word-tags" value={props.tags} placeholder="enter tags"/></td>
            <td>
                <button className="btn_add">добавить</button>
                <button className="btn_edit">ред</button>
                <button className="btn_del">удалить</button>
            </td>
        </Fragment>
    );
}

function WordItem(props) {
    return (
        <Fragment>
            <td>{props.id}</td>
            <td>{props.english}</td>
            <td>{props.transcription}</td>
            <td>{props.russian}</td>
            <td>{props.tags}</td>
            <td>
                <button className="btn_edit">ред</button>
                <button className="btn_del">удалить</button>
            </td>
        </Fragment>
    );
}

class List extends React.Component{
    render() {
        const {id, english, transcription, russian, tags, isSelected} = this.props;
        return(
            <tr>
            {isSelected ? <AddWordForm isSelected={isSelected}></AddWordForm>
            : <WordItem id={id} english={english} transcription={transcription} russian={russian} tags={tags}></WordItem>}
            </tr>
        );
    }
}
export default List;