
import './App.css';
import Card from './components/Card';
import Bar from './components/Bar';
import ModalAdd from './components/ModalAdd';

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>
      <Bar></Bar>
      <button>add new card</button>
      <div className="container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <ModalAdd></ModalAdd>
    </div>
  );
}

export default App;