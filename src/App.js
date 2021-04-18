import './App.css';
import Card from './components/Card';
import Bar from './components/Bar';
import List from './components/List';
// import ModalAdd from './components/ModalAdd';
import './assets/styles/style.scss';

let wordsJSON = `[
{"id":"0","english":"","transcription":"","russian":"","tags":"", "isSelected": "true"},
{"id":"1","english":"stork","transcription":"[ stɔːk ]","russian":"аист","tags":"животные"},
{"id":"2","english":"shark","transcription":"[ ʃɑːk ]","russian":"акула","tags":"животные, еда"},
{"id":"3","english":"antelope","transcription":"[ ˈæntɪləʊp ]","russian":"антилопа","tags":"животные"},
{"id":"4","english":"butterfly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","tags":"животные"},
{"id":"5","english":"hedgehog","transcription":"[ ˈhedʒhɒɡ ]","russian":"ёж","tags":"животные"},
{"id":"6","english":"library","transcription":"[ ˈlaɪbrəri ]","russian":"библиотека","tags":"город"},
{"id":"7","english":"lost property office","transcription":"[ lɒst ˈprɒpəti ˈɒfɪs ]","russian":"бюро находок", "tags":"город"},
{"id":"8","english":"gallery","transcription":"[ ˈɡæləri ]","russian":"галерея","tags":"город, путешествия"},
{"id":"9","english":"traffic","transcription":"[ ˈtræfɪk ]","russian":"движение","tags":"город"},
{"id":"10","english":"cinema","transcription":"[ ˈsɪnəmə ]","russian":"кино","tags":"город"},
{"id":"11","english":"accompany","transcription":"[ tuː əˈkʌmpəni ]","russian":"аккомпанировать","tags":"музыка"},
{"id":"12","english":"bagpipe","transcription":"[ ˈbægpaɪp ]","russian":"волынка","tags":"музыка"},
{"id":"13","english":"balalaika","transcription":"[ ˌbæləˈlaɪkə ]","russian":"балалайка","tags":"музыка, культура"},
{"id":"14","english":"bassoon","transcription":"[ bə'suːn ]","russian":"фагот","tags":"музыка"},
{"id":"15","english":"baton","transcription":"[ ˈbætən ]","russian":"дирижерская палочка","tags":"музыка"}
]
`;

let words = JSON.parse(wordsJSON);

function App() {
  return (
    <div className="App">
      <h1 className="head-title">Flashcards</h1>
      <Bar></Bar>
      <button className="new-word_btn">add new word</button>
      <table className="words-list">
        <tr className="words-list_item">
          <td>#</td>
          <td>слово</td>
          <td>транскрипция</td>
          <td>перевод</td>
          <td>теги</td>
          <td></td>
        </tr>
        {
          words.map((word) => <List id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></List>)
        }
        
      </table>
      <div className="container">
      {
        words.map((word) =>
          <Card english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}></Card>
          )
        }
      </div>
    </div>
  );
}

export default App;