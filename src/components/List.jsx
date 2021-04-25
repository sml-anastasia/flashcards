import React from 'react';

function AddWordForm(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span><input className="word-english" value={props.english} placeholder="enter word"/></span>
            <span><input className="word-transcription" value={props.transcription} placeholder="enter transcription"/></span>
            <span><input className="word-russian" value={props.russian} placeholder="enter translate"/></span>
            <span><input className="word-tags" value={props.tags} placeholder="enter tags"/></span>
        </div>
    );
}

function WordItem(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russian}</span>
            <span>{props.tags}</span>
        </div>
    );
}

class List extends React.Component{
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
        const {id, english, transcription, russian, tags} = this.props;
        return(
            <div>
            {this.state.pressed ?
                <div className="line">
                    <AddWordForm id={id} english={english} transcription={transcription} russian={russian} tags={tags}></AddWordForm>
                    <div className="btn-box">
                    <button className="btn_add">
                        <img src="./images/icon-save.svg" alt=""/>
                    </button>
                    <button className="btn_close" onClick={this.handleChange}>
                        <img src="./images/icon-add.svg" alt=""/>
                    </button>
                    <button className="btn_del">
                        <img src="./images/icon-delete.svg" alt=""/>
                    </button>
                    </div>
                </div>
                :
                <div className="line">
                    <WordItem id={id} english={english} transcription={transcription} russian={russian} tags={tags}></WordItem>
                    <div className="btn-box">
                    <button className="btn_edit" onClick={this.handleChange}>
                        <img src="./images/icon-pen.svg" alt=""/>
                    </button>
                    <button className="btn_del">
                        <img src="./images/icon-delete.svg" alt=""/>
                    </button>
                    </div>
                </div>
                }
            </div>
        );
    }
}
export default List;


/* <td>
                <button className="btn_add">
                <img src="./images/icon-add.svg" alt=""/>
                </button>
                <button className="btn_edit">
                    <img src="./images/icon-pen.svg" alt=""/>
                </button>
                <button className="btn_del">
                    <img src="./images/icon-delete.svg" alt=""/>
                </button>
            </td> */