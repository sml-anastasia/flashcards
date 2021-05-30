import React from 'react';
import List from './List';
import words from '../data';

export default class Main extends React.Component{
    render() {
        return(
        <div className="words-list">
            <div className="word-info word-info_title">
                <span>№</span>
                <span>слово</span>
                <span>транскрипция</span>
                <span>перевод</span>
                <span>теги</span>
            </div>
        {
            words.map((word) => <List id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></List>)
        }
        </div>
        )
    }
}