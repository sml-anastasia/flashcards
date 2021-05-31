import './App.css';
import './assets/fonts/fonts';
import Card from './components/Card';
import Header from './components/Header';
import Main from './components/Main';
import CardSlider from './components/CardSlider';
import NotFound from './components/NotFound';
import './assets/styles/style.scss';
import {
	BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import words from './data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <main>
        <Switch>
            <Route exact path="/main" component={Main} />

            <Route exact path="/game">
            <CardSlider words={words}></CardSlider>
            </Route>

            <Route exact path="/cards">
              <section className="card-box">
                {
                words.map((word) => <Card id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></Card>)
                }
              </section>
            </Route>

            <Route exact path="/">
              <Main/>
            </Route>

            <Route>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;